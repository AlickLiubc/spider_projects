from concurrent.futures.thread import ThreadPoolExecutor

import requests
from bs4 import BeautifulSoup
from datetime import datetime

"""
    多线程爬取网易新歌榜100首单曲
"""

header = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
}


def main():
    url = 'https://music.163.com/discover/toplist?id=3779629'
    res = requests.get(url, headers=header)
    res.encoding = 'utf-8'
    page_html = res.text
    # print(page_html)

    '''
    <ul class="f-hide"><li><a href="/song?id=2164852326">
    '''
    soup = BeautifulSoup(page_html, 'lxml')
    song_link_urls = soup.select('ul.f-hide a')
    # print(len(song_link_urls))
    # print(song_link_urls[0])

    # 单线程：
    # for song_link_url in song_link_urls:
    #     download_songs(song_link_url)

    # 多线程：
    with ThreadPoolExecutor(max_workers=1000000) as executor:
        for song_link_url in song_link_urls:
            executor.submit(download_songs, song_link_url)
    # with ThreadPoolExecutor(max_workers=1000000) as executor:
    #     executor.map(download_songs, song_link_urls)


def download_songs(song_link_url):
    song_name = song_link_url.get_text()
    # print(song_name)
    song_href = song_link_url['href']
    song_id = song_href.split('=')[1]
    # 获取歌曲ID
    # print(song_id)

    song_download_url = f"https://music.163.com/song/media/outer/url?id={song_id}"
    download_song_info = requests.get(song_download_url, headers=header)
    song_content = download_song_info.content

    song_name = song_name.replace('/', '')
    with open(f'./songs/{song_name}.mp3', 'wb') as fw:
        fw.write(song_content)


if __name__ == '__main__':
    start_time = datetime.now()
    main()
    end_time = datetime.now()

    total_time = end_time - start_time
    # 单线程：100首歌曲，总耗时：155秒左右
    # 多线程：100首歌曲，总耗时：100秒左右
    print(f'程序执行完成，总耗时为：{total_time.seconds}秒')
