import csv

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
                f"          {{ "
                f"name: '{item['name']}', "
                f"name_nl: '{item['name_nl']}', "
                f"image: '{item['image']}', "
                f"quantity: {item['quantity']}, "
                f"price: {item['price']}, "
                f"artnum: '{item['artnum']}' "
                f"}}"
            )
            js_objects_formatted.append(formatted_item)

        # 将结果写入文件
        with open(output_filename, mode="w", encoding="utf-8") as js_file:
            js_file.write("[\n" + ",\n".join(js_objects_formatted) + "\n]")

        print(f"成功将数据转换为 JavaScript 对象格式并保存到 {output_filename}")
    except Exception as e:
        print(f"转换过程中出现错误: {e}")

# 调用函数
csv_to_js_object("products.csv", "output.js")