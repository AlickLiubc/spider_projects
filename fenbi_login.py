import requests
import execjs

"""
    粉笔网登录
"""
def main():
    phone = input('请输入手机号：')
    pwd = input('请输入密码：')

    with open('js/fenbi.js', encoding='utf-8') as f_read:
        js_code = f_read.read()

    js_script = execjs.compile(js_code)
    encrypt_pwd = js_script.call('window.getEncryptPwd', pwd)
    # print(encrypt_pwd)

    cookies = {
        'sajssdk_2015_cross_new_user': '1',
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22190cb7e0ed59ec-0fa5c78751bcdc-26001c51-1327104-190cb7e0ed69c4%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22190cb7e0ed59ec-0fa5c78751bcdc-26001c51-1327104-190cb7e0ed69c4%22%7D',
        'Hm_lvt_e7351028cde0d0ccb9ccdbe5fe531683': '1721400955',
        'Hm_lpvt_e7351028cde0d0ccb9ccdbe5fe531683': '1721400955',
        'HMACCOUNT': 'F99B72A46C381C7F',
        'acw_tc': '0bd17c6a17214009557077749e7e70cfcc2b1f37e18d60aecabe3fa4fd712a',
    }

    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        # 'cookie': 'sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22190cb7e0ed59ec-0fa5c78751bcdc-26001c51-1327104-190cb7e0ed69c4%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22190cb7e0ed59ec-0fa5c78751bcdc-26001c51-1327104-190cb7e0ed69c4%22%7D; Hm_lvt_e7351028cde0d0ccb9ccdbe5fe531683=1721400955; Hm_lpvt_e7351028cde0d0ccb9ccdbe5fe531683=1721400955; HMACCOUNT=F99B72A46C381C7F; acw_tc=0bd17c6a17214009557077749e7e70cfcc2b1f37e18d60aecabe3fa4fd712a',
        'origin': 'https://fenbi.com',
        'priority': 'u=1, i',
        'referer': 'https://fenbi.com/',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    }

    params = {
        'kav': '100',
        'app': 'web',
        'av': '100',
        'hav': '100',
        'client_context_id': '039e67c4a6028f5bfc96903b5b565627',
        'abxContextId': '469638677574885376',
    }

    data = {
        'password': encrypt_pwd,
        'persistent': 'true',
        'app': 'web',
        'phone': phone,
    }

    response = requests.post('https://login.fenbi.com/api/users/loginV2', params=params, cookies=cookies,
                             headers=headers, data=data)
    print(response.text)


if __name__ == '__main__':
    main()
