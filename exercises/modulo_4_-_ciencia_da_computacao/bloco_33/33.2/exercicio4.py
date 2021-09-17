import json
import csv

books_data = []
with open("books.json", "r") as raw_data:
    for line in raw_data:
        books_data.append(json.loads(line))

set_of_categories = set()

for book in books_data:
    for category in book["categories"]:
        if category != "":
            set_of_categories.add(category)

set_of_categories = sorted(set_of_categories)

quantity_by_category = {category: 0 for category in set_of_categories}

for book in books_data:
    for category in book["categories"]:
        if category != "":
            quantity_by_category[category] += 1

books_amount = len(books_data)

category_percentage = {}
for category, quantity in quantity_by_category.items():
    category_percentage[category] = (quantity / books_amount) * 100

with open("porcentagem_categoria.csv", "w") as file:
    writer = csv.writer(file)

    headers = ["categoria", "porcentagem"]
    writer.writerow(headers)

    for category, percentage in category_percentage.items():
        writer.writerow([category, percentage])
