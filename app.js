var quotes = [
	{
		link:'https://s4.scoopwhoop.com/anj/shlokas/812302479.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/336208931.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/274128437.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/363184657.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/641353321.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/953756327.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/290643282.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/769165409.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/765547843.jpg'
	},
	{
		link:'https://s4.scoopwhoop.com/anj/shloka/936470284.jpg'
	},
	{
		link:'https://s4.scoopwhoop.com/anj/shlokas/28006421.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/897656696.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/241989566.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/6741233.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/794099783.jpg'
	}, 
	{
		link:'https://s4.scoopwhoop.com/anj/shlokas/521882940.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/793967663.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/968671711.jpg'
	},
	{
		link:'https://s4.scoopwhoop.com/anj/shlokas/533466723.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/532283430.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/180979294.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/192869000.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/175922367.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/888405899.jpg'
	},
	{
		link:'https://s3.scoopwhoop.com/anj/shlokas/829864677.jpg'
	}
];
function generate() {
	var rand = Math.floor(Math.random()*(Math.floor(Math.random()*quotes.length)));
	document.getElementById('content').setAttribute('src', quotes[rand].link);
	document.getElementById('link1').setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=Sanskrit quote link: '+quotes[rand].link);
	console.log(rand);
}

/*

if(window.screen.width<=400)
  	document.getElementById('content').setAttribute('width','100%');
 else if(window.screen.width>400&&window.screen.width<=800)
 	document.getElementById('content').setAttribute('width','70%');

*/