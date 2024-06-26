import requests
import execjs
import time

'''
    https://fanyi.baidu.com/
'''

query_word = input('请输入需要翻译的中文：')

with open('js/baidu_translate.js', encoding='utf-8') as f_read:
    js_content = f_read.read()

js_script = execjs.compile(js_content)
sign = js_script.call('b', query_word)

cookies = {
    'BIDUPSID': '187F403A5DB0F4C9326FA636A1B6AE1F',
    'PSTM': '1656691889',
    'MCITY': '-289%3A',
    'BAIDUID': 'EEB7784712FCFF4B5F184D7A5537C824:FG=1',
    'H_WISE_SIDS_BFESS': '60327_60321_60340_60297',
    'H_PS_PSSID': '60327_60321_60340_60297_60346_60359',
    'BDSFRCVID': '2FkOJexroG3KpYctJAaXbneUPgKK0gOTDYLEOwXPsp3LGJLVY5eZEG0PtozPcLAbvmD-ogKKL2OTHmuF_2uxOjjg8UtVJeC6EG0Ptf8g0M5',
    'H_BDCLCKID_SF': 'tJIOVCDhtKD3fn76q4vEbJ8thmT22-us3H6i2hcHMPoosIOoKhrj5MIFDhJa2tQPLIviaKJjBMbUoqRHQxQZW-_ADbJNhUcpyRT-hq5TtUJMDPcM-UvN-RKDQ2cyKMniBnr9-pnEblQrh459XP68bTkA5bjZKxtq3mkjbPbDfn028DKuD6_WejoLDNLs5JtXKD600PK8Kb7Vbnva5MnkbJkXhPteBbOkK5nZ5CJ5KJrqSfJTyU42bU47Qbrr0xRfyNReQIO13hcdSxIGbq6pQT8r5MnEQPJr0CrqWl-Eab3vOp44XpO1hJLzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksD-FtqjDtfnKDoC8hfbo5KRopMtOhq4tehH4eX639WDTOQJ7Tthv2oJOmyxLKb-DHbJoTKMnitIv9-pbwBp5cfUnMKn05XM-pXbjkt4Qz3mkjbPbOMfJj8hjP54cUqt4syPRrJfRnWIjtKfA-b4ncjRcTehoM3xI8LNj405OTbIFO0KJzJCFaMIIxj5t2ePDyqx5Ka43tHD7yWCvJbhvcOR59K4nnDP_JjGJJBfoKJCrX0x5x5hvvhMJF3MOZXMLg5n7Tbb8eBgvZ2UQwW-5-sq0x0bOU06vDyM4L2bvdbDOMahv1tq7xOb6GQlPK5JkgMx6MqpQJQeQ-5KQN3KJmfbL9bT3YjjTXjHA8J6_etR3aQ5rtKRTffjrnhPF3DxKfXP6-hnjy3b7iQUTJbpcNHfnPh4ol0--UyN3MWh3RymJ42-39LPO2hpRjyxv4WjL8W4oxJpOJa5QT3hRpKtQVs56vbURvX5Dg3-7L-x5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIE3-oJqC-KhC-m3f',
    'BDUSS': 'XpJcTJvY08tS0Z3cHlzdXVKT3VONllNMlZZd2JHWEMzelR2V0I1YXhvbnNVWjVtRVFBQUFBJCQAAAAAAAAAAAEAAACbJAtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOzEdmbsxHZmY',
    'BDUSS_BFESS': 'XpJcTJvY08tS0Z3cHlzdXVKT3VONllNMlZZd2JHWEMzelR2V0I1YXhvbnNVWjVtRVFBQUFBJCQAAAAAAAAAAAEAAACbJAtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOzEdmbsxHZmY',
    'smallFlowVersion': 'old',
    'Hm_lvt_64ecd82404c51e03dc91cb9e8c025574': '1719059991',
    'APPGUIDE_10_7_1': '1',
    'REALTIME_TRANS_SWITCH': '1',
    'FANYI_WORD_SWITCH': '1',
    'HISTORY_SWITCH': '1',
    'SOUND_SPD_SWITCH': '1',
    'SOUND_PREFER_SWITCH': '1',
    'delPer': '0',
    'PSINO': '3',
    'BA_HECTOR': 'a104002h04akahag24012g0gbf6bgb1j7dmn81u',
    'BAIDUID_BFESS': 'EEB7784712FCFF4B5F184D7A5537C824:FG=1',
    'BDSFRCVID_BFESS': '2FkOJexroG3KpYctJAaXbneUPgKK0gOTDYLEOwXPsp3LGJLVY5eZEG0PtozPcLAbvmD-ogKKL2OTHmuF_2uxOjjg8UtVJeC6EG0Ptf8g0M5',
    'H_BDCLCKID_SF_BFESS': 'tJIOVCDhtKD3fn76q4vEbJ8thmT22-us3H6i2hcHMPoosIOoKhrj5MIFDhJa2tQPLIviaKJjBMbUoqRHQxQZW-_ADbJNhUcpyRT-hq5TtUJMDPcM-UvN-RKDQ2cyKMniBnr9-pnEblQrh459XP68bTkA5bjZKxtq3mkjbPbDfn028DKuD6_WejoLDNLs5JtXKD600PK8Kb7Vbnva5MnkbJkXhPteBbOkK5nZ5CJ5KJrqSfJTyU42bU47Qbrr0xRfyNReQIO13hcdSxIGbq6pQT8r5MnEQPJr0CrqWl-Eab3vOp44XpO1hJLzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksD-FtqjDtfnKDoC8hfbo5KRopMtOhq4tehH4eX639WDTOQJ7Tthv2oJOmyxLKb-DHbJoTKMnitIv9-pbwBp5cfUnMKn05XM-pXbjkt4Qz3mkjbPbOMfJj8hjP54cUqt4syPRrJfRnWIjtKfA-b4ncjRcTehoM3xI8LNj405OTbIFO0KJzJCFaMIIxj5t2ePDyqx5Ka43tHD7yWCvJbhvcOR59K4nnDP_JjGJJBfoKJCrX0x5x5hvvhMJF3MOZXMLg5n7Tbb8eBgvZ2UQwW-5-sq0x0bOU06vDyM4L2bvdbDOMahv1tq7xOb6GQlPK5JkgMx6MqpQJQeQ-5KQN3KJmfbL9bT3YjjTXjHA8J6_etR3aQ5rtKRTffjrnhPF3DxKfXP6-hnjy3b7iQUTJbpcNHfnPh4ol0--UyN3MWh3RymJ42-39LPO2hpRjyxv4WjL8W4oxJpOJa5QT3hRpKtQVs56vbURvX5Dg3-7L-x5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIE3-oJqC-KhC-m3f',
    'ZFY': 'OhAUqCUj3N425JB1368wv5TkPtbGZtGTFePPvMwTyFg:C',
    'RT': '"z=1&dm=baidu.com&si=fadd7aa4-5dac-4d2a-847b-e9d3aacfe22b&ss=lxq79vce&sl=0&tt=0&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ul=2uj&hd=2v7"',
    'Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574': '1719065606',
    'ab_sr': '1.0.1_NGU0M2U1MGFmY2Q2ODkzMmNmYTVlNzk4ZjE2YWNiMDBjZjc4MDhiOTcxODBlYTU2ZDQwNTljYjBjNjE1NjNkYmVkYTJmOGJhNTM5YzFmZjRkYTkzZDZiYmJkY2M3Mzk1YTA0YjQ3MDU5NmUxNmM2NGExMTViYzE1M2I1NGU2MmRiOTVlNDYzMjhhMmZjODVmZDMyNTE2OGNkYzNmYzgyZTY1Y2NhYWE0YjBiOWExYWIwMWYzOWQ1NWY0NWMzYTJi',
    'BDRCVFR[feWj1Vr5u3D]': 'I67x6TjHwwYf0',
    'H_WISE_SIDS': '60327_60321_60340_60297_60346_60359',
    'BDORZ': 'FFFB88E999055A3F8A630C64834BD6D0',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Acs-Token': '1719057646833_1719070717910_HcyDG8Hie4n7IthH42escneS5lbCw3K3c/Bh/G1hIFyZtPtJe+GVunQqdy0LaI/tlEZcuWsC+Mya4O71V9/4c39vot6yw7F0SRcDvrZmcPLx+AgIOEWxkOO5u448zC1puG9BQRJo9Ho6Sn3yepXGGrse9l4IdiQawF7zbXi//HLUQEN9ddAuIUBdhIXu9plG1ZdLPIcJN4fSYJXroOJku3+N8APNde5blrGNKLoxB7pvTzy4zN6fB/5ifF9XYQugb/Jf7NwF2csHQxWcV4mjfOYMNhI2m6HLaMgvrZ5r+sM8cxWau+3PVkgbE7izdEKQ66s/ZDnxdcCPrUDWwMPzjj1YyRilvK70486I1Vzh2C8zdplmEr4GmWNylaga8BPiWRi9Q54tWhulXidIzoga2trT/2OQrDHjk7Mf9vyAq/H0B8pAkmGvDe5ZDERp/jfPTjx5ncTwJbWputzFoe9SPlNGCBRzh2Jm325p4AoLuxw=',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # 'Cookie': 'BIDUPSID=187F403A5DB0F4C9326FA636A1B6AE1F; PSTM=1656691889; MCITY=-289%3A; BAIDUID=EEB7784712FCFF4B5F184D7A5537C824:FG=1; H_WISE_SIDS_BFESS=60327_60321_60340_60297; H_PS_PSSID=60327_60321_60340_60297_60346_60359; BDSFRCVID=2FkOJexroG3KpYctJAaXbneUPgKK0gOTDYLEOwXPsp3LGJLVY5eZEG0PtozPcLAbvmD-ogKKL2OTHmuF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tJIOVCDhtKD3fn76q4vEbJ8thmT22-us3H6i2hcHMPoosIOoKhrj5MIFDhJa2tQPLIviaKJjBMbUoqRHQxQZW-_ADbJNhUcpyRT-hq5TtUJMDPcM-UvN-RKDQ2cyKMniBnr9-pnEblQrh459XP68bTkA5bjZKxtq3mkjbPbDfn028DKuD6_WejoLDNLs5JtXKD600PK8Kb7Vbnva5MnkbJkXhPteBbOkK5nZ5CJ5KJrqSfJTyU42bU47Qbrr0xRfyNReQIO13hcdSxIGbq6pQT8r5MnEQPJr0CrqWl-Eab3vOp44XpO1hJLzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksD-FtqjDtfnKDoC8hfbo5KRopMtOhq4tehH4eX639WDTOQJ7Tthv2oJOmyxLKb-DHbJoTKMnitIv9-pbwBp5cfUnMKn05XM-pXbjkt4Qz3mkjbPbOMfJj8hjP54cUqt4syPRrJfRnWIjtKfA-b4ncjRcTehoM3xI8LNj405OTbIFO0KJzJCFaMIIxj5t2ePDyqx5Ka43tHD7yWCvJbhvcOR59K4nnDP_JjGJJBfoKJCrX0x5x5hvvhMJF3MOZXMLg5n7Tbb8eBgvZ2UQwW-5-sq0x0bOU06vDyM4L2bvdbDOMahv1tq7xOb6GQlPK5JkgMx6MqpQJQeQ-5KQN3KJmfbL9bT3YjjTXjHA8J6_etR3aQ5rtKRTffjrnhPF3DxKfXP6-hnjy3b7iQUTJbpcNHfnPh4ol0--UyN3MWh3RymJ42-39LPO2hpRjyxv4WjL8W4oxJpOJa5QT3hRpKtQVs56vbURvX5Dg3-7L-x5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIE3-oJqC-KhC-m3f; BDUSS=XpJcTJvY08tS0Z3cHlzdXVKT3VONllNMlZZd2JHWEMzelR2V0I1YXhvbnNVWjVtRVFBQUFBJCQAAAAAAAAAAAEAAACbJAtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOzEdmbsxHZmY; BDUSS_BFESS=XpJcTJvY08tS0Z3cHlzdXVKT3VONllNMlZZd2JHWEMzelR2V0I1YXhvbnNVWjVtRVFBQUFBJCQAAAAAAAAAAAEAAACbJAtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOzEdmbsxHZmY; smallFlowVersion=old; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1719059991; APPGUIDE_10_7_1=1; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; delPer=0; PSINO=3; BA_HECTOR=a104002h04akahag24012g0gbf6bgb1j7dmn81u; BAIDUID_BFESS=EEB7784712FCFF4B5F184D7A5537C824:FG=1; BDSFRCVID_BFESS=2FkOJexroG3KpYctJAaXbneUPgKK0gOTDYLEOwXPsp3LGJLVY5eZEG0PtozPcLAbvmD-ogKKL2OTHmuF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tJIOVCDhtKD3fn76q4vEbJ8thmT22-us3H6i2hcHMPoosIOoKhrj5MIFDhJa2tQPLIviaKJjBMbUoqRHQxQZW-_ADbJNhUcpyRT-hq5TtUJMDPcM-UvN-RKDQ2cyKMniBnr9-pnEblQrh459XP68bTkA5bjZKxtq3mkjbPbDfn028DKuD6_WejoLDNLs5JtXKD600PK8Kb7Vbnva5MnkbJkXhPteBbOkK5nZ5CJ5KJrqSfJTyU42bU47Qbrr0xRfyNReQIO13hcdSxIGbq6pQT8r5MnEQPJr0CrqWl-Eab3vOp44XpO1hJLzBN5thURB2DkO-4bCWJ5TMl5jDh3Mb6ksD-FtqjDtfnKDoC8hfbo5KRopMtOhq4tehH4eX639WDTOQJ7Tthv2oJOmyxLKb-DHbJoTKMnitIv9-pbwBp5cfUnMKn05XM-pXbjkt4Qz3mkjbPbOMfJj8hjP54cUqt4syPRrJfRnWIjtKfA-b4ncjRcTehoM3xI8LNj405OTbIFO0KJzJCFaMIIxj5t2ePDyqx5Ka43tHD7yWCvJbhvcOR59K4nnDP_JjGJJBfoKJCrX0x5x5hvvhMJF3MOZXMLg5n7Tbb8eBgvZ2UQwW-5-sq0x0bOU06vDyM4L2bvdbDOMahv1tq7xOb6GQlPK5JkgMx6MqpQJQeQ-5KQN3KJmfbL9bT3YjjTXjHA8J6_etR3aQ5rtKRTffjrnhPF3DxKfXP6-hnjy3b7iQUTJbpcNHfnPh4ol0--UyN3MWh3RymJ42-39LPO2hpRjyxv4WjL8W4oxJpOJa5QT3hRpKtQVs56vbURvX5Dg3-7L-x5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIE3-oJqC-KhC-m3f; ZFY=OhAUqCUj3N425JB1368wv5TkPtbGZtGTFePPvMwTyFg:C; RT="z=1&dm=baidu.com&si=fadd7aa4-5dac-4d2a-847b-e9d3aacfe22b&ss=lxq79vce&sl=0&tt=0&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ul=2uj&hd=2v7"; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1719065606; ab_sr=1.0.1_NGU0M2U1MGFmY2Q2ODkzMmNmYTVlNzk4ZjE2YWNiMDBjZjc4MDhiOTcxODBlYTU2ZDQwNTljYjBjNjE1NjNkYmVkYTJmOGJhNTM5YzFmZjRkYTkzZDZiYmJkY2M3Mzk1YTA0YjQ3MDU5NmUxNmM2NGExMTViYzE1M2I1NGU2MmRiOTVlNDYzMjhhMmZjODVmZDMyNTE2OGNkYzNmYzgyZTY1Y2NhYWE0YjBiOWExYWIwMWYzOWQ1NWY0NWMzYTJi; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; H_WISE_SIDS=60327_60321_60340_60297_60346_60359; BDORZ=FFFB88E999055A3F8A630C64834BD6D0',
    'Origin': 'https://fanyi.baidu.com',
    'Referer': 'https://fanyi.baidu.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'from': 'zh',
    'to': 'en',
}

data = {
    'from': 'zh',
    'to': 'en',
    'query': query_word,
    'simple_means_flag': '3',
    'sign': sign,
    'token': 'ec94121cb158c71003cb9f562c1824bc',
    'domain': 'common',
    'ts': time.time()*1000,
}

response = requests.post('https://fanyi.baidu.com/v2transapi', params=params, cookies=cookies, headers=headers, data=data)
print(response.json())
