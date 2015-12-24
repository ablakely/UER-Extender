function disableSanta() {
        var divs = document.getElementsByTagName("div");

        var elms = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        for (var i = 0; i < elms.length; i++) {
                var x = divs[elms[i]];
                x.style.display = "none";
        }

	// get that pesky snowman too!
  
	snowTick = function() {};  // no exceptions!
}

disableSanta();
