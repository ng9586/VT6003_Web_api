import axios from 'axios';

const exchange = async (baseC:string, symbol: string) => {
  const url = `https://api.apilayer.com/fixer/latest?base=${baseC}&symbols=${symbol}`;
  const options = {
    url: url,
    headers: {
      apikey: "0TbuN5xDto9maW1Otnc6jV79FbwLeYb8"
    }
  };
  try{
    const { data, status } = await axios.get(url, options);
    console.log(`${status}`);
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else {
      return err;
    }
  }
}

try {
  if (process.argv.length <3) {
    throw 'missing parameter'
  } else {
    let baseC ='EUR'
    if(process.argv[3])
      baseC = process.argv[3].toUpperCase();
    const symbol = process.argv[2].toUpperCase();
    exchange(baseC,symbol).then((data)=> {
          console.log(data);
    })
  }
} catch (err: any) {
  console.log(`${err} Usage: currency [toSymbols]`)
}
