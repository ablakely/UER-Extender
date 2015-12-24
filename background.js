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
		})
	}
}

chrome.tabs.onUpdated.addListener(showIntercomAction);
