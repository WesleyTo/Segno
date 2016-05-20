/*=================
   INITIAL SETUP
=================*/
$(document).ready(function(){
	$("body").nodoubletapzoom();
	var chords = ["A", "B", "C", "D", "E", "F", "G", "Ab", "Bb", "Db", "Eb", "Gb"];
	var variations = ['', 'm', 'dim'];
	$(chords).each(function(i, chord){
		$(variations).each(function(j, variation){
			$.ajax({url: "/chords/mp3/" + chord + variation + ".mp3"});
			$.ajax({url: "/chords/ogg/" + chord + variation + ".ogg"});
		});
	});
});

/*=================
	SPLASH PAGE
=================*/
$(document).on('pageinit','#splash',function(){
	$(".title").hide();
	$("#symbols").hide();
	var symbols = ["&#9833;", "&#9834;", "&#9835;", "&#9836;", "&#9833;", "&#9834;", "&#9835;", "&#9836;", "&#9833;", "&#9834;", "&#9835;", "&#9836;", "&#9833;", "&#9834;", "&#9835;", "&#9836;", "&#9837;", "&#9838;", "&#9839;"];
	var numSymbols = Math.max($(window).height(), $(window).width()) / 20;
	for (var i = 0; i < numSymbols; i++){	// create symbols and add to splash
		var index = Math.floor(Math.random() * 19);
		var seed = Math.random();
		var opacity = 0.17 + Math.random()/3;
		var top = Math.floor(Math.random() * 150) - 75;
		var left = Math.floor(Math.random() * 110) - 5;
		var newSymbol = $("<div class='note' style='" + "font-size: " + Math.floor(10*seed) + 'em; color: rgba(0, 0, 0, ' + opacity + '); position: fixed; top: ' + top + '%; left: ' + left + "%;'>" + symbols[index] + "</div>");
		$("#symbols").append(newSymbol);
	}
	$("#symbols").fadeIn("slow");			// show the elements
	$(".title").fadeIn();
	setTimeout(function(){					// change Title color
		$(".title").css("color", "SteelBlue");
	}, 500);
	$(".xslogo").each(function(i, logo){	// delay-spin the Segno images
		setTimeout(function(){
			$(logo).css('visibility','visible').addClass("spinY").removeClass("spunY");
		}, (500 * (i+1)));
	});
	setTimeout(function(){					// change musical symbol positions
		$(".note").each(function(i, note){
			var offset = Math.floor(Math.random() * 100);
			var curr = Math.floor(parseFloat($(note).css("top")));
			var newTop = curr + offset;
			var opacity = 0.17 + Math.random()/3;
			$(note).css("top", newTop+"vh").css("opacity", opacity);
		});
	}, 100);
	setTimeout(function(){			// clear notes and go to home page
        $.mobile.changePage("#home", "fade");
		$("#notes").empty();
    }, 5000);
});

/*=================
	HOME PAGE
=================*/
$(document).on("pageinit", "#home", function(){
	$(".ui-slider").find(".ui-btn-text").html('75').css("font-size", ('2.1875vh'));
	$("#stop").button("disable");			// Disable STOP button	
	$("#clear").button("enable");			// Enable CLEAR button
	clearTitle();							// clears title on refresh
	$("#play").on('click', function(){			// Handle PLAY button presses
		if ($(".chordBlock").size() > 0){
			$(this).button("disable");
			var player = $("#player");
			var counter = 0;
			var chords = $(".chordBlock").map(function(){
				var chord = $(this).data("type");
				if (chord == "Rest"){
					return $(this).data("type");
				}
				else{
					return $(this).data("type") + $(this).data("mode");;
				}
			}).get();
			startPlayback(player, chords, counter);
			counter++;
			player.on('ended', function() { // RECURSIVELY PLAY NEXT CHORD
				if (counter < chords.length){
					startPlayback(player, chords, counter);
					counter++;
				}
				else{
					stopPlayback();
				}
			});
		}
	});
	$("#stop").on('click', function(){		// Handle STOP button presses
		stopPlayback();
	});
	$("#clear").on('click', function(){		// Handle CLEAR button presses
		stopPlayback();
		clearTitle();
		clearChords();
	});
	$("#volume").change(function(event){// Handle volume changes
		setVolume();
	});
	$("#more").on('click', function(){		// Handle CLEAR button presses
		addChord("C");
	});
	$("#chords").on('taphold', '.chordBlock', function(){
		$(this).remove();
	});
	$('#chords').on( "tap", ".chordBlock", function( event ) {
		var currTone = $(this).data("type");
		var newTone = nextType(currTone, true);
		$(this).data("type", newTone);	
		if (newTone == "Rest"){
			$(this).html(chordEntity(newTone));
		}
		else{
			$(this).html(chordEntity(newTone + $(this).data("mode")));
		}
    });
	$('#chords').on("swiperight", ".chordBlock", function( event ) {
		var newMode = nextMode($(this).data("mode"), true);
		$(this).data("mode", newMode);
		var currType = $(this).data("type");
		if (currType == "Rest"){
			$(this).html(chordEntity($(this).data("type")));
		}
		else{
			$(this).html(chordEntity($(this).data("type") + newMode));
		}
    });
	$('#chords').on("swipeleft", ".chordBlock", function( event ) {
		var newMode = nextMode($(this).data("mode"), false);
		var currType = $(this).data("type");
		if (currType == "Rest"){
			$(this).html(chordEntity($(this).data("type")));
		}
		else{
			$(this).html(chordEntity($(this).data("type") + newMode));
		}
    });
});

