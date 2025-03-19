
import axios from 'axios';
import * as readline from 'readline-sync';

const url = 'https://api.apilayer.com/fixer';
const key = ["0TbuN5xDto9maW1Otnc6jV79FbwLeYb8"];

const getInput = (question: string) => new Promise<string>( (resolve) => {
	const convertTo = readline.question(question);
  resolve(convertTo);
});




const checkValidCurrencyCode = (code: string) => {
  console.log('Checking Valid Currency Code...');
  return new Promise<string>((resolve, reject) =>{
    axios.get(`${url}/symbols`, {
      headers: {
        apikey: key
      }
    }).then(({data, status}) => {
      if(status===200){
        const currency = data.symbols;
        if(!currency.hasOwnProperty(code))
          reject (new Error(`invalid currency code ${code}`));
        else 
          resolve(code);
      }
      reject('Connection Error');      
    }).catch((err) => {
      reject(err);
    })
  })
}

const getData = (code: string) => {
  console.log('Retrieving the rate...');
  return new Promise((resolve, reject) =>{
    axios.get(`${url}/latest?base=HKD&symbols=${code}`, {
      headers: {
        apikey: key
      }
    }).then(({data, status}) => {
      if(status===200){
        resolve(data);
      } else {
        reject('Connection Error');
      }
    }).catch((err) => {
      reject(err);
    })
  })
}


const printObject = (data: any) => new Promise<any>( resolve => {
	//const indent = 2;
  const amount = readline.question('Enter amount of HK$ to be converted: ');
  //const str = JSON.stringify(data, null, indent);
 
  //workshop 3 answer
  const curr:string[]=Object.keys(data.rates );
  const rate:number[] = Object.values(data.rates);
  let convertAmount=rate[0]*parseInt(amount);     

  console.log(`Converted Amount= ${convertAmount.toFixed(0)} ${curr[0]} with rate ${rate[0].toFixed(2)}`);
  resolve(curr[0]);                        
  
});

const getCurrency = (curr:string) => {
//  console.log('Retrieving list of currency...');
  return new Promise((resolve, reject) =>{
    axios.get('https://openexchangerates.org/api/currencies.json').then(({data, status}) => {
      if(status===200){
      //  console.log(data)    
       console.log('currency: '+ data[curr]);
        resolve(data);
      } else {
        reject('Connection Error');
      }
    }).catch((err) => {
      reject(err);
    })
  })
}


const exit = () => new Promise( () => {
	process.exit();
})

getInput('enter currency: ')
	.then(checkValidCurrencyCode)
	.then(getData)
	.then(printObject)
  .then(getCurrency)
	.then(exit)
	.catch( err => console.error(`error: ${err.message}`))
	.then(exit);
