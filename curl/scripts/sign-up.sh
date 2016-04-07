#!/bin/bash

#curl "http://httpbin.org/post" \
curl "" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL" \
  --data-urlencode "credentials[password]=$PASSWORD" \
  --data-urlencode "credentials[password_confirmation]=$PASSWORD"


# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
