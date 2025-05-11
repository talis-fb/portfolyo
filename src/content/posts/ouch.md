---
title: Ouch
published: 2025-04-10
description: A open source tool for compression and decompression of files
tags: [Rust]
category: Projects
---

Ouch is an awesome CLI tool for compressing and decompressing for various formats.

_Written in Rust, btw..._

The Ouch main feature is automatically extension detection. When compressing, it will automatically detect the file extension. And when decompressing, it will automatically detect the archive format.
```sh
# Decompress
ouch decompress a.zip
ouch decompress a.zip b.tar.gz c.tar

# Compress
ouch compress one.txt two.txt archive.zip
ouch compress file.txt file.txt.lz4.zst
```

I'm alsovery proud to be a past maintainer and contributor, being responsible for following additions:

> [My contributions](https://github.com/ouch-org/ouch/pulls?q=is%3Apr+is%3Aclosed+author%3Atalis-fb)
