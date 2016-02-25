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
var winRN

// Start Pause Resume
$( ".switch" ).on( "click", function () {
	switchCount++
	increment()
	if ( switchCount % 2 === 0 ) {
		$( ".switch" ).html( "<h2>RESUME</h2>" )
		running = false
		pauseClip()
		isClickable = false
	} else if ( switchCount > 1 ) {
		$( ".switch" ).html( "<h2>PAUSE</h2>")
		running = true		
		playClip() 
		isClickable = true
	} else {
		$( ".switch" ).html( "<h2>PAUSE</h2>" )
		generateTicketOne()
		generateTicketTwo()
		generateTicketThree()
		generateTicketFour()
		generateTicketFive()
		running = true
		playClip()
		isClickable = true
	}
} )

// Music
var clip = $( "#clip" )
clip.get(0).loop = true

function playClip () { 
    clip.get(0).play() 
}

function pauseClip () { 
    clip.get(0).pause()
}

var party = $( "#party" )
party.get(0).loop = true

function playParty () { 
    party.get(0).play() 
}
function pauseParty () { 
    party.get(0).pause()
} 


// Score
function countDollars () {
	if ( score != 1 ) {
		$( ".dollars" ).html("<h2>$" + score + ".00</h2>")
	}
}

// Timer
function increment () {	
	var mins = Math.floor( timer/10/60 % 60 )
	var secs = Math.floor( timer/10 % 60 )
	var tenths = ( timer % 10 )
	setTimeout ( function () {
		if ( running === true && ( mins === 3 && tenths === 1 ) ) {
			pauseClip()
			alert("GAME OVER! You managed to serve $"+ score +" worth of sushi in round one!")
		} else if ( running === true ) {
			timer++
			if ( mins < 10 ) {
				mins = "0" + mins
			}
			if ( secs < 10 ) {
				secs = "0" + secs
			}
			$( ".timer h2" ).html( mins + ":" + secs + ":0" + tenths )
			increment()
		} 
	}, 100 )	
}

// Menu
$( ".menu" ).on( "click", function () {
	if ( isClickable ) {
		$( ".book" ).css( { "display": "inline" } )
	}
} )

$( ".book" ).on( "click", function () {
	if ( isClickable ) {
		$( ".book" ).css( { "display": "none" } )
	}
} )

// Ingredients
var ingredientsArray = $( ".ingredients section" )
var boardArray = []
var boardNodes = []

$( ".rice" ).on( "click", function () {
	if ( isClickable ) {	
		var dupRice = ingredientsArray[0].cloneNode()
		$( ".board" ).append( dupRice )
		boardArray.push( "rice" )
		boardNodes = $( ".board section" )
	}
} )

$( ".nori" ).on( "click", function () {
	if ( isClickable ) {	
		var dupNori = ingredientsArray[1].cloneNode()
		$( ".board" ).append( dupNori )
		boardArray.push( "nori" )
		boardNodes = $( ".board section" )
	}
} )

$( ".salmon" ).on( "click", function () {
	if ( isClickable ) {	
		var dupSalmon = ingredientsArray[2].cloneNode()
		$( ".board" ).append( dupSalmon )
		boardArray.push( "salmon" )
		boardNodes = $( ".board section" )
	}
} )

$( ".tuna" ).on( "click", function () {
	if ( isClickable ) {	
		var dupTuna = ingredientsArray[3].cloneNode()
		$( ".board" ).append( dupTuna )
		boardArray.push( "tuna" )
		boardNodes = $( ".board section" )
	}
} )

$( ".yellowtail" ).on( "click", function () {
	if ( isClickable ) {	
		var dupYellowtail = ingredientsArray[4].cloneNode()
		$( ".board" ).append( dupYellowtail )
		boardArray.push( "yellowtail" )
		boardNodes = $( ".board section" )
	}
} )

$( ".redSnapper" ).on( "click", function () {
	if ( isClickable ) {
		var dupUni = ingredientsArray[5].cloneNode()
		$( ".board" ).append( dupUni )
		boardArray.push( "redSnapper" )
		boardNodes = $( ".board section" )
	}
} )

$( ".mackerel" ).on( "click", function () {
	if ( isClickable ) {
		var dupMackerel = ingredientsArray[6].cloneNode()
		$( ".board" ).append( dupMackerel )
		boardArray.push(  "mackerel" )
		boardNodes = $( ".board section" )
	}
} )

