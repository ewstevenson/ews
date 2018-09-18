
chrome.runtime.onMessage.addListener(function(url, sender, sendResponse) {
console.log(url);
/*
		chrome.downloads.download({
			url: url,
			saveAs: false
		});
		*/
});
