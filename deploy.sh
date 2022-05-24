#!/usr/bin/env bash
python3 'kleinanzeigen/build.py'
npm run deploy
rsync -avzh -e "ssh -i /Users/notplants/.ssh/do_rsa2" /Users/notplants/computer/docs/mfowler.info/public/ root@147.182.177.135:/srv/mfowler.info/