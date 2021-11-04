async function currencyConvertor(c1, n, c2){

  const axios = require('axios'); 
  const key = '7caed3fae9dcc24d9d0b';
  const url = `https://free.currconv.com/api/v7/convert?q=${c1}_${c2}&compact=ultra&apiKey=${key}`;
  
  let resolve = await axios.get(url);

  let data = JSON.stringify(resolve.data).split(':');
  //console.log((data[1].replace('}', '') * n).toFixed(2));
  return  (data[1].replace('}', '') * n).toFixed(2);
  
}


console.log(currencyConvertor('USD', 40 ,'EUR'));
console.log(currencyConvertor('EUR', 1 ,'EUR'));

