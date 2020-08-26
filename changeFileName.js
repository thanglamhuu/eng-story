var fs = require('fs');

var i=1;
for(i=1;i< 10;i++){
    fs.rename('/Volumes/data/Works/english/srcEng/eng-story/english/everyDayLifeSentenceCard/0' + i +' Track ' + i +'.mp3', 
    '/Volumes/data/Works/english/srcEng/eng-story/english/everyDayLifeSentenceCard/0'+i+'.mp3', function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
}