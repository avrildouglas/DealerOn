/* JavaScript Document with JSON data
 Author: Avril Douglas 
 February 28, 2018 */


 const geniusData = [
        {
            "id": 1,
            "name": "Nikola Tesla",
            "quote": "The present is theirs; the future, for which I really worked, is mine.",
            "birthday": "July 10, 1856",
	    "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 2,
            "name": "Albert Einstein",
            "quote": "Imagination is more important than knowledge.",
            "birthday": "March 14, 1879",
            "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 3,
            "name": "Isaac Newton",
            "quote": "If I have seen further than others, it is by standing upon the shoulders of giants.",
            "birthday": "December 25, 1642",
            "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 4,
            "name": "Galileo Galilei",
            "quote": "You cannot teach a man anything; you can only help him find it within himself.",
            "birthday": "February 15, 1564",
            "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 5,
            "name": "Marie Curie",
            "quote": "Be less curious about people and more curious about ideas.",
            "birthday": "November 7, 1867",
            "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 6,
            "name": "Charles Darwin",
            "quote": "A man who dares to waste one hour of time has not discovered the value of life.",
            "birthday": "February 12, 1809",
            "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 7,
            "name": "Stephen Hawking",
            "quote": "Intelligence is the ability to adapt to change.",
            "birthday": "January 8, 1942",
            "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 8,
            "name": "Johannes Kepler",
            "quote": "Nature uses as little as possible of anything.",
            "birthday": "December 27, 1571",
            "image_url": "http://lorempixel.com/300/150/"
        },
        {
            "id": 9,
            "name": "Thomas Edison",
            "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "birthday": "February 11, 1847",
            "image_url": "http://lorempixel.com/300/150/"
        }
    ];

/* function returns a new array of elements and uses a template literal */

function geniusTemplate(genius) {
	return `
	<div class="person">
		<img class="genius-image" src="${genius.image_url}">
		<h2 class="genius-name">${genius.name}</h2>
		<p><strong>ID:</strong> ${genius.id}</p>
		<p><strong>Birthday:</strong> ${genius.birthday}</p>
		<p><strong>Quote:</strong> ${genius.quote}</p>
	</div>
	`
}


/* this entire block of code uses a template literal (a string of text) that allows embedded expressions;
- length property shows how many elements are in the array;
- map method passes along the current item in the array that it's looping through into the function to generate a new array */

	document.getElementById("app").innerHTML = `
	<h1 class="app-title">${geniusData.length} Geniuses</h1>
	${geniusData.map(geniusTemplate).join('')}
	<p class="footer">These ${geniusData.length} geniuses were added recently. Check back soon for updates.</p>
	`



