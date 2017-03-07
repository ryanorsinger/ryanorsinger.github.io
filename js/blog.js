"use strict";

// In the problem solving process, outline the main steps/sequences of stuff we need to do.

// step 1 is make sure we can send an AJAX request to the source data
// make an AJAX request to /data/blog.json to get the data
// console.log that data
	// 1. send an AJAX get request to /data/blog.json => google "how to send ajax GET request in jQuery"
		// where are we sending our request to get the data from? 
		// send the GET request there
	// 2. always define the function that the .fail method calls => "how to define a .fail method in jQuery"
	// 3. always define the function that the .done method calls =>
	// 3.5 have .fail/.done console.log "success" or "error"
	// 4. start with both .fail and .done only console.logging the data they get

	var url = "/data/blog.json";

	var request = $.get(url);

	request.fail(function(data){
		console.log(data);
	});

	request.done(function(data) {
		console.log(data);

		var post = data[0];

		var htmlString = "";
		
		data.forEach(function(post) {
			htmlString += "<article class='container'>";
			htmlString += "<h1>" + post.title + "</h1>";
			htmlString += "<p>" + post.content + "</p>";
			htmlString += "<p>published at: " + post.date + "</p>";
			htmlString += "<p>categories: <button>" + post.categories + "</button></p>";
			htmlString += "</article>";

		});
		
		$("#posts").html(htmlString);


	});



// step 2 is decide what HTML elements the data should be
// the blog.json data has an array of blog posts
// each blog post is represented as an object
// the object's properties are:
// title is a string - make the title an h2 element
// content is a string - make the content a p tag
// categories is an array of strings - make each category string into a button element
// date is a string - make this a p tag

// step 3 is to get the contents of just ONE blog post into the HTML of the div with id="posts"
// get each piece of data in the right HTML tag
// add any styling (add appropriate bootstrap class names to HTML elements)

// step 4 is to get all the blog posts into the HTML
// which means we need to iterate across the array and use JS to write HTML



// step 5 add a button that refreshes the data without reloading the entire browser/page
// to test this, we'll add new blog content (even if it's lorem ipsum) to blog.json
// and click the refresh button without reloading the page

// step 6 for each category of each blog post, write the category's string inside a button element

// step 7, add a .click to the title so that by clicking the title it shows the content of the post

// do Zach's JS drills
