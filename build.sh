#!/usr/bin/env sh

set -e
yarn build

cd dist

git init
git add -A
git commit -m '[update] 更新文档'

git push -f git@github.com:WeberLong/long-ui.git master:gh-pages

cd -