$( ".halibut" ).on( "click", function () {
	if ( isClickable ) {
		var dupHalibut = ingredientsArray[7].cloneNode()
		$( ".board" ).append( dupHalibut )
		boardArray.push( "halibut" )
		boardNodes = $( ".board section" )
	}
} )

$( ".shrimp" ).on( "click", function () {
	if ( isClickable ) {	
		var dupShrimp = ingredientsArray[8].cloneNode()
		$( ".board" ).append( dupShrimp )
		boardArray.push( "shrimp" )
		boardNodes = $( ".board section" )
	}
} )

$( ".crab" ).on( "click", function () {
	if ( isClickable ) {	
		var dupCrab = ingredientsArray[9].cloneNode()
		$( ".board" ).append( dupCrab )
		boardArray.push( "crab" )
		boardNodes = $( ".board section" )
	}
} )

$( ".lobster" ).on( "click", function () {
	if ( isClickable ) {	
		var dupLobster = ingredientsArray[10].cloneNode()
		$( ".board" ).append( dupLobster )
		boardArray.push( "lobster" )
		boardNodes = $( ".board section" )
	}
} )

$( ".octopus" ).on( "click", function () {
	if ( isClickable ) {
		var dupOctopus = ingredientsArray[11].cloneNode()
		$( ".board" ).append( dupOctopus )
		boardArray.push( "octopus" )
		boardNodes = $( ".board section" )
	}
} )

$( ".squid" ).on( "click", function () {
	if ( isClickable ) {
		var dupSquids = ingredientsArray[12].cloneNode()
		$( ".board" ).append( dupSquids )
		boardArray.push( "squid" )
		boardNodes = $( ".board section" )
	}
} )

$( ".eel" ).on( "click", function () {
	if ( isClickable ) {
		var dupEel = ingredientsArray[13].cloneNode()
		$( ".board" ).append( dupEel )
		boardArray.push( "eel" )
		boardNodes = $( ".board section" )
	}
} )

$( ".uni" ).on( "click", function () {
	if ( isClickable ) {
		var dupUni = ingredientsArray[14].cloneNode()
		$( ".board" ).append( dupUni )
		boardArray.push( "uni" )
		boardNodes = $( ".board section" )
	}
} )

$( ".scallop" ).on( "click", function () {
	if ( isClickable ) {
		var dupScallop = ingredientsArray[15].cloneNode()
		$( ".board" ).append( dupScallop )
		boardArray.push( "scallop" )
		boardNodes = $( ".board section" )
	}
} )

$( ".abalone" ).on( "click", function () {
	if ( isClickable ) {
		var dupAbalone = ingredientsArray[16].cloneNode()
		$( ".board" ).append( dupAbalone )
		boardArray.push( "abalone" )
		boardNodes = $( ".board section" )
	}
} )

$( ".roe" ).on( "click", function () {
	if ( isClickable ) {
		var dupRoe = ingredientsArray[17].cloneNode()
		$( ".board" ).append( dupRoe )
		boardArray.push( "roe" )
		boardNodes = $( ".board section" )
	}
} )

$( ".tamagoyaki" ).on( "click", function () {
	if ( isClickable ) {
		var dupTamagoyaki = ingredientsArray[18].cloneNode()
		$( ".board" ).append( dupTamagoyaki )
		boardArray.push( "egg" )
		boardNodes = $( ".board section" )
	}
} )

$( ".vegetables" ).on( "click", function () {
	if ( isClickable ) {
		var dupVegetables = ingredientsArray[19].cloneNode()
		$( ".board" ).append( dupVegetables )
		boardArray.push( "vegetables" )
		boardNodes = $( ".board section" )
	}
} )

// Trash
$( ".trash" ).on( "click", function () {
	if ( isClickable ) {
		$( ".board" ).html( "" )
		boardNodes = []
		boardArray = []
		score = score - 10
		countDollars()
	}
} )

function clear () {
	$( ".board" ).html( "" )
	boardNodes = []
	boardArray = []
}

// Reset
$( ".reset" ).on( "click", function () {
	location.reload()
} )

