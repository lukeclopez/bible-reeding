import json

from pprint import pprint

# Format verses_per_chapter more logically
with open("verses_per_chapter.json") as vpc:
    verses_per_chapter = json.loads(vpc.read())


def lift_name(input_dict):
    name = input_dict["name"]
    del input_dict["name"]
    tup = (name, input_dict)

    return tup


list_of_books = dict(map(lift_name, verses_per_chapter))

with open("verses_per_chapter.json", "w") as vpc:
    vpc.write(json.dumps(list_of_books))
