"""Make 800px-wide "-800w" copies of large page photos so phones load less.

Run from the repo root after adding photos:  python3 scripts/make-image-variants.py
Writes src/lib/responsive-images.json ({src: full width}); the site only uses
srcset for photos listed there.
"""
import json, os, re
from glob import glob
from PIL import Image

srcs = set()
for f in glob("src/**/*.ts*", recursive=True):
    srcs |= set(re.findall(r'"(/(?:assets|photos)/[^"]+\.(?:jpg|jpeg))"', open(f).read()))

widths = {}
for s in sorted(srcs):
    if "-800w." in s:
        continue
    p = "public" + s
    if not os.path.exists(p):
        continue
    im = Image.open(p)
    w, h = im.size
    if w < 1000:
        continue
    base, ext = os.path.splitext(p)
    out = f"{base}-800w{ext}"
    if not os.path.exists(out):
        im.convert("RGB").resize((800, round(h * 800 / w)), Image.LANCZOS).save(
            out, "JPEG", quality=78, optimize=True, progressive=True
        )
    widths[s] = w

with open("src/lib/responsive-images.json", "w") as fh:
    json.dump(widths, fh, indent=1, sort_keys=True)
print(len(widths), "photos have an 800px copy")
