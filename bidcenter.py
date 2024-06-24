import requests
import execjs

'''
招采网：https://www.bidcenter.com.cn/
'''

keywords = input('请输入需要搜索的关键字：')

headers = {
    'accept': 'text/plain, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://search.bidcenter.com.cn',
    'priority': 'u=1, i',
    'referer': 'https://search.bidcenter.com.cn/',
    'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
}

data = {
    'from': '6137',
    'guid': '7f41feb6-1d75-4642-b5e9-5b627667cea0',
    'location': '6138',
    'token': '',
    'next_token': '',
    'keywords': keywords,
    'mod': '0',
    'page': '1',
}

response = requests.post('https://interface.bidcenter.com.cn/search/GetSearchProHandler.ashx', headers=headers, data=data)
res_text = response.text

with open('js/bidcenter.js', encoding='utf-8') as f_read:
    js_code = f_read.read()

js_script = execjs.compile(js_code, cwd='js/node_modules')
return_data = js_script.call('AESDecrypt', res_text)
print(return_data['other2']['listData'])
# print(return_data['other2']['listData'])

