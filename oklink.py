import requests
import time
import execjs
import json
import math
from pandas import DataFrame


def get_http_response(offset):
    current_timestamp = int(time.time()*1000)

    with open('js/oklink.js', encoding='utf-8') as f_read:
        js_code = f_read.read()

    js_script = execjs.compile(js_code)

    # 生成apiKey值
    x_apikey = js_script.call('getApiKey', current_timestamp)

    cookies = {
        'aliyungf_tc': '86ff2941c949c61dfbdaca567bc96b22bcff1555fce7af45fbb343ea194eb5ab',
        'devId': 'f6e1c537-a6a8-4b5a-97bf-1be4188d934c',
        'ok_site_info': '9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye',
        'locale': 'zh_CN',
        'traceId': '1030112236041670001',
        'ok-exp-time': '1721223604177',
        'browserVersionLevel': 'v5.6ad2a8e37c01',
        'oklink.unaccept_cookie': '1',
        '_monitor_extras': '{"deviceId":"xZEoKYCHEaojanxe4xvZoT","eventId":7,"sequenceNumber":7}',
        'amp_d77757': 'f6e1c537-a6a8-4b5a-97bf-1be4188d934c...1i30enr2v.1i30entte.6.0.6',
        'ok-ses-id': '1fbVYDhAufDQbheWo10MG0Wxu5xjDnNkWggFnXQQytUG95zn7AL/mkRYYqCo5EDjtmcp+jrZSJj2V32tS8Q9wTnRyv1Jw8LWFCbJewPFDbwlS9DJ2fSpGtp/PNKC6QB1',
        'okg.currentMedia': 'md',
    }

    headers = {
        'accept': 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'app-type': 'web',
        # 'cookie': 'aliyungf_tc=86ff2941c949c61dfbdaca567bc96b22bcff1555fce7af45fbb343ea194eb5ab; devId=f6e1c537-a6a8-4b5a-97bf-1be4188d934c; ok_site_info=9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye; locale=zh_CN; traceId=1030112236041670001; ok-exp-time=1721223604177; browserVersionLevel=v5.6ad2a8e37c01; oklink.unaccept_cookie=1; _monitor_extras={"deviceId":"xZEoKYCHEaojanxe4xvZoT","eventId":7,"sequenceNumber":7}; amp_d77757=f6e1c537-a6a8-4b5a-97bf-1be4188d934c...1i30enr2v.1i30entte.6.0.6; ok-ses-id=1fbVYDhAufDQbheWo10MG0Wxu5xjDnNkWggFnXQQytUG95zn7AL/mkRYYqCo5EDjtmcp+jrZSJj2V32tS8Q9wTnRyv1Jw8LWFCbJewPFDbwlS9DJ2fSpGtp/PNKC6QB1; okg.currentMedia=md',
        'devid': 'f6e1c537-a6a8-4b5a-97bf-1be4188d934c',
        'ok-verify-sign': 'MZT+tZNHLu15iZzrxSwNxTZaEAix61COsVEIAE2GDuk=',
        'ok-verify-token': 'd9380463-f476-4940-9adb-dc1036d7c097',
        'priority': 'u=1, i',
        'referer': 'https://www.oklink.com/zh-hans/usdt/block-list',
        'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        # 'x-apikey': 'LWIzMWUtNDU0Ny05Mjk5LWI2ZDA3Yjc2MzFhYmEyYzkwM2NjfDI4MzIzMzQ5MDkzMTA1MjI=',
        'x-apikey': x_apikey,
        'x-cdn': 'https://static.oklink.com',
        'x-id-group': '1030112236041670001-c-3',
        'x-locale': 'zh_CN',
        'x-site-info': '9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye',
        'x-utc': '8',
        'x-zkdex-env': '0',
    }

    params = {
        'offset': offset,
        'limit': '20',
        'type': '0',
        't': str(current_timestamp),
    }

    response = requests.get('https://www.oklink.com/api/explorer/v1/usdts/blocks',
                            params=params, cookies=cookies, headers=headers)

    # print(response.text)
    return json.loads(response.text)


def trans_format_timestamp(timestamp):
    return time.strftime('%Y/%m/%d %H:%M:%S', time.localtime(timestamp))


def main():
    # 区块
    height_list = []

    # 所属链
    chain_list = []

    # 时间，需要转换为这样的格式：2024/07/18 00:29:23
    block_time_list = []

    # 交易数量
    transaction_count_list = []

    # 转账总数 USDT，需要向上取整
    total_value_list = []

    # 总手续费，小数点后取8位 + ' ' + chain
    fee_list = []

    # data_obj = get_http_response(0)
    # print(data_obj)
    # if data_obj['code'] == 0:
    #     item_list = data_obj['data']['hits']
    #     for item in item_list:
    #         height_list.append(item['height'])
    #         chain_list.append(item['chain'])
    #         block_time_list.append(trans_format_timestamp(item['blocktime']))
    #         transaction_count_list.append(item['transactionCount'])
    #         total_value_list.append(math.ceil(item['totalValue']))
    #         fee_list.append('{:.8f}'.format(item['fee']) + ' ' + item['chain'])

    for offset in range(0, 520, 20):
        data_obj = get_http_response(offset)
        # print(data_obj)
        if data_obj['code'] == 0:
            item_list = data_obj['data']['hits']
            for item in item_list:
                height_list.append(item['height'])
                chain_list.append(item['chain'])
                block_time_list.append(trans_format_timestamp(item['blocktime']))
                transaction_count_list.append(item['transactionCount'])
                total_value_list.append(math.ceil(item['totalValue']))
                fee_list.append('{:.8f}'.format(item['fee']) + ' ' + item['chain'])

        # 稍微休息一下
        time.sleep(2)
        print(f'目前共获取了{offset+20}条数据')

    # print(height_list)
    # print(chain_list)
    # print(block_time_list)
    # print(transaction_count_list)
    # print(total_value_list)
    # print(fee_list)

    data_link = DataFrame({
        '区块': height_list,
        '所属链': chain_list,
        '时间': block_time_list,
        '交易数量': transaction_count_list,
        '转账总数 USDT': total_value_list,
        '总手续费': fee_list,
    })

    current_hour = time.strftime('%Y_%m_%d_%H')
    data_link.to_excel(f'output/block_list_{current_hour}.xlsx')
    print('程序执行完成')


if __name__ == '__main__':
    main()
