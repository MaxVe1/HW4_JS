//This code works only in browser... in clear nodejs not working...

async function currencyConvertor(c1, n, c2){
  const key = '7caed3fae9dcc24d9d0b';
  const url = `https://free.currconv.com/api/v7/convert?q=${c1}_${c2}&compact=ultra&apiKey=${key}`;
    
  let response = await fetch(url);
  let jsonResponse = await response.json();
  let data = JSON.stringify(jsonResponse).split(':');

  //console.log( `Result:   ${ ((data[1].replace('}', '') * n)).toFixed(2)}`);
  return `Result:   ${ ((data[1].replace('}', '') * n)).toFixed(2)}  ` ;
}

console.log(currencyConvertor('USD', 40 ,'EUR'));

