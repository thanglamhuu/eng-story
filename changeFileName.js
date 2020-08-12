var fs = require('fs');

var i=10;
for(i=10;i< 50;i++){
    fs.rename('/Volumes/data/Works/english/srcEng/eng-story/english/ff1/1-' + i +' Family and Friends 2e Students MultiROM 1.mp3', 
    '/Volumes/data/Works/english/srcEng/eng-story/english/ff1/0'+i+'.mp3', function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
}