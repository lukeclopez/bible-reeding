import json

from pprint import pprint

# Format verses_per_chapter more logically
with open("verses_and_chapters_per_book.json") as vpc:
    verses_per_chapter = json.loads(vpc.read())


def lift_name(input_dict):
    name = input_dict["name"]
    del input_dict["name"]
    tup = (name, input_dict)

    return tup


new_format_books = dict(map(lift_name, verses_per_chapter))

with open("verses_and_chapters_per_book.json", "w") as vpc:
    vpc.write(json.dumps(new_format_books))