/*=================
	SETTINGS PAGE
=================*/
$(document).on('pageinit', '#settings', function() {
	$("#loadExample").on('click', function(){	// Handle EXAMPLE button presses
		$.mobile.changePage("#home", "fade");
		loadExample();
	});
});

/*=================
	CREDITS PAGE
=================*/
$(document).on('pagebeforeshow', '#info', function() {
	// Hide title elements
	$("#phonetic1").css('visibility','hidden');
	$("#phonetic2").css('visibility','hidden');
	$("#directions").css('visibility','hidden');
	$("#accreditation").css('visibility','hidden');
	// Show title elements with cascading delay
	$("#pageTitle").css('visibility','hidden').css('visibility','visible').fadeIn("slow");
 	setTimeout(function(){
		$("#phonetic1").css('visibility','visible').hide().fadeIn("slow");
	}, 500);
	setTimeout(function(){
		$("#phonetic2").css('visibility','visible').hide().fadeIn("slow");
	}, 1000);
	setTimeout(function(){
		$("#directions").css('visibility','visible').hide().fadeIn("slow");
	}, 1500);
	setTimeout(function(){
		$("#accreditation").css('visibility','visible').hide().fadeIn("slow");
	}, 2000);
});


/*=================
	  PLAYBACK
=================*/
function startPlayback(player, chords, counter){
	$("#stop").button("enable");
	var chordBlocks = $(".chordBlock");
	/* LOAD AUDIO */
	$("#mp3_src").attr("src", "chords/mp3/" + chords[counter] + ".mp3");
	$("#ogg_src").attr("src", "chords/ogg/" + chords[counter] + ".ogg");
	player.trigger("load");
	/* HIGHLIGHT CHORD */
	try{$(chordBlocks[counter-1]).toggleClass("currentChord");}
	catch(err){}
	$(chordBlocks[counter]).toggleClass("currentChord");
	$(chordBlocks[counter]).scrollView(Math.min($(window).height(), $(window).height())/5);
	/* PLAY AUDIO */
	player.oncanplaythrough = player.trigger("play");
}
function stopPlayback(){
	$("#player").trigger("stop");
	$("#playerContainer").empty();
	$("#playerContainer").append("<audio id='player'><source id='mp3_src' src='chords/mp3/Rest.mp3' type='audio/mp3'><source id='ogg_src' src='chords/ogg/Rest.ogg' type='audio/ogg'>Your Device Does Not Support The Audio Element</audio>");
	setVolume();
	$(".chordBlock").removeClass("currentChord");
	$("#play").button("enable");
	$("#stop").button("disable");
}


/*=================
	  CHORDS
=================*/
function clearChords(){
	/* CLEAR THE CHORD DISPLAY */
	$(".chordBlock").each(function(i, chordBlock){
		$(chordBlock).remove();
	});
	showDirections();
}
function loadChords(chords){
	/* LOAD MULTIPLE CHORDS INTO CHORD DISPLAY */
	clearChords();
	$.each(chords, function(i, chord){
		addChord(chord)
	});
}
function addChord(chord){
	/* ADD A SINGLE CHORD INTO CHORD DISPLAY */
	var tone = chord.replace('dim', '').replace('m', '');
	var modality = chord.replace(tone, '');
	var sharps = {'A#':'Bb', 'C#':'Db', 'D#':'Eb', 'F#':'Gb', 'G#':'Ab'}
	var chordType = sharps[tone];
	if (chordType === undefined){var chordType = tone;}
	var newChord = "<div class='chordBlock' data-mode='" + modality + "' data-type='" + chordType + "'>" + chord + "</div>";
	$(newChord).insertBefore("#more").hide().fadeIn(100);
	hideDirections();
}
function nextType(type, next){
	/* RETURNS THE NEXT/PREV NOTE, SAME MODALITY */
	var change = 1;
	if (!next){ change = -1; }
	var chords = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'Rest'];
	var sharps = {'A#':'Bb', 'C#':'Db', 'D#':'Eb', 'F#':'Gb', 'G#':'Ab'};
	var baseTone = sharps[type];
	if (baseTone === undefined){
		var baseTone = type;
	}
	var index = $.inArray(baseTone, chords);
	index = (index + change + $(chords).size()) % $(chords).size();
	return chords[index];
}
function chordEntity(chord){
	/* REPLACE b WITH flat SYMBOL */
	var s = chord.replace("b", "&#9837;");
	return $('<textarea />').html(s).text();;
}
function nextMode(mode, next){
	/* RETURNS THE SAME NOTE WITH A DIFFERENT MODALITY */
	var change = 1;
	if (!next){ change = -1; }
	var modalities = ['', 'm', 'dim'];
	var index = $.inArray(mode, modalities);
	index = (index + change + $(modalities).size()) % $(modalities).size();
	return modalities[index];
}

