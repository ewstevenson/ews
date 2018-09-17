// there is no sleep, so make some
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// sleep until all DOM elements are populated.. else youll get # instead of URLs
sleep(500).then(() => {
  var filter = {urls: ["<all_urls>"]};
  // useful links are of the streamlink-dynamic class
  var streamLinks = document.getElementsByClassName("streamlink-dynamic");
  for(var i=0; i<streamLinks.length; i++) {
    if (streamLinks.item(i).className == 'streamlink-dynamic') {
      //console.log(streamLinks[i].attributes[0]);
      //console.log(streamLinks[i].parentNode.firstElementChild.href);
      //console.log(streamLinks[i].attributes[0].ownerElement.href);
      //console.log(streamLinks[i].attributes[0].value);
      //console.log(streamLinks[i].attributes[0].textContent);
      chrome.runtime.sendMessage(streamLinks[i].href);
      //console.log(streamLinks[i].attributes[0].nodeValue);
      //console.log(streamLinks.item(i).className );
    }
  }
})
