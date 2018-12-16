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
  });

  chrome.storage.sync.get("uer_dsnow", function(key) {
    if (key.uer_dsnow != undefined) {
      $("#disableSnow").prop('checked', key.uer_dsnow);
    }
  });

  chrome.storage.sync.get("uer_ac", function(key) {
    if (key.uer_ac != undefined) {
      $("#autoconvert").prop('checked', key.uer_ac);
    }
  });

  chrome.storage.sync.get("uer_an", function(key) {
    if (key.uer_an != undefined) {
      $("#dbarrownav").prop('checked', key.uer_an);
    }
  });

  $("#updatesettings").click(function() {
    var ds = document.getElementById("disableSanta").checked;
    var dsnow = document.getElementById("disableSnow").checked;
    var dm = document.getElementById("disableMusic").checked;
    var ac = document.getElementById("autoconvert").checked;
    var an = document.getElementById("dbarrownav").checked;

    chrome.storage.sync.set({"uer_ds": ds}, function() {
      if (ds == true) {
        chrome.tabs.executeScript(null, {file: "disablesanta.js"});
      }
    });

    chrome.storage.sync.set({"uer_dsnow": dsnow}, function() {
      if (dsnow == true) {
        chrome.tabs.executeScript(null, {file: "disablesnow.js"});
      }
    })

    chrome.storage.sync.set({"uer_dm": dm}, function() {
      if (dm == true) {
        chrome.tabs.executeScript(null, {file: "disablemusic.js"});
      }
    });

    chrome.storage.sync.set({"uer_ac": ac}, function() {
      if (ac == true) {
        chrome.tabs.executeScript(null, {file: 'converter.js'});
      }
    });

    chrome.storage.sync.set({"uer_an": an});

  });
});
