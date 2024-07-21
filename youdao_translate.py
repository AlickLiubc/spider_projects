from playwright.sync_api import sync_playwright
import time
import requests
import hashlib
import sys
import json
import logging
from datetime import datetime

logger = logging.getLogger()
logger.setLevel(logging.INFO)
# 设置将日志输出到文件中，并且定义文件内容
now = datetime.now().strftime("%Y-%m-%d_%H")
file_info = logging.FileHandler(f"logs/error_{now}.log")
file_info.setLevel(logging.ERROR)
# 定义handler的输出格式
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_info.setFormatter(formatter)
logger.addHandler(file_info)

BASE_URL = 'https://fanyi.youdao.com/'
# BASE_URL = 'https://shared.ydstatic.com/'

context = sync_playwright().start()
browser = context.chromium.launch()
page = browser.new_page()

page.route(
    # "https://shared.ydstatic.com/dict/translation-website/0.1.3/js/textTranslate.da92fa14.js",
    "https://shared.ydstatic.com/dict/translation-website/0.1.4/js/textTranslate.da92fa14.js",
    lambda route: route.fulfill(path='js/mock_text_translate.js'),
)

page.goto(BASE_URL)

"""
    获取接口调用时需要的sign参数
"""
def get_sign(timestamp):
    client = 'fanyideskweb'
    product = 'webfanyi'
    key = 'fsdsogkndfokasodnaso'
    sign = hashlib.md5(f'client={client}&mysticTime={timestamp}&product={product}&key={key}'.encode()).hexdigest()
    return sign


"""
    获取经过加密后的翻译结果
"""
def get_encrypt_translate_result(query_word):
    url = 'https://dict.youdao.com/webtranslate'
    cookies = {
        'OUTFOX_SEARCH_USER_ID_NCOO': '1665420584.2586548',
        'OUTFOX_SEARCH_USER_ID': '237923297@157.0.135.102',
        'DICT_DOCTRANS_SESSION_ID': 'MjRmYzc4ZjYtNTlhZi00MWMyLWJlNzctM2MyNGYwNmYyNmMw',
    }

    header = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        # 'Cookie': 'OUTFOX_SEARCH_USER_ID_NCOO=1665420584.2586548; OUTFOX_SEARCH_USER_ID=237923297@157.0.135.102; DICT_DOCTRANS_SESSION_ID=MjRmYzc4ZjYtNTlhZi00MWMyLWJlNzctM2MyNGYwNmYyNmMw',
        'Origin': 'https://fanyi.youdao.com',
        'Referer': 'https://fanyi.youdao.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    timestamp = int(time.time() * 1000)
    sign = get_sign(timestamp)
    # print(sign)
    post_data = {
        "i": query_word,
        "from": "zh-CHS",
        "to": "en",
        "useTerm": "false",
        "domain": "0",
        "dictResult": "true",
        "keyid": "webfanyi",
        "sign": sign,
        "client": "fanyideskweb",
        "product": "webfanyi",
        "appVersion": "1.0.0",
        "vendor": "web",
        "pointParam": "client,mysticTime,product",
        "mysticTime": timestamp,
        "keyfrom": "fanyi.web",
        "mid": "1",
        "screen": "1",
        "model": "1",
        "network": "wifi",
        "abtest": "0",
        "yduuid": "abcdefg",
    }

    res = requests.post(url, data=post_data, headers=header, cookies=cookies)
    res.encoding = 'utf-8'
    return res.text


