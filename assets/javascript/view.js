// This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

 // On Page Load
$(document).ready(function(){

	// input whatever needs to happen when the page loads
	controller.termButtonClicked();
	//console.log(badLibs);
	//console.log(badLibs.badLibs1[0].searchedTerms[0].term);
	//view.displayTermInputs();
	controller.loopTermsToSearchForInput();

});

// view object for manipulation of the view with JS and jQuery
var view = {

	displayTermInputs: (term) => {
		var inputForm = $('<form>').addClass('user-inputs')
		var inputHtml = "<label for='term-input'>Enter a " + term + "</label>" +
						"<input type='text' id='word-input'>" +
						"<!-- Submit Button -->" +
	    				"<input class='input-term-button' type='submit' value='Submit " + term + "'>"

	    $('.user-term-inputs').empty()
	    inputForm.html(inputHtml)
	    $('.user-term-inputs').append(inputForm)
	},

	displayBadLib: () => {
		$('.user-term-inputs').hide()
		var badLibSentence = badLibs.badLibs1[0].sentence
		var gifs = badLibs.badLibs1[0].searchedTerms[0].gif
		var term = badLibs.badLibs1[0].searchedTerms[0].term
		console.log(gifs)
		$('.bad-lib-display').append(badLibSentence);
		for (var i = 0; i < searchTermCounter-1; i++) {
			var gifImage = $('<img>')
			//$('.term').attr('id', 'term'+[i])
			gifImage.attr("src", gifs[i].images.fixed_height.url);
			gifImage.text(term[i])
			$('.term'+i).html(gifImage);
			//console.log(term)
			//$('.bad-lib-display').append(gifImage);
			//console.log(gifImage)
			//$('.bad-lib-display').html(badLibSentence);
		}
		
		
	}


}