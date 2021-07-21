#!/usr/bin/env bash
python3 'kleinanzeigen/build.py'
npm run deploy
rsync -avzh "ssh -i /home/.ssh/do_rsa2" /home/notplants/computer/docs/mfowler.info/public/ root@147.182.177.135:/srv/mfowler.info/