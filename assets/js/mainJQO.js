"use strict"









// Sushi
function Sushi (name, ingredients, price) {
	this.name = name
	this.img = "../images/placeholderBack.png"
	this.ingredients = ingredients
	this.price = price
}

var ikuraGukan = new Sushi( "Ikura Gukan Maki", [ "rice", "nori", "roe" ], 6 )
var sakeNigiri = new Sushi( "Sake Nigiri", [ "rice", "salmon" ], 6 )
var kappaMaki = new Sushi( "Kappa Maki", [ "rice", "nori", "vegetables" ], 6 )	
var maguroNigiri = new Sushi( "Maguro Nigiri", [ "rice", "tuna" ], 6 )	
var uniGukan = new Sushi( "Uni Gukan", [ "rice", "uni" ], 6 )
var toroNigiri = new Sushi( "Toro Nigiri", [ "rice", "tuna" ], 6 )	
var hamachiMaki = new Sushi( "Hamachi Maki", [ "rice", "nori", "yellowtail" ], 6 )	
var ebiNigiri = new Sushi( "Ebi Nigiri", [ "rice", "shrimp" ], 6 )	
var amaebiNigiri = new Sushi( "Amaebi Nigiri", [ "rice", "shrimp" ], 6 )	
var tamagoyakiNigiri = new Sushi( "Tamagoyaki Nigiri", [ "rice", "egg" ], 6 )	
var ikaNigiri = new Sushi( "Ika Nigiri", [ "rice", "squid" ], 6 )		
var anagoNigiri = new Sushi( "Anago Nigiri", [ "rice", "eel" ], 6 )	
var taiNigiri = new Sushi( "Tai Nigiri", [ "rice", "redSnapper" ], 6 )	
var ajiNigiri = new Sushi( "Aji Nigiri", [ "rice", "mackerel" ], 6 )	
var takoNigiri = new Sushi( "tako Nigiri", [ "rice", "octopus" ], 6 )	
var tekkaMaki = new Sushi( "tekka Maki", [ "rice", "nori", "tuna" ], 6 )	
var sabaNigiri = new Sushi( "Saba Nigiri", [ "rice", "mackerel" ], 6 )	
var californiaRoll = new Sushi( "California Roll", [ "rice", "nori", "vegetables", "crab" ], 6 )	
var futoMaki = new Sushi( "Futo Maki", [ "rice", "nori", "egg", "vegetables" ], 6 )		
var chutoroNigiri = new Sushi( "Chutoro Nigiri", [ "rice", "tuna" ], 6 )	
var iseebiNigiri = new Sushi( "Iseebi Nigiri", [ "rice", "lobster" ], 6 )	
var tsunamayoMaki = new Sushi( "Tsunamayo Maki", [ "rice", "nori", "vegetables", "tuna" ], 6 )	
var buriNigiri = new Sushi( "Buri Nigiri", [ "rice", "yellowtail" ], 6 )	
var uraMaki = new Sushi( "Ura Maki", [ "rice", "nori", "vegetables" ], 6 )	
var matsubaganiNigiri = new Sushi( "Matsubagani Nigiri", [ "rice", "crab" ], 6 )		
var tobikoNigiri = new Sushi( "Tobiko Nigiri", [ "rice", "nori", "roe" ], 6 )		
var masagoNigiri = new Sushi( "Masago Nigiri", [ "rice", "nori", "roe" ], 6 )	
var katsuoNigiri = new Sushi( "Katsuo Nigiri", [ "rice", "tuna" ], 6 )		
var temarizushi = new Sushi( "Temarizushi", [ "rice", "nori" ], 6 )	
var ohyouNigiri = new Sushi( "Ohyou Nigiri", [ "rice", "halibut" ], 6 )	
var akamiNigiri = new Sushi( "Akami Nigiri", [ "rice", "tuna" ], 6 )		
var kanpyoMaki = new Sushi( "Kanpyo Maki", [ "rice", "nori", "vegetables" ], 6 )
var hotateNigiri = new Sushi( "Hotate Nigiri", [ "rice", "scallop" ], 6 )

// Sushi Array
var sushiArray = [ ikuraGukan, sakeNigiri, kappaMaki, maguroNigiri, uniGukan, toroNigiri, hamachiMaki, ebiNigiri, amaebiNigiri, tamagoyakiNigiri, ikaNigiri, anagoNigiri, taiNigiri, ajiNigiri, takoNigiri, tekkaMaki, sabaNigiri, californiaRoll, futoMaki, chutoroNigiri, iseebiNigiri, tsunamayoMaki, buriNigiri, uraMaki, matsubaganiNigiri, tobikoNigiri, masagoNigiri, katsuoNigiri, temarizushi, ohyouNigiri, akamiNigiri, kanpyoMaki ]

// Gif Array
var gifArray = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen" ]
