import json

from pprint import pprint

with open("bookData.json") as f:
    book_data = json.loads(f.read())

total_verses = 0
for book, data in book_data.items():
    total_verses += data["verses"]

print(total_verses)
