// Set up elements //

var body = document.body;
var h1 = document.getElementsByTagName("h1")[0];
var h2 = document.getElementsByTagName("h2")[0];
var nav = document.getElementsByTagName("li")[0];
var small = document.getElementsByTagName("small")[0];

// Grab styles //

var bodyStyle = window.getComputedStyle(body);
var h1Style = window.getComputedStyle(h1);
var h2Style = window.getComputedStyle(h2);
var navStyle = window.getComputedStyle(nav);
var smallStyle = window.getComputedStyle(small);

// Get properties //

var bodyBackgroundColor = bodyStyle.getPropertyValue("background-color");
var fontColor = bodyStyle.getPropertyValue("color");
var bodySize = bodyStyle.getPropertyValue("font-size");
var h1Size = h1Style.getPropertyValue("font-size");
var h2Size = h2Style.getPropertyValue("font-size");
var navSize = navStyle.getPropertyValue("font-size");
var smallSize = smallStyle.getPropertyValue("font-size");
var bodyFont = bodyStyle.getPropertyValue("font-family");
var h1Font = h1Style.getPropertyValue("font-family");
var h2Font = h2Style.getPropertyValue("font-family");
var navFont = navStyle.getPropertyValue("font-family");
var smallFont = smallStyle.getPropertyValue("font-family");

// Put in document //

var outputData = function(element, property){
	var e = document.getElementById(element);
	e.innerHTML = property;
}

outputData("bodyBackgroundColor", bodyBackgroundColor);
outputData("fontColor",fontColor);
outputData("bodySize", bodySize);
outputData("h1Size", h1Size);
outputData("h2Size", h2Size);
outputData("navSize", navSize);
outputData("smallSize", smallSize);
outputData("bodyFont", bodyFont);
outputData("h1Font", h1Font);
outputData("h2Font", h2Font);
outputData("navFont", navFont);
outputData("smallFont", smallFont);







