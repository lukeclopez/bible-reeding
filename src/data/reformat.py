import json

from pprint import pprint

with open("verses_per_chapter.json") as vpc:
    verses_per_chapter = json.loads(vpc.read())

with open("verses_and_chapters_per_book.json") as vpc:
    verses_per_chapters_per_book = json.loads(vpc.read())

copy_vpcpb = verses_per_chapters_per_book.copy()
for book_name, chapters_verses in verses_per_chapters_per_book.items():
    if book_name == "Joshua":
        chapters = [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23,
                    24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33]
    else:
        chapters = [i for i in verses_per_chapter[book_name].values()]
    copy_vpcpb[book_name]["versesPerChapter"] = chapters

with open("book_data.json", "w") as vpc:
    vpc.write(json.dumps(copy_vpcpb))
