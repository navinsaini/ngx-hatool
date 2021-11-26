#!/bin/sh
git checkout master && \
ng lint && \
rm .gitignore && \
npm run package && \
ng build ngx-hatool-tester --prod --base-href=/ngx-hatool/ && \
git add dist/ngx-hatool-tester && \
git commit -m dist && \
(git branch -D gh-pages || true) && \
git subtree split --prefix dist/ngx-hatool-tester -b gh-pages && \
git push -f origin gh-pages:gh-pages && \
git checkout master && \
git branch -D gh-pages && \
git checkout . && \
git checkout -- .gitignore && \
git push
