// there is no sleep, so make some

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// base url and date arrays for show path.
var baseURL = 'https://www.coasttocoastam.com/show/';
var years = ['2013', '2014', '2015', '2016', '2017', '2018'];
var months = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
               '11', '12'];
var days = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
             '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
             '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
             '31'];

var day;
var month;
var year;
var datePath;
var showURL;
var all_dates = [];

for (var y = 0; y < years.length; y++) {
  year = years[y];
  for (var m = 0; m < months.length; m++) {
    month = months[m];
    for (var d = 0; d < days.length; d++){
      day = days[d];
      datePath = year+"/"+month+"/"+day;
      showURL = baseURL+datePath;
      all_dates.push(showURL);
      // do this for everyday in loop
      // console.log(showURL);
    }
  }
}

console.log("Current Location: "+window.location.href);
console.log("Next Location: "+all_dates[all_dates.indexOf(window.location.href)+1]);

// sleep until all DOM elements are populated.. else youll get # instead of URLs
sleep(500).then(() => {
  // useful links are of the streamlink-dynamic class
  var streamLinks = document.getElementsByClassName("streamlink-dynamic");
  for(var i=0; i<streamLinks.length; i++) {
    if (streamLinks.item(i).className == 'streamlink-dynamic') {
      //console.log(streamLinks[i].attributes[0]);
      //console.log(streamLinks[i].parentNode.firstElementChild.href);
      //console.log(streamLinks[i].attributes[0].ownerElement.href);
      //console.log(streamLinks[i].attributes[0].value);
      //console.log(streamLinks[i].attributes[0].textContent);
      // use this one to get mp3 url
      chrome.runtime.sendMessage(streamLinks[i].href);
      //console.log(streamLinks[i].attributes[0].nodeValue);
      //console.log(streamLinks.item(i).className );
    }
  }
})

  window.location.href = all_dates[all_dates.indexOf(window.location.href)+1];
