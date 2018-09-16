


var beforeHeadersCallback = function(details) {
    //alert("Hello Hackers: ");
	var bkg = chrome.extension.getBackgroundPage();
//	bkg.console.log(JSON.stringify(details));


};

var opt_extraInfoSpec = [];



chrome.webRequest.onBeforeSendHeaders.addListener(
        beforeHeadersCallback, filter, opt_extraInfoSpec);
