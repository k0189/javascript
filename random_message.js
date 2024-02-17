/*
	Generiamo un messaggio random attingendo parti da 3 array diversi, uno per il soggetto, uno per il verbo e uno per il complemento

*/

let soggetti = ['Marco', 'Luca', 'Giovanni', 'Matteo', 'Annalisa', 'Giulia', 'Aurora'];
let verbi = ['pesca', 'mangia', 'corre', 'visita', 'ha pescato', 'ha visitato', 'ha mangiato', 'ha corso'];
let complementi = ['la maratona', 'una mela', 'Bologna', 'in città', 'in campagna', 'al fiume', 'il cane'];

const randSog = () => {
	let contElem = soggetti.length;
	return soggetti[Math.floor(Math.random()*contElem)];
}

const randVer = () => {
	let contElem = verbi.length;
	return verbi[Math.floor(Math.random()*contElem)];
}

const randCom = () => {
	let contElem = complementi.length;
	return complementi[Math.floor(Math.random()*contElem)];
}

const randMessage = () => {
	console.log(randSog() +' '+ randVer() +' '+ randCom());
}

for (let i = 0; i < 10; i++) {
	randMessage();
}