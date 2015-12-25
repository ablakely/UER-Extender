function kmtom(km) {
  return km * .6214;
}

function convert() {
  var tds = document.getElementsByTagName('td');
  var patt = new RegExp("km");

  if (document.URL == "http://www.uer.ca/events/" || document.URL == "http://uer.ca/events/") {
    for (var i = 90; i < tds.length; i++) {
        if (patt.test(tds[i].innerHTML)) {
          tds[i].innerHTML = tds[i].innerHTML.replace(/\s+/, '');
          tds[i].innerHTML = tds[i].innerHTML.replace(' km', '');

          tds[i].innerHTML = Math.floor(kmtom(tds[i].innerHTML)) + " miles";
        }
      }
    }
}

convert();
