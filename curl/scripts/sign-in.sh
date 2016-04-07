#!/bin/bash


#curl "http://httpbin.org/post" \
curl "" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL" \
  --data-urlencode "credentials[password]=$PASSWORD"

echo
