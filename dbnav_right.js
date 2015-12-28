function doRight() {
  var left = 57, right = 58;
  var imgs = document.getElementsByTagName('img');
  var patt = new RegExp(/http:\/\/www\.uer\.ca\/locations\/viewgal\.asp*/);

  if (patt.test(document.URL)) {
    var newurl = imgs[right].parentElement.href;

    if (newurl != undefined) {
      window.location = newurl;
    }
  }
}

doRight();
