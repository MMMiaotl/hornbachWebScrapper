from selenium import webdriver 
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options


import chromedriver_autoinstaller
import time
import random

class HornbachScraper:
    def __init__(self, base_url):
        self.base_url = base_url
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # 无头模式，后台运行浏览器
        chrome_options.add_argument("--disable-gpu")  # 禁用GPU加速
        chrome_options.add_argument("--no-sandbox")  # 适用于Linux
        # 安装并获取路径
        driver_path = chromedriver_autoinstaller.install()
        print(f"ChromeDriver path: {driver_path}")
        self.driver = webdriver.Chrome(service=Service(driver_path), options=chrome_options)  # 替换为你的chromedriver路径

    def fetch_page(self, url):
        try:
            self.driver.get(url)
            # 等待页面加载完成，找到一个确定存在的元素
            WebDriverWait(self.driver, 15).until(
                EC.presence_of_element_located((By.CLASS_NAME, "al_1h0f93s0"))  # 修改为实际存在的类名
            )
            return self.driver.page_source
        except Exception as e:
            print(f"页面加载失败: {e}")
            return None
        
    def fetch_page2(self, url):
        try:
            self.driver.get(url)
            # 等待页面加载完成，找到一个确定存在的元素
            WebDriverWait(self.driver, 15).until(
                EC.presence_of_element_located((By.CLASS_NAME, "ad_iznhy30"))  # 修改为实际存在的类名
            )
            return self.driver.page_source
        except Exception as e:
            print(f"页面加载失败: {e}")
            return None

    def parse_product_links(self, html):
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        product_links = []

        #print("HTML 内容截取: ", html[:500])  # 打印前500个字符

        # 根据HTML结构提取商品链接
        product_elements = soup.find_all("a", class_="al_xdr36d0 al_xdr36d4 al_13y2r8y0 al_xczmlu1 al_xczmlu0 al_xczmlu9 al_xczmlu8 al_1h0f93s6 al_1h0f93s7 al_1l8tmkk1 al_1l8tmkk0")

        print(f"找到商品元素数: {len(product_elements)}")
        
        if len(product_elements) == 0:
            print("商品链接解析失败，检查 HTML 结构是否正确。")
    
        for element in product_elements:
            link = element.get("href")
            if link:
                full_link = self.base_url + link
                product_links.append(full_link)
                #time.sleep(2)  # 添加2000ms的延迟

        return product_links

    def parse_product_details(self, html):
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        #print(soup)
        # 假设以下是商品详细信息的结构
        try:
            # 提取商品名称
            name = soup.find("h1").get_text(strip=True)
        except:
            name = "未找到商品名称"
        
        try:
            # 提取商品价格
            price_div = soup.find("div", {"data-testid": "prices"})
            if price_div:
                price_span = price_div.find("span")
                if price_span:
                    price = price_span.get_text(strip=True)
                else:
                    price = "未找到价格"
            else:
                price = "未找到价格"
        except:
            price = "未找到价格"
        
        try:
            # 提取图片连接
            img = soup.find("img", class_="ad_1efm3bq0 ad_1efm3bq8 ad_1i6r88c1 ad_1i6r88c2 ad_jc9ah22")
            img_src = img.get("src") if img else "未知图片"
        except:
            img_src = "未知图片"
            
        try:
            # 提取商品编号
            article_span = soup.find("span", text=lambda x: x and "Art.nr." in x)
            if article_span:
                article_number = article_span.get_text(strip=True).replace("Art.nr.", "").strip()
            else:
                article_number = "未找到 Article Number"
        except AttributeError:
            article_number = "未找到 Article Number"

        time.sleep(random.uniform(1, 2)) 
        
        return {
            "name-nl": name,
            "price": price,
            "artnum": article_number,
            "image": img_src
        }
    
    def parse_variants(self,html):
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
        try:            
            # 查找所有规格的 <a> 标签
            variant_links = soup.select("a.ad_1efm3bq0")
            variants = []
            for variant in variant_links:
                # 提取规格链接和规格内容
                href = variant.get("href")
                #spec = variant.find("div", class_="ad_1aghefs2 ad_1sgxh9x9 ad_1sgxh9x8").get_text(strip=True)
                if href and "/p/" in href:
                    spec_div = variant.find("div", class_="ad_1aghefs2 ad_1sgxh9x9 ad_1sgxh9x8")
                    spec = spec_div.get_text(strip=True) if spec_div else "未知规格"
                    variants.append({"spec": spec, "link": self.base_url + href})
            return variants
        except Exception as e:
            print(f"解析规格失败: {e}")
            return []

    def parse_next_page_url(self, html):
        """
        解析下一页的 URL。
        如果没有下一页，返回 None。
        """
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")

        # 查找下一页按钮
        next_page_button = soup.find("a", {"aria-label": "volgende pagina"})

        if next_page_button and "href" in next_page_button.attrs:
            return self.base_url + next_page_button["href"]
        return None
   
    def close(self):
        self.driver.quit()
