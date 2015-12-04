"use strict"

var switchCount = 0
var running = 0
var timer = 0
var score = 0
var isClickable = false
var ticketOneRN
var ticketTwoRN
var ticketThreeRN
var ticketFourRN
var ticketFiveRN

// Start Pause Resume
document.querySelector( ".switch" ).addEventListener( "click", function () {
	switchCount++
	increment()

	if ( switchCount % 2 === 0 ) {
		document.querySelector( ".switch h2" ).innerHTML = "RESUME"

		//pause timer
		running = false

		//pause music
		pauseLoop()

		//make not clickable
		isClickable = false

	} else if ( switchCount > 1 ) {
		document.querySelector( ".switch h2" ).innerHTML = "PAUSE"
		//resume timer
		running = true		

		//resume music
		playLoop()

		//make clickable
		isClickable = true

	} else {
		document.querySelector( ".switch h2" ).innerHTML = "PAUSE"

		//generate cards
		generateTicketOne()
		generateTicketTwo()
		generateTicketThree()
		generateTicketFour()
		generateTicketFive()

		//start timer
		running = true

		//start music
		playLoop()

		//make clickable
		isClickable = true

	}
} )

//Music
var clip = document.getElementById("clip")
clip.loop = true

function playLoop () { 
    clip.play()
} 

function pauseLoop () { 
    clip.pause()
}


// Score Keeper
function countDollars () {
	if ( score != 1 ) {
	document.querySelector( ".dollars h2" ).innerHTML = "$" + score + ".00"
	console.log("price")
	}
}

// Timer
function increment () {	

	var mins = Math.floor( timer/10/60 )
	var secs = Math.floor( timer/10 )
	var tenths = ( timer % 10 )

	setTimeout ( function () {
		if ( running === true && secs === 60 ) {
			alert("GAME OVER! You managed to serve $"+ score +" worth of sushi in the last 60 seconds!")
		} else if ( running === true ) {
			timer++

				if ( mins < 10 ) {
					mins = "0" + mins
				}

				if ( secs < 10 ) {
					secs = "0" + secs
				}

			document.querySelector( ".timer h2" ).innerHTML = mins + ":" + secs + ":0" + tenths
			increment()
		} 
	}, 100 )	
}

// Menu
document.querySelector( ".menu" ).addEventListener( "click", function () {
	if ( isClickable ) {
		document.querySelector( ".book" ).style.display = "inline";
	}
} )

document.querySelector( ".book" ).addEventListener( "click", function () {
	if ( isClickable ) {
		document.querySelector( ".book" ).style.display = "none";
	}
} )

// Ingredients
var ingredientsArray = document.body.querySelectorAll( ".ingredients section" )
var boardArray = []
var boardNodes = []

