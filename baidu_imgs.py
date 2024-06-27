from concurrent.futures.thread import ThreadPoolExecutor

import requests
import json
import uuid
from datetime import datetime


"""
    多线程爬取百度图片
"""

header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
}


def download_imgs(page_url):
    res = requests.get(page_url, headers=header)
    img_items = json.loads(res.text)

    img_list = img_items['data']

    for img in img_list:
        img_url = img.get('thumbURL', '')
        # 获取图片的二进制流文件
        if img_url != '':
            img_res = requests.get(img_url, headers=header)
            img_content = img_res.content

            # 为下载的图片添加随机的图片名称
            file_name = uuid.uuid4()
            with open(f'./imgs/{file_name}.jpg', 'wb') as fw:
                fw.write(img_content)


def main():
    keyword = input("请输入搜索的关键字：")
    pages = int(input("请输入页数："))

    start_time = datetime.now()

    page_urls = []
    for i in range(pages):
        url = f"https://image.baidu.com/search/acjson?tn=resultjson_com" \
              f"&logid=5974699897798043656&ipn=rj&ct=201326592" \
              f"&is=&fp=result&fr=&word={keyword}&cg=star" \
              f"&queryWord={keyword}" \
              f"&cl=2&lm=&ie=utf-8" \
              f"&oe=utf-8&adpicid=&st=-1&z=&ic=0&hd=" \
              f"&latest=&copyright=&s=" \
              f"&se=&tab=&width=&height=&face=0" \
              f"&istype=2&qc=&nc=1&expermode=&nojc=" \
              f"&isAsync=&pn={(i+1)*30}&rn=30&gsm=3c&1719504109965="

        page_urls.append(url)

    # 单线程
    # for page_url in page_urls:
    #     download_imgs(page_url)

    # # 多线程
    with ThreadPoolExecutor(max_workers=len(page_urls)) as executor:
        # 方式一：
        # for page_url in page_urls:
        #     executor.submit(download_imgs, page_url)

        # 方式二：
        executor.map(download_imgs, page_urls)

    end_time = datetime.now()

    total_time = end_time - start_time
    print(f'总耗时为：{total_time.seconds}秒')


if __name__ == '__main__':
    # 单线程 下载10页300张图片耗时为：22秒
    # 多线程 下载10页300张图片耗时为：3秒
    # 单线程 下载20页600张图片耗时为：89秒
    # 多线程 下载20页600张图片耗时为：7秒
    main()
