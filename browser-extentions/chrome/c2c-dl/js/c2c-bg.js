


// orignal code

chrome.runtime.onMessage.addListener(function(mp3_url, sender, sendResponse) {
	console.log("Downloading: "+mp3_url);
	chrome.downloads.download({
		url: mp3_url,
		saveAs: false
	});
});

//end original code
