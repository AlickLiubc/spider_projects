import os
import re
import json
import time
import requests

from datetime import datetime
from bs4 import BeautifulSoup

header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
}

BASE_DETAIL_URL = 'https://pvp.qq.com/web201605/'


def download_pics(img_download_url, cname, skin_name):
    if not os.path.exists(f'pics/{cname}'):
        os.mkdir(f'pics/{cname}')

    response = requests.get(img_download_url, headers=header)
    pic_content = response.content
    with open(f'pics/{cname}/{skin_name}.jpg', 'wb') as f_in:
        f_in.write(pic_content)

        print(f'已下载:{cname}--------{skin_name}')


def get_skins_from_detail(detail_url, ename, cname):
    # print(BASE_DETAIL_URL + detail_url)
    response = requests.get(BASE_DETAIL_URL + detail_url, headers=header)
    # response.apparent_encoding
    response.encoding = response.apparent_encoding
    # response.encoding = 'gbk'
    detail_html = response.text
    soup = BeautifulSoup(detail_html, 'lxml')
    ul = soup.find('ul', class_='pic-pf-list')
    data_img_name = ul['data-imgname']
    # print(data_img_name)
    skin_name_list = re.sub(r'&\d+', '', data_img_name).split('|')
    # print(skin_name_list)
    for index, skin_name in enumerate(skin_name_list):
        num = index + 1
        img_download_url = f'https://game.gtimg.cn/images/yxzj/img201606/heroimg/{ename}/{ename}-smallskin-{num}.jpg'
        download_pics(img_download_url, cname, skin_name)

    time.sleep(1)


def main():
    url = f'{BASE_DETAIL_URL}js/herolist.json'
    response = requests.get(url, headers=header)

    # 获取英雄数据的列表
    hero_list = json.loads(response.text)

    # 寻找页面上的所有a标签的元素链接
    url = f'{BASE_DETAIL_URL}herolist.shtml'
    response = requests.get(url, headers=header)
    # response.encoding = 'gbk'
    hero_list_html = response.text
    soup = BeautifulSoup(hero_list_html, 'lxml')
    a_link_list = soup.find('ul', class_='herolist').find_all('a')
    # print(a_link_list)

    # 遍历超链接的信息
    for hero in hero_list:
        # 英雄ID
        ename = hero['ename']
        # 英雄的名称
        cname = hero['cname']

        # for:dev
        # ename = 506
        # cname = '云中君'
        # print(str(ename))

        for a_link in a_link_list:
            detail_url = a_link['href']
            img_src = a_link.find('img')['src']
            # print(detail_url)
            # print(img_src)

            if str(ename) in img_src:
                # 进入英雄信息详情页面，收集英雄的皮肤数据
                # print(detail_url)
                # print(img_src)
                get_skins_from_detail(detail_url, ename, cname)
                # break
        # break


if __name__ == '__main__':
    start_time = datetime.now()
    main()
    end_time = datetime.now()
    total_time = end_time - start_time
    print(f'程序执行完成，总耗时为：{total_time.seconds}秒')

