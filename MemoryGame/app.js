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
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

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
	cardsChosenIds.push(cardId)
	this.setAttribute("src", cardArray[cardId].img);

	if (cardsChosen.length === 2)
	{
		setTimeout(checkMatch, 500)
	}
}

function checkMatch()
{
	const cards = document.querySelectorAll('img')
	// console.log(cardsChosen);
	console.log(cards)
	console.log("check for match")

	const optionOneId = cardsChosenIds[0]
	const optionTwoId = cardsChosenIds[1]

	if (optionOneId === optionTwoId) 
	{
    	cards[optionOneId].setAttribute("src", "images/blank.png")
    	cards[optionTwoId].setAttribute("src", "images/blank.png")
		console.log("Same card selected")
  	}

	if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId)
	{
		// alert("Match")
		cards[optionOneId].setAttribute("src", "images/white.png")
		cards[optionTwoId].setAttribute("src", "images/white.png")
		cards[optionOneId].removeEventListener("click", flipCard)
		cards[optionTwoId].removeEventListener("click", flipCard)
		cardsWon.push(cardsChosen)
	}

	else
	{
		cards[optionOneId].setAttribute("src", "images/blank.png")
		cards[optionTwoId].setAttribute("src", "images/blank.png")
		console.log("Sorry, try again")
	}

	cardsChosen = []
	cardsChosenIds = []
	resultDisplay.innerHTML = cardsWon.length

	if (cardsWon.length === cardArray.length / 2)
	{
		resultDisplay.innerHTML = "Congratulations, you found them all!"
	}
}

createBoard()
























