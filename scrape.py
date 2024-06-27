from playwright.sync_api import sync_playwright
import requests


'''
pip install playwright==1.39.0
playwright install
'''

MAX_PAGE = 5

BASE_URL = 'https://spa2.scrape.center/'

LIMIT = 10

context = sync_playwright().start()
browser = context.chromium.launch()
page = browser.new_page()
page.route(
    "https://spa2.scrape.center/js/chunk-10192a00.243cb8b7.js",
    lambda route : route.fulfill(path='js/scrape.js')
)

page.goto(BASE_URL)


def get_token(offset):
    result = page.evaluate(f"()=>{{return window.encrypt('/api/movie', '{offset}')}}")
    return result


header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
}

for i in range(MAX_PAGE):
    offset = i * LIMIT
    token = get_token(offset)

    index_url = f"https://spa2.scrape.center/api/movie/?limit=10&offset={offset}&token={token}"
    res = requests.get(index_url, headers=header)
    print(res.text)
