
chrome.runtime.onMessage.addListener(function(url, sender, sendResponse) {
//alert(url);
		chrome.downloads.download({
			url: url,
			saveAs: false
		});
});
