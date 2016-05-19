$(document).ready(function(){
    $.ajax({url: "/chords/mp3/A.mp3"});
	$.ajax({url: "/chords/mp3/B.mp3"});
	$.ajax({url: "/chords/mp3/C.mp3"});
	$.ajax({url: "/chords/mp3/D.mp3"});
	$.ajax({url: "/chords/mp3/E.mp3"});
	$.ajax({url: "/chords/mp3/F.mp3"});
	$.ajax({url: "/chords/mp3/G.mp3"});
	$.ajax({url: "/chords/mp3/Ab.mp3"});
	$.ajax({url: "/chords/mp3/Bb.mp3"});
	$.ajax({url: "/chords/mp3/Db.mp3"});
	$.ajax({url: "/chords/mp3/Eb.mp3"});
	$.ajax({url: "/chords/mp3/Gb.mp3"});
    $.ajax({url: "/chords/mp3/Am.mp3"});
	$.ajax({url: "/chords/mp3/Bm.mp3"});
	$.ajax({url: "/chords/mp3/Cm.mp3"});
	$.ajax({url: "/chords/mp3/Dm.mp3"});
	$.ajax({url: "/chords/mp3/Em.mp3"});
	$.ajax({url: "/chords/mp3/Fm.mp3"});
	$.ajax({url: "/chords/mp3/Gm.mp3"});
	$.ajax({url: "/chords/mp3/Abm.mp3"});
	$.ajax({url: "/chords/mp3/Bbm.mp3"});
	$.ajax({url: "/chords/mp3/Dbm.mp3"});
	$.ajax({url: "/chords/mp3/Ebm.mp3"});
	$.ajax({url: "/chords/mp3/Gbm.mp3"});
    $.ajax({url: "/chords/mp3/Adim.mp3"});
	$.ajax({url: "/chords/mp3/Bdim.mp3"});
	$.ajax({url: "/chords/mp3/Cdim.mp3"});
	$.ajax({url: "/chords/mp3/Ddim.mp3"});
	$.ajax({url: "/chords/mp3/Edim.mp3"});
	$.ajax({url: "/chords/mp3/Fdim.mp3"});
	$.ajax({url: "/chords/mp3/Gdim.mp3"});
	$.ajax({url: "/chords/mp3/Abdim.mp3"});
	$.ajax({url: "/chords/mp3/Bbdim.mp3"});
	$.ajax({url: "/chords/mp3/Dbdim.mp3"});
	$.ajax({url: "/chords/mp3/Ebdim.mp3"});
	$.ajax({url: "/chords/mp3/Gbdim.mp3"});	
	$.ajax({url: "/chords/mp3/Rest.mp3"});
    $.ajax({url: "/chords/ogg/A.ogg"});
	$.ajax({url: "/chords/ogg/B.ogg"});
	$.ajax({url: "/chords/ogg/C.ogg"});
	$.ajax({url: "/chords/ogg/D.ogg"});
	$.ajax({url: "/chords/ogg/E.ogg"});
	$.ajax({url: "/chords/ogg/F.ogg"});
	$.ajax({url: "/chords/ogg/G.ogg"});
	$.ajax({url: "/chords/ogg/Ab.ogg"});
	$.ajax({url: "/chords/ogg/Bb.ogg"});
	$.ajax({url: "/chords/ogg/Db.ogg"});
	$.ajax({url: "/chords/ogg/Eb.ogg"});
	$.ajax({url: "/chords/ogg/Gb.ogg"});
    $.ajax({url: "/chords/ogg/Am.ogg"});
	$.ajax({url: "/chords/ogg/Bm.ogg"});
	$.ajax({url: "/chords/ogg/Cm.ogg"});
	$.ajax({url: "/chords/ogg/Dm.ogg"});
	$.ajax({url: "/chords/ogg/Em.ogg"});
	$.ajax({url: "/chords/ogg/Fm.ogg"});
	$.ajax({url: "/chords/ogg/Gm.ogg"});
	$.ajax({url: "/chords/ogg/Abm.ogg"});
	$.ajax({url: "/chords/ogg/Bbm.ogg"});
	$.ajax({url: "/chords/ogg/Dbm.ogg"});
	$.ajax({url: "/chords/ogg/Ebm.ogg"});
	$.ajax({url: "/chords/ogg/Gbm.ogg"});
    $.ajax({url: "/chords/ogg/Adim.ogg"});
	$.ajax({url: "/chords/ogg/Bdim.ogg"});
	$.ajax({url: "/chords/ogg/Cdim.ogg"});
	$.ajax({url: "/chords/ogg/Ddim.ogg"});
	$.ajax({url: "/chords/ogg/Edim.ogg"});
	$.ajax({url: "/chords/ogg/Fdim.ogg"});
	$.ajax({url: "/chords/ogg/Gdim.ogg"});
	$.ajax({url: "/chords/ogg/Abdim.ogg"});
	$.ajax({url: "/chords/ogg/Bbdim.ogg"});
	$.ajax({url: "/chords/ogg/Dbdim.ogg"});
	$.ajax({url: "/chords/ogg/Ebdim.ogg"});
	$.ajax({url: "/chords/ogg/Gbdim.ogg"});
	$.ajax({url: "/chords/ogg/Rest.ogg"});
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
				return $(this).data("type");
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
		$("#directionsOverlay").fadeOut();
		addChord("C");
	});
	$("#chords").on('taphold', '.chordBlock', function(){
		$(this).remove();
	});
	$('#chords').on( "tap", ".chordBlock", function( event ) {
		var newChord = nextChord($(this).data("type"), true);
		$(this).html(chordEntity(newChord));
		$(this).data("type", newChord);
    });
	$('#chords').on("swiperight", ".chordBlock", function( event ) {
		var newChord = nextModality($(this).data("type"), true);
		$(this).html(chordEntity(newChord));
		$(this).data("type", newChord);
    });
	$('#chords').on("swipeleft", ".chordBlock", function( event ) {
		var newChord = nextModality($(this).data("type"), false);
		$(this).html(chordEntity(newChord));
		$(this).data("type", newChord);
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
	$(".chordBlock").each(function(i, chordBlock){
		$(chordBlock).remove();
	});
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
	var sharps = {'A#':'Bb', 'C#':'Db', 'D#':'Eb', 'F#':'Gb', 'G#':'Ab',
		'A#m':'Bbm', 'C#m':'Dbm', 'D#m':'Ebm', 'F#m':'Gbm', 'G#m':'Abm',
		'A#dim':'Bbdim', 'C#dim':'Dbdim', 'D#dim':'Ebdim', 'F#dim':'Gbdim', 'G#dim':'Abdim'}
	var chordType = sharps[chord];
	if (chordType === undefined){var chordType = chord;}
	var newChord = "<div class='chordBlock' data-type='" + chordType + "'>" + chord + "</div>";
	$(newChord).insertBefore("#more").hide().fadeIn(100);
}
function nextChord(chord, next){
	var change = 1;
	if (!next){ change = -1; }
	var chords = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
	var sharps = {'A#':'Bb', 'C#':'Db', 'D#':'Eb', 'F#':'Gb', 'G#':'Ab'}
	var tone = chord.replace('dim', '').replace('m', '');
	var modality = chord.replace(tone, '');
	var baseTone = sharps[tone];
	if (baseTone === undefined){
		var baseTone = tone;
	}
	var index = $.inArray(baseTone, chords);
	index = (index + change + $(chords).size()) % $(chords).size();
	var nextTone = chords[index] + modality;
	return nextTone;	
}
function chordEntity(chord){
	var s = chord.replace("b", "&#9837;");
	return $('<textarea />').html(s).text();;
}
function nextModality(chord, next){
	var change = 1;
	if (!next){ change = -1; }
	var modalities = ['', 'm', 'dim'];	
	var tone = chord.replace('dim', '').replace('m', '');
	var modality = chord.replace(tone, '');
	var index = $.inArray(modality, modalities);
	index = (index + change + $(modalities).size()) % $(modalities).size();
	var nextTone = tone + modalities[index];
	return nextTone;
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
function loadExample(){
	/* LOAD AN EXAMPLE CHORD PROGRESSION */
	stopPlayback();
	var choice = Math.floor(Math.random() * 6);
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
			title = "Green Day - Time Of Your life";
		case 5:
			chords = ["D", "A", "Bm", "Gbm", "G", "D", "G", "A", "D", "A", "Bm", "Gbm", "G", "D", "G", "A", "D", "A", "Bm", "Gbm", "G", "D", "G", "A", "D", "A", "Bm", "Gbm", "G", "D", "G", "A"];
			title = "Pachelbel - Canon In D";
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