if(process.argv.length>=3){
	const fs = require('node:fs');
	fs.writeFile('./'+process.argv[2]+'-functions.txt',((i,reg,rep)=>i.match(reg).map(e=>e.replace(reg, rep)).join(''))(fs.readFileSync('./'+process.argv[2], 'utf8'),(RegExp(`^(){0}((?:cell|struct (?:u16|i8|DS|stack)|struct) )(\\w+)|^(fn )(\\w+\\([\\w ,]*\\))|^\\/\\/ *(\\w*)$`,'gm')),'$1$1$2$4$3$5$6\n'),err=>{});
} else
	console.log(`Usage: node [this script] [mastermind script]`);