#!/usr/bin/env bash
python3 'kleinanzeigen/build.py'
npm run deploy
scp -i ~/.ssh/do_rsa2 -r public/ root@147.182.177.135:/srv/mfowler.info/
