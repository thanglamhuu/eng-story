
// const parseOxford = require('./src/dictionaries/oxford');
//https://github.com/lkazberova/pronunciation-finder/blob/master/index.js

// parseOxford("hello").then((data) => {
    //     console.log("data ", data );
    // })
    
//https://www.npmjs.com/package/owlbot-js
//

var Owlbot = require('owlbot-js');
var YOUR_TOKEN = '76621d07a015bb062bf8f20a7613b7653fb5a740';
  
var client = Owlbot(YOUR_TOKEN);
 
client.define('love').then(function(result){
   console.log(result.pronunciation);
});
