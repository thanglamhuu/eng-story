var download = require('./src/downloadFile');
var i = 10;
for(i=31;i<=44;i++) {
    download('https://mp4.tienganh123.com/phatamcobanmoi/bai'+i+'/bai'+i+'_VIP.mp4', 'phonicclip/bai'+i+'.mp4');
}