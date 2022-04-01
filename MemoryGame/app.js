const cardArray = 
[
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	}
];

cardArray.sort(() => 0.5 - Math.random())  // to sort an array randomly

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []

function createBoard()
{
	for (let i = 0; i < cardArray.length; i++)
	{
		const card = document.createElement('img')
		card.setAttribute('src', 'images/blank.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		gridDisplay.appendChild(card)
	}
}

function flipCard()
{

	let cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	this.setAttribute('src', cardArray[cardId].img)

	if (cardsChosen.length === 2)
	{
		setTimeout(checkMatch, 500)
	}
}

function checkMatch()
{
	console.log(cardsChosen);
	console.log("check for match")
	if (cardsChosen[0] === cardsChosen[1])
	{
		alert("Match")
	}
	else
	{
		cardArray.pop();
		cardArray.pop();
	}
}

createBoard()
























