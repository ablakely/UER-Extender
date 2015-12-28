currentTabURL = ""; // global
currentTabId  = "";

function showIntercomAction(tabId, changeInfo, tab) {
	if (tab.url.indexOf('uer.ca') > -1) {
		chrome.pageAction.show(tabId);
		chrome.storage.sync.get("uer_ds", function(key) {
			if (key.uer_ds == true) {
			        chrome.tabs.executeScript(tabId, {file:"./disablesanta.js"});
			}
		});

		chrome.storage.sync.get("uer_dm", function(key) {
			if (key.uer_dm == true) {
				chrome.tabs.executeScript(tabId, {file:"./disablemusic.js"});
			}
		});

		chrome.storage.sync.get('uer_ac', function(key) {
			if (key.uer_ac == true) {
				chrome.tabs.executeScript(tabId, {file:"./converter.js"});
			}
		});

	}
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.indexOf('uer.ca') > -1) {
		currentTabId  = tabId;
		currentTabURL = tab.url;
	}
});

function dbArrowNav(keycmd) {
	chrome.storage.sync.get("uer_an", function(key) {
		if (key.uer_an == true) {
  		var patt = new RegExp(/http:\/\/www\.uer\.ca\/locations\/viewgal\.asp*/);

  		if (patt.test(currentTabURL)) {
    		if (keycmd == "nextPhoto") {
					chrome.tabs.executeScript(currentTabId, {"file":"./dbnav_right.js"});
				}
				if (keycmd == "prevPhoto") {
					chrome.tabs.executeScript(currentTabId, {"file":"./dbnav_left.js"});
				}
  		}
		}
	});
}

chrome.commands.onCommand.addListener(dbArrowNav);
chrome.tabs.onUpdated.addListener(showIntercomAction);
