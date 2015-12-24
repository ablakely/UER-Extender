$(document).ready(function() {
  // popup init
  chrome.storage.sync.get("uer_ds", function(key) {
    if (key.uer_ds != undefined) {
      $("#disableSanta").prop('checked', key.uer_ds);
    }
  });

  chrome.storage.sync.get("uer_dm", function(key) {
    if (key.uer_dm != undefined) {
      $("#disableMusic").prop('checked', key.uer_dm);
    }
  })

  $("#updatesettings").click(function() {
    var ds = document.getElementById("disableSanta").checked;
    var dm = document.getElementById("disableMusic").checked;

    chrome.storage.sync.set({"uer_ds": ds}, function() {
      if (ds == true) {
        chrome.tabs.executeScript(null, {file: "disablesanta.js"});
      }
    });

    chrome.storage.sync.set({"uer_dm": dm}, function() {
      if (dm == true) {
        chrome.tabs.executeScript(null, {file: "disablemusic.js"});
      }
    })
  });
});
