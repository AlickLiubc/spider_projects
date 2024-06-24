# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymongo

from scrapy.exceptions import DropItem
from scrapy.pipelines.images import ImagesPipeline

from dongqiudi import db_config


class DongqiudiPipeline:
    def __init__(self):
        myclient = pymongo.MongoClient("mongodb://%s:%s" % (db_config.MONGODB_ADDR, db_config.MONGODB_PORT))
        mydb = myclient['db_dongqiudi']
        self.mycollection = mydb['collection_dongqiudi']

    def process_item(self, item, spider):
        # print("获取的item为：", item)
        data = dict(item)
        self.mycollection.insert_one(data)

        return item


# 自定义的图片下载类需要继承于ImagesPipeline
class DongqiudiImagePipeline(ImagesPipeline):
    # def get_media_requests(self, item, info):
    #     # 根据image_urls中指定的URL进行爬取
    #     pass

    def item_completed(self, results, item, info):
        # 图片下载完毕之后，处理结果的，返回是一个元组
        # (success, image_info_or_failure)
        image_paths = [x['path'] for ok, x in results if ok]
        if not image_paths:
            raise DropItem('Item contains no images')

        return item

    def file_path(self, request, response=None, info=None, *, item=None):
        # 用于给下载的图片设置文件名称的
        url = request.url
        file_name = url.split('/')[-1]
        # aaa.jpg
        return file_name