//Ticket Picker
document.querySelector( ".ticketOne" ).addEventListener( "click", function () {
	if ( isClickable ) {
		if ( boardArray.toString() === sushiArray[ticketOneRN].ingredients.toString() ) {
			score = score + sushiArray[ticketOneRN].price
			countDollars()
			clear()
			winCelebration()
		}
	}
} )
document.querySelector( ".ticketTwo" ).addEventListener( "click", function () {
	if ( isClickable ) {
		if ( boardArray.toString() === sushiArray[ticketTwoRN].ingredients.toString() ) {
			score = score + sushiArray[ticketTwoRN].price
			countDollars()
			clear()
			winCelebration()
		}
	}
} )
document.querySelector( ".ticketThree" ).addEventListener( "click", function () {
	if ( isClickable ) {
		if ( boardArray.toString() === sushiArray[ticketThreeRN].ingredients.toString() ) {
			score = score + sushiArray[ticketThreeRN].price
			countDollars()
			clear()
			winCelebration()
		}
	}
} )
document.querySelector( ".ticketFour" ).addEventListener( "click", function () {
	if ( isClickable ) {
		if ( boardArray.toString() === sushiArray[ticketFourRN].ingredients.toString() ) {
			score = score + sushiArray[ticketFourRN].price
			countDollars()
			clear()
			winCelebration()
		}
	}
} )
document.querySelector( ".ticketFive" ).addEventListener( "click", function () {
	if ( isClickable ) {
		if ( boardArray.toString() === sushiArray[ticketFiveRN].ingredients.toString() ) {
			score = score + sushiArray[ticketFiveRN].price
			countDollars()
			clear()
			winCelebration()
		}
	}
} )

// Celebrate Good Times, Come On.. Duh Duh Duh Duh 
function winCelebration () {
	pauseClip()
	playParty()
	winRN = ( Math.floor( ( Math.random() * gifArray.length ) ) )
	$( ".orders section" ).html( " " )
	$( ".orders section" ).css( { "background-image": "url(../gifs/" + gifArray[ winRN ] + ".gif)" } )

	if ( gifArray.length === 0 ) {
		sushiArray.push( "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen" )
	} else {
		gifArray.splice( winRN, 1 )
	}

	setTimeout(function(){
		generateTicketOne()
		generateTicketTwo()
		generateTicketThree()
		generateTicketFour()
		generateTicketFive()
		pauseParty()
		playClip()
	}, 2000);
}

// Rules
$( ".rules" ).on( "click", function () {
	$( ".info" ).css( { "display": "inline" } )
} )

$( ".info" ).on( "click", function () {
	$( ".info" ).css( { "display": "none" } )
} )

// Generate + Pick Tickets
function generateTicketOne () { 
	ticketOneRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	$( ".ticketOne" ).html( "<h2>" + sushiArray[ ticketOneRN ].name + "</h2>" )	
	$( ".ticketOne" ).css( { "background-image": "url(../images" + sushiArray[ ticketOneRN ].img + ")" } )
}

function generateTicketTwo () { 
	ticketTwoRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	$( ".ticketTwo" ).html( "<h2>" + sushiArray[ ticketTwoRN ].name + "</h2>" )	
	$( ".ticketTwo" ).css( { "background-image": "url(../images" + sushiArray[ ticketTwoRN ].img + ")" } )	
}

function generateTicketThree () {
	ticketThreeRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	$( ".ticketThree" ).html( "<h2>" + sushiArray[ ticketThreeRN ].name + "</h2>" )
	$( ".ticketThree" ).css( { "background-image": "url(../images" + sushiArray[ ticketThreeRN ].img + ")" } )		
}

function generateTicketFour () { 
	ticketFourRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	$( ".ticketFour" ).html( "<h2>" + sushiArray[ ticketFourRN ].name + "</h2>" )
	$( ".ticketFour" ).css( { "background-image": "url(../images" + sushiArray[ ticketFourRN ].img + ")" } )	
}

function generateTicketFive () { 
	ticketFiveRN = ( Math.floor( ( Math.random() * sushiArray.length ) ) )
	$( ".ticketFive" ).html( "<h2>" + sushiArray[ ticketFiveRN ].name + "</h2>" )
	$( ".ticketFive" ).css( { "background-image": "url(../images" + sushiArray[ ticketFiveRN ].img + ")" } )	
}

// Sushi
function Item (name, ingredients, price) {
	this.name = name
	this.img = "../images/placeholderBack.png"
	this.ingredients = ingredients
	this.price = price
}

