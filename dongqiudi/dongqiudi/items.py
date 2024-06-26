# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class DongqiudiItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # 抓取URL
    from_url = scrapy.Field()
    # 新闻标题
    title = scrapy.Field()
    # 发表时间
    release_time = scrapy.Field()
    # 作者
    author = scrapy.Field()
    # 新闻内容
    content = scrapy.Field()
    # 抓取时间
    crawl_time = scrapy.Field()
    # 图片信息
    image_urls = scrapy.Field()
