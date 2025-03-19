class Coffee {
	#roast: string;
	#ounces: number;	
  #shots: number;	
  
	constructor(roast?: string, ounces = 8, shots=0) { 
		if(roast === undefined) {
			throw Error('No roast defined');
		}
    
		this.#roast = roast;
		this.#ounces = ounces;
    this.#shots = shots;
	}

	getSize = () => {
		if (this.#ounces === 8) {
			return 'Small';
		} else if (this.#ounces === 12) {
			return 'Medium';
		} else if (this.#ounces === 16) {
			return 'Large';
		} else 
			return 'undefined';
	}

  checkstrong =()=>{
    if(this.#shots>=2)
      return 'strong';
    else
      return '';
  }
  

	order = () => {
		let msg;	
		msg = `You've ordered a ${this.getSize()} ${this.#roast} with ${this.#shots} additional shots ${this.checkstrong()} coffee.`;
		return msg;
	}
}

export default Coffee;