import scrapy
import json
import time

from bs4 import BeautifulSoup

# from dongqiudi.dongqiudi.items import DongqiudiItem
from dongqiudi.items import DongqiudiItem


class CrawlDongqiudiSpider(scrapy.Spider):
    name = 'crawl_dongqiudi'
    allowed_domains = ['www.dongqiudi.com', 'api.dongqiudi.com']
    start_urls = [
        # 头条
        'https://api.dongqiudi.com/app/tabs/web/1.json?action=fresh',
        # 中超
        'https://api.dongqiudi.com/app/tabs/web/56.json?action=fresh',
        # 英超
        'https://api.dongqiudi.com/app/tabs/web/3.json?action=fresh',
        # 意甲
        'https://api.dongqiudi.com/app/tabs/web/4.json?action=fresh',
        # 西甲
        'https://api.dongqiudi.com/app/tabs/web/5.json?action=fresh',
        # 德甲
        'https://api.dongqiudi.com/app/tabs/web/6.json?action=fresh',
    ]

    # def parse(self, response):
    #     self.handle_page_response(response)
    #
    # def handle_page_response(self, response):
    def parse(self, response):
        page_response_data = json.loads(response.text)
        # print(page_response_data)

        page_items = page_response_data['articles']
        # print(page_items)
        # 目前情况下，1页有12条新闻数据
        for item in page_items:
            info = {}
            from_url = 'https://www.dongqiudi.com/articles/' + str(item['id']) + '.html'
            # 新闻详情页的URL
            info['from_url'] = from_url
            # 新闻标题
            info['title'] = item['title']
            # 新闻发表时间
            info['release_time'] = item['published_at']
            yield scrapy.Request(url=info['from_url'], callback=self.handle_detail, meta=info)
            # break

        # 获取下一页的数据
        next_page_url = page_response_data['next']
        if next_page_url is not None and next_page_url.strip() != '':
            # print('下一页的page_url为：' + next_page_url)
            yield scrapy.Request(url=next_page_url, callback=self.parse)

    def handle_detail(self, response):
        dongqiudi_info = DongqiudiItem()

        # 新闻的发布时间
        dongqiudi_info['release_time'] = response.request.meta['release_time']

        # 获取新闻的作者
        author = ''
        author_info_list = response.xpath("//p[@class='tips']/span/text()").extract()
        for author_info in author_info_list:
            author += author_info
        dongqiudi_info['author'] = author

        # 获取新闻资讯文本内容
        html_content = response.xpath("//div[@class='con']").extract_first()
        # 需要去除HTML标签
        soup = BeautifulSoup(html_content, 'html.parser')
        content = soup.get_text()
        dongqiudi_info['content'] = content

        # 获取新闻图片URL
        image_urls = response.xpath("//div[@class='con']//img/@data-src").extract()
        dongqiudi_info['image_urls'] = image_urls

        # 新闻的抓取时间
        crawl_time = time.strftime('%Y-%m-%d %H:%M:%S')
        dongqiudi_info['crawl_time'] = crawl_time

        # 新闻标题
        dongqiudi_info['title'] = response.request.meta['title']

        # 新闻详情页的URL
        dongqiudi_info['from_url'] = response.request.meta['from_url']

        yield dongqiudi_info
