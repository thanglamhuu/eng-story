var download = require('../src/downloadFile');
const fs = require('fs');

//var i = 10;
// for(i=31;i<=44;i++) {
//     download('https://mp4.tienganh123.com/phatamcobanmoi/bai'+i+'/bai'+i+'_VIP.mp4', 'phonicclip/bai'+i+'.mp4');
// }


let rawdata = fs.readFileSync('phonics/basicPhonetic.json');
let basicPhonetic = JSON.parse(rawdata);
var list = basicPhonetic["list"];
var j = 0;
for(j=0;j<list.length;j++) {
    download('https://data.tienganh123.com/images/avatar/'+list[j]["image"], 'phonics/img/'+list[j]["image"]);
}
