import * as readline from 'readline-sync';

const items : string[]= [];
let input: string;

do {
	input = String(readline.question('enter command: ')).trim()
	if (input.indexOf('add ') === 0) {
		const space: number = input.indexOf(' ')
		const item: string = input.substring(space).trim()
   //answer
    if(items.indexOf(item)<0) {
      console.log(`adding "${item}"`)
      items.unshift(item)
    } else {
      console.log(`the item is existed~`)
    }
	}
	if (input.indexOf('list') === 0) {
		for (let i=0; i< items.length; i++) {
			console.log(`${i}. ${items[i]}`)
		}
	}
  if (input.indexOf('remove ') === 0) {
    const space: number = input.indexOf(' ')
    const item: string = input.substring(space).trim()
    if(items.indexOf(item)<0) {
        console.log(`"${item}" not in the list `)
      } else {

       items.splice(items.indexOf(item),1)
        console.log(`"${item}" removed `)
      }
    }
   
} while (input !== 'exit')
