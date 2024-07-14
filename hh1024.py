import requests
import time
import execjs

"""
    红人点集网模拟登录
"""

def main(phone_num, pwd):
    current_timestamp = int(time.time() * 1000)

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://www.hh1024.com',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    with open('js/hh1024.js', encoding='utf-8') as f_read:
        js_code = f_read.read()

    js_script = execjs.compile(js_code)

    # 生成编码后的密码
    encrypt_pwd = js_script.call("getEncryptText", pwd)

    # 生成编码后的sig
    e = {
        'phoneNum': phone_num,
        'pwd': encrypt_pwd,
        't': current_timestamp,
        'tenant': 1
    }
    sort_e = js_script.call("S", e)
    sort_sign_text = js_script.call("H", sort_e)
    encrypt_sig = js_script.call("getEncryptText", sort_sign_text)

    json_data = {
        'phoneNum': phone_num,
        'pwd': encrypt_pwd,
        't': current_timestamp,
        'tenant': 1,
        'sig': encrypt_sig,
    }

    response = requests.post('https://user.hrdjyun.com/wechat/phonePwdLogin', headers=headers, json=json_data)
    print(response.text)


if __name__ == '__main__':
    phone_num = input("请输入登录的手机号：")
    pwd = input("请输入登录的密码：")
    main(phone_num, pwd)
