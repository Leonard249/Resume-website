# Resume-websites 

## Deployment steps 
1. pnpm run build
2. scp -r ./dist 192.168.0.23:~/
3. bash
'# Remove old content
sudo rm -rf /var/www/html/*
sudo cp -r ~/dist/* /var/www/html/

sudo chown -R www-data:www-data /var/www/html/'
4. sudo systemctl status cloudflared

## check rpi temp
vcgencmd measure_temp

