const $ = cheerio.load(pm.response.text());
//output the html for testing
console.log($.html());
