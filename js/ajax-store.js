"use strict";

function addToolsToTable(tools) {
	var htmlString = "";
	tools.forEach(function(tool) {
		htmlString += "<tr>";
		htmlString += "<td>" + tool.title + "</td>";
		htmlString += "<td>" + tool.quantity + "</td>";
		htmlString += "<td>" + tool.price + "</td>";
		htmlString += "<td>";

		tool.categories.forEach(function(category) {
			htmlString += "<button>" + category + "</button> ";
		});

		htmlString += "</td>"

		htmlString += "</tr>";
	});
	
	$("#insertProducts").append(htmlString);
}

function makeAJAXRequest() {
	var url = "/data/inventory.json";

	// GET or POST request
	// this makes the request and assings the jQuery request object to the variable.
	var request = $.get(url);

	// .fail() is the callback function that runs if there was something wrong with the request or data
	request.fail(function(data) {
		console.log(data);
	});

	// .done() is the callback function that runs if the response is good to go.
	request.done(function(data, status) {
		addToolsToTable(data);
	});
}

$("#refresh").click(function() {
	$("#insertProducts").html("");
	makeAJAXRequest();
});

// load data on page load
makeAJAXRequest();