var ikuraGukan = new Item( "Ikura Gukan Maki", [ "rice", "nori", "roe" ], 6 )
var sakeNigiri = new Item( "Sake Nigiri", [ "rice", "salmon" ], 6 )
var kappaMaki = new Item( "Kappa Maki", [ "rice", "nori", "vegetables" ], 6 )	
var maguroNigiri = new Item( "Maguro Nigiri", [ "rice", "tuna" ], 6 )	
var uniGukan = new Item( "Uni Gukan", [ "rice", "uni" ], 6 )
var toroNigiri = new Item( "Toro Nigiri", [ "rice", "tuna" ], 6 )	
var hamachiMaki = new Item( "Hamachi Maki", [ "rice", "nori", "yellowtail" ], 6 )	
var ebiNigiri = new Item( "Ebi Nigiri", [ "rice", "shrimp" ], 6 )	
var amaebiNigiri = new Item( "Amaebi Nigiri", [ "rice", "shrimp" ], 6 )	
var tamagoyakiNigiri = new Item( "Tamagoyaki Nigiri", [ "rice", "egg" ], 6 )	
var ikaNigiri = new Item( "Ika Nigiri", [ "rice", "squid" ], 6 )		
var anagoNigiri = new Item( "Anago Nigiri", [ "rice", "eel" ], 6 )	
var taiNigiri = new Item( "Tai Nigiri", [ "rice", "redSnapper" ], 6 )	
var ajiNigiri = new Item( "Aji Nigiri", [ "rice", "mackerel" ], 6 )	
var takoNigiri = new Item( "tako Nigiri", [ "rice", "octopus" ], 6 )	
var tekkaMaki = new Item( "tekka Maki", [ "rice", "nori", "tuna" ], 6 )	
var sabaNigiri = new Item( "Saba Nigiri", [ "rice", "mackerel" ], 6 )	
var californiaRoll = new Item( "California Roll", [ "rice", "nori", "vegetables", "crab" ], 6 )	
var futoMaki = new Item( "Futo Maki", [ "rice", "nori", "egg", "vegetables" ], 6 )		
var chutoroNigiri = new Item( "Chutoro Nigiri", [ "rice", "tuna" ], 6 )	
var iseebiNigiri = new Item( "Iseebi Nigiri", [ "rice", "lobster" ], 6 )	
var tsunamayoMaki = new Item( "Tsunamayo Maki", [ "rice", "nori", "vegetables", "tuna" ], 6 )	
var buriNigiri = new Item( "Buri Nigiri", [ "rice", "yellowtail" ], 6 )	
var uraMaki = new Item( "Ura Maki", [ "rice", "nori", "vegetables" ], 6 )	
var matsubaganiNigiri = new Item( "Matsubagani Nigiri", [ "rice", "crab" ], 6 )		
var tobikoNigiri = new Item( "Tobiko Nigiri", [ "rice", "nori", "roe" ], 6 )		
var masagoNigiri = new Item( "Masago Nigiri", [ "rice", "nori", "roe" ], 6 )	
var katsuoNigiri = new Item( "Katsuo Nigiri", [ "rice", "tuna" ], 6 )		
var temarizushi = new Item( "Temarizushi", [ "rice", "nori" ], 6 )	
var ohyouNigiri = new Item( "Ohyou Nigiri", [ "rice", "halibut" ], 6 )	
var akamiNigiri = new Item( "Akami Nigiri", [ "rice", "tuna" ], 6 )		
var kanpyoMaki = new Item( "Kanpyo Maki", [ "rice", "nori", "vegetables" ], 6 )
var hotateNigiri = new Item( "Hotate Nigiri", [ "rice", "scallop" ], 6 )

var sushiArray = [ ikuraGukan, sakeNigiri, kappaMaki, maguroNigiri, uniGukan, toroNigiri, hamachiMaki, ebiNigiri, amaebiNigiri, tamagoyakiNigiri, ikaNigiri, anagoNigiri, taiNigiri, ajiNigiri, takoNigiri, tekkaMaki, sabaNigiri, californiaRoll, futoMaki, chutoroNigiri, iseebiNigiri, tsunamayoMaki, buriNigiri, uraMaki, matsubaganiNigiri, tobikoNigiri, masagoNigiri, katsuoNigiri, temarizushi, ohyouNigiri, akamiNigiri, kanpyoMaki ]

// Gifs
var gifArray = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen" ]
