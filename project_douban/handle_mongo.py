import pymongo


class HandleMongo(object):

    def __init__(self):
        # myclient = pymongo.MongoClient("mongodb://192.168.2.11:27017")
        # myclient = pymongo.MongoClient("mongodb://192.168.31.11:27017")
        myclient = pymongo.MongoClient("mongodb://192.168.1.11:27017")
        # 当前指定的数据库名称imooc
        # 如果没有插入数据，库和表都不会创建
        mydb = myclient['db_douban']
        self.mycollection = mydb['douban_data']

    def insert_data(self, data):
        self.mycollection.insert_many(data)
