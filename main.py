import csv
from scraper import HornbachScraper
import logging
logging.basicConfig(filename="scraper.log", level=logging.ERROR, format="%(asctime)s - %(levelname)s - %(message)s")
import os

def save_to_csv(data, filename="products.csv"):
    with open(filename, mode="w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=["name-nl", "price", "artnum", "image", "link"])
        writer.writeheader()
        writer.writerows(data)
        
def read_categories(filename="categories.txt"):
    """从文件读取分类页面名称和 URL"""
    try:
        with open(filename, mode="r", encoding="utf-8") as file:
            categories = []
            for line in file:
                line = line.strip()
                # 跳过以 // 开头的行
                if line.startswith("//"):
                    continue
                if line and ":" in line:
                    name, url = line.split(":", 1)  # 只分割第一个冒号
                    categories.append({"name": name.strip(), "url": url.strip()})
        return categories
    except Exception as e:
        logging.error(f"读取分类文件失败: {e}")
        return []

def csv_to_js_object(csv_filename, output_filename):
    try:
        js_objects = []
        
        # 读取 CSV 文件
        with open(csv_filename, mode="r", encoding="utf-8") as csv_file:
            reader = csv.DictReader(csv_file)

            for row in reader:
                # 确保价格字段为浮点数
                price = float(row["price"].replace("€", "").replace("*", "").strip().replace(",", "."))

                # 确保所有字段是正确类型
                name_nl = str(row["name-nl"])
                image = str(row["image"])
                artnum = str(row["artnum"])

                # 构建目标对象，每个对象在同一行内，但有缩进
                item = {
                    "name": name_nl,
                    "name_nl": name_nl,
                    "image": image,
                    "quantity": 0,
                    "price": price,
                    "artnum": artnum
                }
                js_objects.append(item)

        # 根据 name 字段对 js_objects 进行排序
        js_objects_sorted = sorted(js_objects, key=lambda x: x["name"])

        # 将排序后的结果转换为 JavaScript 对象格式
        js_objects_formatted = []
        for item in js_objects_sorted:
            formatted_item = (
                f"  {{ "
                f"name: '{item['name']}', "
                f"name_nl: '{item['name_nl']}', "
                f"image: '{item['image']}', "
                f"quantity: {item['quantity']}, "
                f"price: {item['price']}, "
                f"artnum: '{item['artnum']}' "
                f"}}"
            )
            js_objects_formatted.append(formatted_item)

        # 提取 output_filename 中不带 .js 的部分
        export_name = output_filename.replace(".js", "").split("/")[-1]  # 去掉路径和 .js 后缀

        # 将结果写入文件
        with open(output_filename, mode="w", encoding="utf-8") as js_file:
            js_file.write(f"const {export_name} = [\n")  # 使用提取的名称
            js_file.write(",\n".join(js_objects_formatted) + "\n")  # 写入对象
            js_file.write("];\n\n")  # 结束数组
            js_file.write(f"module.exports = {export_name};  // 导出数据\n")  # 使用提取的名称

        print(f"成功将数据转换为 JavaScript 对象格式并保存到 {output_filename}")
    except Exception as e:
        print(f"转换过程中出现错误: {e}")
        
def main():
    base_url = "https://www.hornbach.nl"  # 网站的主域名
    category_url = ""  

    scraper = HornbachScraper(base_url)

    # 从文件读取分类页面名称和 URL
    categories = read_categories()
    if not categories:
        print("未找到有效的分类页面 URL，请检查 categories.txt 文件。")
        return

    # 创建 /data 目录（如果不存在）
    if not os.path.exists("data"):
        os.makedirs("data")

    try:
        # 循环处理每个分类页面
        for category in categories:
            category_name = category["name"]
            category_url = category["url"]

            if not category_url.startswith("https://www.hornbach.nl"):
                print(f"URL无效，跳过: {category_url}")
                continue

            all_product_details = []  # 用于存储当前分类的所有商品数据

            # 处理当前分类的所有页面
            current_page_url = category_url
            while current_page_url:
                print(f"正在抓取分类页面: {current_page_url}")
                html = scraper.fetch_page(current_page_url)
                if not html:
                    logging.error(f"分类页面抓取失败: {current_page_url}")
                    print(f"分类页面抓取失败: {current_page_url}")
                    break

                print("解析商品链接...")
                product_links = scraper.parse_product_links(html)
                print(f"共找到 {len(product_links)} 个商品链接。")

                for link in product_links:
                    try:
                        print(f"正在抓取商品详情: {link}")
                        product_html = scraper.fetch_page2(link)
                        if not product_html:
                            print(f"无法获取商品页面: {link}")
                            continue

                        variants = scraper.parse_variants(product_html)

                        if variants:
                            print(f"发现 {len(variants)} 个规格，分别抓取规格详情...")
                            for variant in variants:
                                variant_html = scraper.fetch_page2(variant["link"])
                                if not variant_html:
                                    print(f"无法获取规格页面: {variant['link']}")
                                    continue
                                details = scraper.parse_product_details(variant_html)
                                details["link"] = variant["link"]
                                all_product_details.append(details)
                        else:
                            details = scraper.parse_product_details(product_html)
                            details["link"] = link
                            all_product_details.append(details)

                    except Exception as e:
                        logging.error(f"抓取商品详情失败: {link}, 错误: {e}")

                # 检查是否有下一页
                current_page_url = scraper.parse_next_page_url(html)

            # 将当前分类的数据保存到单独的 CSV 文件
            if all_product_details:
                output_filename_csv = f"data/{category_name}.csv"  # 使用分类名称作为文件名
                output_filename_js = f"data/{category_name}.js"  # 使用分类名称作为文件名
                save_to_csv(all_product_details, output_filename_csv)
                print(f"数据已保存到 {output_filename_csv}")
                csv_to_js_object(output_filename_csv, output_filename_js)
            else:
                print(f"未抓取到 {category_name} 的商品数据。")

    except Exception as e:
        logging.error(f"主函数出现错误: {e}")

    finally:
        scraper.close()

if __name__ == "__main__":
    main()