/*=================
		MISC
=================*/
function setVolume(){
	/* TRACK VOLUME SLIDER AND ADJUST PLAYER */
	var vol = $("#volume").attr("value");
	$(".ui-slider").find(".ui-btn-text").html(vol).css("font-size", (1.25 + 1.25 * vol/100) + 'vh');
	$("#player").prop("volume", vol/100);
}
function hideDirections(){
	$("#directionsOverlay").fadeOut();
}
function showDirections(){
	$("#directionsOverlay").fadeIn();
}
function loadExample(){
	/* LOAD AN EXAMPLE CHORD PROGRESSION */
	stopPlayback();
	var choice = Math.floor(Math.random() * 7);
	var title = '';
	var chords = [];
	switch (choice) {
		case 0:
			chords = ['C', 'C', 'G', "G", "Am", "Am", "F", "F", "C", "C", "G", "G", "Am", "F", "C", "Rest", 'C', 'C', 'G', "G", "Am", "Am", "F", "F", "C", "C", "G", "G", "Am", "F", "C", "Rest"];
			title = "The Beatles - Let It Be"; break;
		case 1:
			chords = ["G", "G", "D", "D", "C", "C", "C", "C", "G", "G", "D", "D", "C", "C", "C", "C", "G", "G", "D", "D", "Am", "Am", "Am", "Am", "G", "G", "D", "D", "Am", "Am", "Am", "Am"];
			title = "Bob Dylan - Knocking On Heaven's Door"; break;
		case 2:
			chords = ["G", "G", "C", "C", "D", "D", "C", "C", "G", "G", "C", "C", "D", "D", "C", "C", "G", "G", "C", "C", "D", "D", "C", "C", "G", "G", "C", "C", "D", "D", "C", "C"];
			title = "Steve Miller - The Joker";	break;
		case 3:
			chords = ["Em", "Em", "Am", "Am", "D", "D", "G", "G", "Em", "Em", "Am", "Am", "D", "D", "G", "G", "Em", "Em", "Am", "Am", "D", "D", "G", "G", "Em", "Em", "Am", "Am", "D", "D", "G", "G"];
			title = "Weezer - Island In The Sun"; break;
		case 4:
			chords = ["G", "G", "G", "G", "C", "C", "D", "D", "G", "G", "G", "G", "C", "C", "D", "D", "Em", "Em", "D", "D", "C", "C", "G", "G", "Em", "Em", "D", "D", "C", "C", "G", "G", "Em", "Em", "G", "G", "Em", "Em", "G", "G", "Em", "Em", "D", "D", "G", "G", "C", "D"];
			title = "Green Day - Time Of Your life"; break;
		case 5:
			chords = ["D", "A", "Bm", "Gbm", "G", "D", "G", "A", "D", "A", "Bm", "Gbm", "G", "D", "G", "A", "D", "A", "Bm", "Gbm", "G", "D", "G", "A", "D", "A", "Bm", "Gbm", "G", "D", "G", "A"];
			title = "Pachelbel - Canon In D"; break;
		case 6:
			chords = ["G", "D", "Em", "Rest", "Am", "Rest", "C", "Rest", "Em", "Rest", "Rest", "D", "Rest", "Rest", "G", "D", "Em", "Rest", "Am", "Rest", "C", "Rest", "Em", "Rest", "C", "Rest", "D", "Rest", "Rest", "Em", "Em", "Am", "Am", "Em", "Em", "Am", "Am", "C", "G", "Am", "Rest", "C", "Rest", "D", "Rest"];
			title = "Don McLean - American Pie";
	}
	loadChords(chords);
	setTitle(title);
}
function setTitle(title){
	$("#songTitle").attr("value", title);
}
function clearTitle(){
	$("#songTitle").attr("value", "");
}
$.fn.scrollView = function (offsetVal) {
	/* AUTO SCROLL-TO FUNCTION */
	// http://stackoverflow.com/questions/1586341/how-can-i-scroll-to-a-specific-location-on-the-page-using-jquery
	return this.each(function () {
		$('html, body').animate({
		scrollTop: $(this).offset().top - offsetVal
		}, 750);
	});
}
$.fn.nodoubletapzoom = function() {
    $(this).bind('touchstart', function preventZoom(e){
        var t2 = e.timeStamp;
        var t1 = $(this).data('lastTouch') || t2;
        var dt = t2 - t1;
        var fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1){
            return; // not double-tap
        }
        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(e.target).trigger('click');
    });
};