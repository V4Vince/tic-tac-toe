#!/bin/bash

#curl "http://localhost:3000/sign-in" \
curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data: {
  "game": {
    "id": 3,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": null
  }
}

# data output from curl doesn't have a trailing newline
echo
