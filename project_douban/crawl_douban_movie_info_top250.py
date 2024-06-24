import re
from concurrent.futures.thread import ThreadPoolExecutor

import requests
from lxml import etree

from project_douban.handle_mongo import HandleMongo


class HandleDoubanMovieTop250(object):
    def __init__(self):
        super().__init__()
        self.page_url = self.handle_page_url()
        self.header = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            # "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Cookie": "bid=8jTUDAD4Coo; douban-fav-remind=1; __utmz=30149280.1706626853.3.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmc=30149280; __utmc=223695111; __utmz=223695111.1716172989.2.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __yadk_uid=6a3LGECffHOzjIA5bSBmEzKvAdxWmWU6; _pk_id.100001.4cf6=5d1f95f5e723c260.1716172996.; ap_v=0,6.0; _pk_ses.100001.4cf6=1; __utma=30149280.729429398.1668686949.1716172989.1716223939.5; __utmb=30149280.0.10.1716223939; __utma=223695111.1453967081.1668686949.1716172989.1716223939.3; __utmb=223695111.0.10.1716223939; __gads=ID=36c2b7019a2ec6fe:T=1716172998:RT=1716223939:S=ALNI_MYNb-oliWTxAWMUi9y8DuYLTH3qzw; __gpi=UID=00000e24aad5bf7d:T=1716172998:RT=1716223939:S=ALNI_Ma1TqK5x25io7nXxSF9rnJTjp9mFw; __eoi=ID=31eee40ee633a915:T=1716172998:RT=1716223939:S=AA-AfjZVAhOkHECPsO5JQ8hb2BUl",
            "Host": "movie.douban.com",
            "Referer": "https://movie.douban.com/top250?start=0&filter=",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            "sec-ch-ua": '"Google Chrome"; v = "119", "Chromium"; v = "119", "Not?A_Brand"; v = "24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows"
        }

    def handle_page_url(self):
        page_url_list =[]
        page_size = 25
        for page in range(1, 11):
            page_url_str = 'https://movie.douban.com/top250?start=' + str((page - 1) * page_size) + '&filter='
            page_url_list.append(page_url_str)

        return page_url_list

    def handle_request(self, page_url):
        print("当前获取到的页面URL为：%s" % page_url)
        response = requests.get(url=page_url, headers=self.header)
        response.encoding = 'utf-8'
        return response.text

    def handle_page_detail(self, page_url):
        try:
            page_html = self.handle_request(page_url)
        except:
            pass
        else:
            page_movie_list = self.parse(page_html)
            print(page_movie_list)
            # 存储数据到MongoDB
            douban_mongo = HandleMongo()
            douban_mongo.insert_data(data=page_movie_list)

    def parse(self, page_html):
        page_movie_list = []

        regex_li_html = re.compile(r'<li>([\s\S]*?)</li>')
        li_html_list = regex_li_html.findall(page_html)
        # print(li_html_list)

        for li_html_str in li_html_list:
            html = etree.HTML(li_html_str)
            movie_name1_list = html.xpath("//div[@class='info']//span[@class='title'][1]/text()")
            # print(movie_name1_list)

            movie_name2_list = html.xpath("//div[@class='info']//span[@class='title'][2]/text()")
            movie_name2_list = [i.replace('\xa0/\xa0', '/') for i in movie_name2_list]
            # print(movie_name2_list)

            movie_name3_list = html.xpath("//div[@class='info']//span[@class='other']/text()")
            movie_name3_list = [i.replace('\xa0/\xa0', '/') for i in movie_name3_list]
            movie_name3_list = [i.replace(' ', '') for i in movie_name3_list]
            # print(movie_name3_list)

            regex_actors_information_1 = re.compile(r'<p\sclass="">\n([\s\S]*?)<br>[\s\S]*?</p>')
            actors_information1_list = regex_actors_information_1.findall(li_html_str)
            actors_information1_list = [i.strip() for i in actors_information1_list]
            actors_information1_list = [i.replace('&nbsp;', '') for i in actors_information1_list]
            # print(actors_information1_list)

            regex_actors_information_2 = re.compile(r'<p\sclass="">[\s\S]*?<br>\n([\s\S]*?)</p>')
            actors_information2_list = regex_actors_information_2.findall(li_html_str)
            actors_information2_list = [i.strip() for i in actors_information2_list]
            actors_information2_list = [i.replace('&nbsp;', '') for i in actors_information2_list]
            # print(actors_information2_list)

            regex_score = re.compile(r'<span\sclass="rating_num"\sproperty="v:average">(.*)</span>')
            score_list = regex_score.findall(li_html_str)
            # print(score_list)

            evaluate_list = html.xpath("//div[@class='star']/span[4]/text()")
            # print(evaluate_list)

            describe_list = html.xpath("//p[@class='quote']/span[@class='inq']/text()")
            # print(describe_list)

            movie_name1 = movie_name1_list[0] if len(movie_name1_list) > 0 else ''
            movie_name2 = movie_name2_list[0] if len(movie_name2_list) > 0 else ''
            movie_name3 = movie_name3_list[0] if len(movie_name3_list) > 0 else ''

            page_movie_list.append({
                'movie_name': movie_name1 + movie_name2 + movie_name3,
                'actors_information': actors_information1_list[0] + actors_information2_list[0],
                'score': score_list[0],
                'evaluate': evaluate_list[0],
                'describe': describe_list[0] if len(describe_list) > 0 else '',
                'from_url': 'https://movie.douban.com/top250?start=0'
            })

        return page_movie_list

    def run(self):
        with ThreadPoolExecutor(max_workers=10) as executor:
            executor.map(self.handle_page_detail, self.handle_page_url())


def main():
    crawl_obj = HandleDoubanMovieTop250()
    crawl_obj.run()


if __name__ == '__main__':
    main()