document.querySelector( ".rice" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupRice = ingredientsArray[0].cloneNode()
		document.querySelector( ".board" ).appendChild( dupRice )
		boardArray.push("rice")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".nori" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupNori = ingredientsArray[1].cloneNode()
		document.querySelector( ".board" ).appendChild( dupNori )
		boardArray.push("nori")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".salmon" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupSalmon = ingredientsArray[2].cloneNode()
		document.querySelector( ".board" ).appendChild( dupSalmon )
		boardArray.push("salmon")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".tuna" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupTuna = ingredientsArray[3].cloneNode()
		document.querySelector( ".board" ).appendChild( dupTuna )
		boardArray.push("tuna")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".yellowtail" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupYellowtail = ingredientsArray[4].cloneNode()
		document.querySelector( ".board" ).appendChild( dupYellowtail )
		boardArray.push("yellowtail")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".shrimp" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupShrimp = ingredientsArray[5].cloneNode()
		document.querySelector( ".board" ).appendChild( dupShrimp )
		boardArray.push("shrimp")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".crab" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupCrab = ingredientsArray[6].cloneNode()
		document.querySelector( ".board" ).appendChild( dupCrab )
		boardArray.push("crab")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".lobster" ).addEventListener( "click", function () {
	if ( isClickable ) {	
		var dupLobster = ingredientsArray[7].cloneNode()
		document.querySelector( ".board" ).appendChild( dupLobster )
		boardArray.push("lobster")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".octopus" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupOctopus = ingredientsArray[8].cloneNode()
		document.querySelector( ".board" ).appendChild( dupOctopus )
		boardArray.push("octopus")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".squid" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupSquids = ingredientsArray[9].cloneNode()
		document.querySelector( ".board" ).appendChild( dupSquids )
		boardArray.push("squid")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".eel" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupEel = ingredientsArray[10].cloneNode()
		document.querySelector( ".board" ).appendChild( dupEel )
		boardArray.push("eel")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".uni" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupUni = ingredientsArray[11].cloneNode()
		document.querySelector( ".board" ).appendChild( dupUni )
		boardArray.push("uni")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".scallop" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupScallop = ingredientsArray[12].cloneNode()
		document.querySelector( ".board" ).appendChild( dupScallop )
		boardArray.push("scallop")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".redSnapper" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupUni = ingredientsArray[13].cloneNode()
		document.querySelector( ".board" ).appendChild( dupUni )
		boardArray.push("redSnapper")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".abalone" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupAbalone = ingredientsArray[14].cloneNode()
		document.querySelector( ".board" ).appendChild( dupAbalone )
		boardArray.push("abalone")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".mackerel" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupMackerel = ingredientsArray[15].cloneNode()
		document.querySelector( ".board" ).appendChild( dupMackerel )
		boardArray.push("mackerel")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".halibut" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupHalibut = ingredientsArray[16].cloneNode()
		document.querySelector( ".board" ).appendChild( dupHalibut )
		boardArray.push("halibut")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".roe" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupRoe = ingredientsArray[17].cloneNode()
		document.querySelector( ".board" ).appendChild( dupRoe )
		boardArray.push("roe")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".tamagoyaki" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupTamagoyaki = ingredientsArray[18].cloneNode()
		document.querySelector( ".board" ).appendChild( dupTamagoyaki )
		boardArray.push("tamagoyaki")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

document.querySelector( ".vegetables" ).addEventListener( "click", function () {
	if ( isClickable ) {
		var dupVegetables = ingredientsArray[19].cloneNode()
		document.querySelector( ".board" ).appendChild( dupVegetables )
		boardArray.push("vegetables")
		boardNodes = document.querySelectorAll( ".board section" )
	}
} )

// Trash
document.querySelector( ".trash" ).addEventListener( "click", function () {
	if ( isClickable ) {
		document.querySelector( ".board" ).innerHTML = ""
		boardNodes = []
		boardArray = []
		score = score - 10
		countDollars()
	}
} )

function clear () {
	document.querySelector( ".board" ).innerHTML = ""
	boardNodes = []
	boardArray = []
}

// Reset Game
document.querySelector( ".reset" ).addEventListener( "click", function () {
	location.reload()
} )

//Ticket Picker
document.querySelector( ".ticketOne" ).addEventListener( "click", function () {
	if ( isClickable ) {
	document.querySelector( ".ticketOne" ).style.opacity = 1
	document.querySelector( ".ticketTwo" ).style.opacity = .5
	document.querySelector( ".ticketThree" ).style.opacity = .5
	document.querySelector( ".ticketFour" ).style.opacity = .5
	document.querySelector( ".ticketFive" ).style.opacity = .5
	if ( boardArray.toString() === sushiArray[ticketOneRN].ingredients.toString() ) {
		score = score + sushiArray[ticketOneRN].price
		countDollars()
		clear()
		generateTicketOne()
	}
	}
} )
document.querySelector( ".ticketTwo" ).addEventListener( "click", function () {
	if ( isClickable ) {
	document.querySelector( ".ticketOne" ).style.opacity = .5
	document.querySelector( ".ticketTwo" ).style.opacity = 1
	document.querySelector( ".ticketThree" ).style.opacity = .5
	document.querySelector( ".ticketFour" ).style.opacity = .5
	document.querySelector( ".ticketFive" ).style.opacity = .5
	if ( boardArray.toString() === sushiArray[ticketTwoRN].ingredients.toString() ) {
		score = score + sushiArray[ticketTwoRN].price
		countDollars()
		clear()
		generateTicketTwo()
	}
	}
} )
document.querySelector( ".ticketThree" ).addEventListener( "click", function () {
	if ( isClickable ) {
		document.querySelector( ".ticketOne" ).style.opacity = .5
		document.querySelector( ".ticketTwo" ).style.opacity = .5
		document.querySelector( ".ticketThree" ).style.opacity = 1
		document.querySelector( ".ticketFour" ).style.opacity = .5
		document.querySelector( ".ticketFive" ).style.opacity = .5
		if ( boardArray.toString() === sushiArray[ticketThreeRN].ingredients.toString() ) {
			score = score + sushiArray[ticketThreeRN].price
			countDollars()
			clear()
			generateTicketThree()
		}
	}
} )
document.querySelector( ".ticketFour" ).addEventListener( "click", function () {
	if ( isClickable ) {
		document.querySelector( ".ticketOne" ).style.opacity = .5
		document.querySelector( ".ticketTwo" ).style.opacity = .5
		document.querySelector( ".ticketThree" ).style.opacity = .5
		document.querySelector( ".ticketFour" ).style.opacity = 1
		document.querySelector( ".ticketFive" ).style.opacity = .5
		if ( boardArray.toString() === sushiArray[ticketFourRN].ingredients.toString() ) {
			score = score + sushiArray[ticketFourRN].price
			countDollars()
			clear()
			generateTicketFour()
		}
	}
} )
document.querySelector( ".ticketFive" ).addEventListener( "click", function () {
	if ( isClickable ) {
		document.querySelector( ".ticketOne" ).style.opacity = .5
		document.querySelector( ".ticketTwo" ).style.opacity = .5
		document.querySelector( ".ticketThree" ).style.opacity = .5
		document.querySelector( ".ticketFour" ).style.opacity = .5
		document.querySelector( ".ticketFive" ).style.opacity = 1
		if ( boardArray.toString() === sushiArray[ticketFiveRN].ingredients.toString() ) {
			score = score + sushiArray[ticketFiveRN].price
			countDollars()
			clear()
			generateTicketFive()
		}
		}
} )


// Rules
document.querySelector( ".rules" ).addEventListener( "click", function () {
	document.querySelector( ".info" ).style.display = "inline";
} )

document.querySelector( ".info" ).addEventListener( "click", function () {
	document.querySelector( ".info" ).style.display = "none";
} )

// Generate + Pick Tickets
function generateTicketOne () { 
	ticketOneRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	document.querySelector( ".ticketOne" ).style.backgroundImage = "url('assets" + sushiArray[ ticketOneRN ].img + "')"
}

function generateTicketTwo () { 
	ticketTwoRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	document.querySelector( ".ticketTwo" ).style.backgroundImage = "url('assets" + sushiArray[ ticketTwoRN ].img + "')"
}

function generateTicketThree () { 
	ticketThreeRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	document.querySelector( ".ticketThree" ).style.backgroundImage = "url('assets" + sushiArray[ ticketThreeRN ].img + "')"	
}

function generateTicketFour () { 
	ticketFourRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	document.querySelector( ".ticketFour" ).style.backgroundImage = "url('assets" + sushiArray[ ticketFourRN ].img + "')"	
}

function generateTicketFive () { 
	ticketFiveRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	document.querySelector( ".ticketFive" ).style.backgroundImage = "url('assets" + sushiArray[ ticketFiveRN ].img + "')"	
}

// Sushi
function Item (img, ingredients, price) {
	this.img = img
	this.ingredients = ingredients
	this.price = price
}

var sushiArray = []

var ikuraGukan = new Item( "/ikuraGukan.png", [ "rice", "nori", "roe" ], 6 )
sushiArray.push(ikuraGukan)

var sakeNigiri = new Item( "/sakeNigiri.png", [ "rice", "salmon" ], 6 )
sushiArray.push(sakeNigiri)

var kappaMaki = new Item( "/kappaMaki.png", [ "rice", "nori", "vegetables" ], 6 )	
sushiArray.push(kappaMaki)

var maguroNigiri = new Item( "/maguroNigiri.png", [ "rice", "tuna" ], 6 )	
sushiArray.push(maguroNigiri)

var uniGukan = new Item( "/uniGukan.png", [ "rice", "uni" ], 6 )
sushiArray.push(uniGukan)

var toroNigiri = new Item( "/toroNigiri.png", [ "rice", "tuna" ], 6 )	
sushiArray.push(toroNigiri)

var hamachiMaki = new Item( "/hamachiMaki.png", [ "rice", "nori", "yellowtail" ], 6 )	
sushiArray.push(hamachiMaki)

var ebiNigiri = new Item( "/ebiNigiri.png", [ "rice", "shrimp" ], 6 )	
sushiArray.push(ebiNigiri)

var amaebiNigiri = new Item( "/amaebiNigiri.png", [ "rice", "shrimp" ], 6 )	
sushiArray.push(amaebiNigiri)

var tamagoyakiNigiri = new Item( "/tamagoyakiNigiri.png", [ "rice", "tamagoyaki" ], 6 )	
sushiArray.push(tamagoyakiNigiri)

var ikaNigiri = new Item( "/ikaNigiri.png", [ "rice", "squid" ], 6 )		
sushiArray.push(ikaNigiri)

var anagoNigiri = new Item( "/anagoNigiri.png", [ "rice", "eel" ], 6 )	
sushiArray.push(anagoNigiri)

var taiNigiri = new Item( "/taiNigiri.png", [ "rice", "redSnapper" ], 6 )	
sushiArray.push(taiNigiri)

var ajiNigiri = new Item( "/ajiNigiri.png", [ "rice", "mackerel" ], 6 )	
sushiArray.push(ajiNigiri)

var takoNigiri = new Item( "/takoNigiri.png", [ "rice", "octopus" ], 6 )	
sushiArray.push(takoNigiri)

var tekkaMaki = new Item( "/tekkaMaki.png", [ "rice", "nori", "tuna" ], 6 )	
sushiArray.push(tekkaMaki)

var sabaNigiri = new Item( "/sabaNigiri.png", [ "rice", "mackerel" ], 6 )	
sushiArray.push(sabaNigiri)

var californiaRoll = new Item( "/californiaRoll.png", [ "rice", "nori", "vegetables", "crab" ], 6 )	
sushiArray.push(californiaRoll)

var futoMaki = new Item( "/futoMaki.png", [ "rice", "nori", "egg", "vegetables" ], 6 )		
sushiArray.push(futoMaki)

var chutoroNigiri = new Item( "/chutoroNigiri.png", [ "rice", "tuna" ], 6 )	
sushiArray.push(chutoroNigiri)

var iseebiNigiri = new Item( "/iseebiNigiri.png", [ "rice", "lobster" ], 6 )	
sushiArray.push(californiaRoll)

var tsunamayoMaki = new Item( "/tsunamayoMaki.png", [ "rice", "nori", "vegetables", "tuna" ], 6 )	
sushiArray.push(californiaRoll)

var buriNigiri = new Item( "/buriNigiri.png", [ "rice", "yellowtail" ], 6 )	
sushiArray.push(californiaRoll)

var uraMaki = new Item( "/uraMaki.png", [ "rice", "nori", "vegetables" ], 6 )	
sushiArray.push(californiaRoll)

var matsubaganiNigiri = new Item( "/matsubaganiNigiri.png", [ "rice", "crab" ], 6 )		
sushiArray.push(californiaRoll)

var tobikoNigiri = new Item( "/tobikoNigiri.png", [ "rice", "nori", "roe" ], 6 )		
sushiArray.push(californiaRoll)

var masagoNigiri = new Item( "/masagoNigiri.png", [ "rice", "nori", "roe" ], 6 )	
sushiArray.push(californiaRoll)

var katsuoNigiri = new Item( "/katsuoNigiri.png", [ "rice", "tuna" ], 6 )		
sushiArray.push(californiaRoll)

var temarizushi = new Item( "/temarizushi.png", [ "rice", "nori" ], 6 )	
sushiArray.push(californiaRoll)

var ohyouNigiri = new Item( "/ohyouNigiri.png", [ "rice", "halibut" ], 6 )	
sushiArray.push(californiaRoll)

var akamiNigiri = new Item( "/akamiNigiri.png", [ "rice", "tuna" ], 6 )		
sushiArray.push(californiaRoll)

var kanpyoMaki = new Item( "/kanpyoMaki.png", [ "rice", "vegetables" ], 6 )
sushiArray.push(californiaRoll)