// there is no sleep, so make some


 var baseURL = 'https://www.coasttocoastam.com/show/';
 var years = ['2013', '2014', '2015', '2016', '2017', '2018'];
 var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
 var days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
              '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
              '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

              

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// sleep until all DOM elements are populated.. else youll get # instead of URLs
sleep(500).then(() => {
  var filter = {urls: ["https://www.coasttocoastam.com/*"]};
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