"""
    将加密返回的翻译结果数据，做解密处理为明文结果
"""
def get_decrypt_result(e):
    t = 'ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl'
    o = 'ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4'

    # e = 'Z21kD9ZK1ke6ugku2ccWu4n6eLnvoDT0YgGi0y3g-v0B9sYqg8L9D6UERNozYOHq8Klk-2RE9Zu77BcBjfy38ZxRNgKmDNV7V7Deg5TlIYwAaW5ylInR_b1V8PmpcoXw3tp27g_4fMiWQHlxk61YGamjHE3Q0PKo-Fue4L3O7M2Uyzv4RtQyofM2BDmaLGu0JiLXuf50VYVreYkeTMFMmVDEVWI-uD6Vgkc3ENu4KfnRgmaMY2Tpquo9VTvoPIT5PleCaBl2nL9FnNSbzia21j3RV8PmjDtW-MFLVbWGInXKLyDXeklCBWlsAjXP-xNkD5oAmA6X7LMeuEiZv2eHhb2lldsH0Zxox7dgpSHlIBLcmAnfMw_9LYflXy9pePep-t5u-9GgQFdaOLCy2cWJahsqtacJvY8IAyKtOPPOdILa-bHsJ3zPBdMn9Cb9pgXaB-o3IfQMHh3K6rAdLGHda8nw0TeiI8gnf8hc1PlDJtV5mHtC8fHuj_M3toNKvZGONxwigTYmWPbhTVp97vbCrLahFoe_Pc5WBIHcemvEfF19Ryh13P0dHsIXwpgYp6babpu9NNpo_X1IF1zmsLTG_1Vu7PrpUn973IJMXcPXxIFAYUIGi23w25btVEbThEi9TBlOUD56rQbm943PIVovsHgnrKYQClddiTLnDnI21TkqNTLVjhBHAZYUDGoGijwhHNmErG9vKKQFiPu3fHx-oJTbIe9_iAEw7QYD1qDVfv5MK2eTCMN5_BYub1BUq98dJRNDT59LZtF7eziItOiMRaPXl0nuhmuCIUQ2p4miIN-_L6EEZLTlsRkpV8zW3yH4'
    # result = page.evaluate(f"()=>{{return window.decrypt}}")
    result = page.evaluate(f"()=>{{return window.decrypt.decodeData('{e}', '{t}', '{o}')}}")
    # {"code":0,"dictResult":{"ce":{"word":{"trs":[{"voice":"I&type=2","#text":"I","#tran":"我；碘元素；字母I；不及物动词 (intransitive verb)；"},{"voice":"me&type=2","#text":"me","#tran":"我（宾格）；自我；极端自私的人；自我的一部分；（Me）人名；（日）马（姓）；（朝）袂；（阿拉伯、柬、老）梅；"},{"voice":"myself&type=2","#text":"myself","#tran":"我自己；我亲自；我的正常的健康状况和正常情绪；"}],"phone":"wǒ","return-phrase":"我"}}},"translateResult":[[{"tgt":"I","src":"我","srcPronounce":"wŏ"}]],"type":"zh-CHS2en"}

    return result


def main():
    print("===欢迎使用有道中译英简易程序：===")
    while True:
        query_word = input("请输入需要翻译的中文(输入q为退出)：")
        if query_word == 'q':
            print('===程序已成功退出，欢迎下次使用！===')
            sys.exit()
        elif query_word.strip() == '':
            print('请正确输入需要翻译的内容，内容不得为空！')
            continue
        else:
            try:
                # 获取翻译后的密文数据信息
                encrypt_result = get_encrypt_translate_result(query_word)
                # 将密文的数据信息进行解密处理
                result = get_decrypt_result(encrypt_result)
                if result != '':
                    # print(result)
                    result_obj = json.loads(result)
                    if result_obj.get("dictResult") is not None:
                        translate_text = result_obj.get("dictResult")['ce']['word']['trs'][0]['#text']
                        print(f"英文翻译结果为：{translate_text}")
                else:
                    print("未能成功获取翻译结果，请重试！")
            except Exception as ex:
                print("未能成功获取翻译结果，请重试！")
                # 控制台打印错误信息
                print(str(ex))
                # 将错误信息记录到日志文件中
                logger.error(str(ex))


if __name__ == '__main__':
    main()
