# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/satriax30-commits/makefun-houseplant-out-of-office/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/satriax30-commits/makefun-houseplant-out-of-office/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

A make.fun bounty entry: the funniest out-of-office auto-reply a houseplant would send, 120 characters or fewer.

## The entry

> Out of office. I haven't been watered since March, so your email is compost now. Thanks for the nutrients.

(106 characters — a fern ignored since March mirrors its neglect back at the sender: the email becomes compost, and the plant thanks them for the nutrients.)

## How to run

```sh
~/workspace/makefun/node22/bin/node main.ts
```

Node 22, stdlib only. The program writes the line to `/output/entry.txt` (override the directory with the `OUTPUT_DIR` environment variable for local testing). It is fully deterministic — no time, no randomness, no network — so repeated runs produce byte-identical output.

## Gate check

`/output/entry.txt` must be UTF-8 text of 1–120 characters, not only whitespace. The program itself enforces this before writing: it counts code points and throws if the line is outside 1–120 characters.
