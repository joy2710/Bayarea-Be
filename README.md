1.Create a new branch.
2.Merge all created branches to development. 
3.After merege delete this branch.

For Code Upload on Dev server 
1.Git checkout on development branch on server and git pull from development 
3.PM2 list(for process list).
4.Run commond  if process not exist (pm2 start ecosystem.config.js --only dev)
5.if process exist then run this commond only (pm2 restart dev/pm2 stop dev
/pm2 start dev).

For Stage Server BE
1.After testing on dev server. 
2.Create New branch stagerelease<date> from development branch
3.Git checkout on stagerelease<date> and git  pull from stagerelease<date>
5.Git chechout stagerelease<date> and git pull from stagerelease<date>.
4.PM2 list(for all process list).
5.Run commond  if process not exist (pm2 start ecosystem.config.js --only staging)
6.if process exist then run this commond only (pm2 restart staging/pm2 stop staging
/pm2 start staging).
7.After freez stage create a MR from stagerelease<date> to stage.
8.Git chechout stage and git pull from stage.
9.PM2 list(for all process list).
10.Run commond  if process not exist (pm2 start ecosystem.config.js --only staging)
11.if process exist then run this commond only (pm2 restart staging/pm2 stop staging
/pm2 start staging).

For Prod Server BE
1.After testing on stage server. 
2.Create  MR from stage to production and merge MR.
3.Create a new branch productionbackup<date> from production
3.Git checkout on production and git pull from production 
4.PM2 list(for all process list).
5.Run commond  if process not exist (pm2 start ecosystem.config.js --only prod)
6.if process exist then run this commond only (pm2 restart prod/pm2 stop prod
/pm2 start prod).