import axios from 'axios';

const addressLocation = async (address: string) => {
  const url = `https://api.maptiler.com/geocoding/${address}.json?key=KDAxrA0y6JDS27n2RQT4`;
  try {
    const {data, status} = await axios.get(url, {});
    console.log(`${status}`);
 //   console.log(data)  // JSON Object
    if(data.features.length==0)
      console.log('cannot find address')
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else return err; 
               
    }
  }


try {
	if (process.argv.length < 3) {
		throw 'missing parameter';
	}
  
	let address = process.argv[2];
	/* we need to remove the single quotes from the string */
	address = address.replace(/'/g,'');
	addressLocation(address).then((data)=> {
    for(let i=0;i<data.features.length;i++){
      const address= data.features[i].center
      console.log(`Output:lon ${address[0].toFixed(0)}, lat ${address[1].toFixed(0)} ${data.features[i].place_name}`);}  
  })
} catch(err: any) {
	console.log(err);
}
