 
function currencyConvertor(c1,n,c2) {
  const axios = require('axios');	
  const key = '7caed3fae9dcc24d9d0b';
  const url = `https://free.currconv.com/api/v7/convert?q=${c1}_${c2}&compact=ultra&apiKey=${key}` 

  const request = axios.get(url)

  const res = request
  .then(result => {  	
    console.log(`Result:  ${(JSON.stringify(result.data).split(':')[1].replace('}', '') * n).toFixed(2)} ${c2}`);
    return (JSON.stringify(result.data).split(':')[1].replace('}', '') * n);  	
  })
  .catch(error => console.error('(1) Inside error:', error))  
  //console.log('111'+res);
  return res;
}
;
console.log(currencyConvertor('USD',100,'EUR'))
console.log(currencyConvertor('EUR',100,'USD'))


