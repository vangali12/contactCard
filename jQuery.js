function createCardFront(obj, num) {
	$(".cardSide").prepend("<div class=\"card\">" + 
			"<h1>" + obj[num]["firstName"] + " " + obj[num]["lastName"] + "</h1>" +
			"<h2>Click for description!</h2>" +
			"<h1 class=\"des\"></h1>" +
			"<h2 class=\"des\">" + obj[num]['description'] + "</h2>" +
		"</div>");
}


$(document).ready(function() {
	var num = 0;
	var contacts = [];

	$("form").submit(function() {
		event.preventDefault();
		num++; //set indeces of contacts array
		var contact = {}; // create contact object
		var obj = $("form").serializeArray();
		for (k in obj) { // iterate through serialized array and pull out important values
			contact[obj[k]['name']] = obj[k]['value'];
		}
		contacts[num] = contact; // put new contact object into contacts array
		console.log(contacts);

		createCardFront(contacts, num);

		$("input").val("");
		$("textarea").val("");
	});

	$(document).on("click", ".card", function() {
		$(this).children("h2").toggle();
		$(this).children("h1").toggle();
	});


});