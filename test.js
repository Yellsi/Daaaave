const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://www.imdb.com/search/title/?groups=top_1000&ref_=adv_prv';

rp(url)
  .then(function(html){
    //success!
  /*  const movies = [];
    for (let i = 0; i < 50 ;i++){
        movies.push($('div > class ="lister-item mode-advance"', html)[i].attribs);
    }
    console.log(movies)*/
    console.log($('div class', html).length);
    console.log($('div > class >lister-item mode-advance', html));
    console.log("p")
  })
  .catch(function(err){
    //handle error
  });
  