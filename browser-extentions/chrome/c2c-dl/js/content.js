// there is no sleep, so make some

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// base url and date arrays for show path.
var baseURL = 'https://www.coasttocoastam.com/show/';

/* BEGIN BIG COMMENT
var years = ['2013', '2014', '2015', '2016', '2017', '2018'];
// var years = ['2013', '2016', '2017', '2018'];

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

END BIG COMMENT */

var datesNeeded = [ '2014/02/14','2014/02/19','2014/02/20','2014/02/25','2014/02/26','2014/03/01','2014/03/02','2014/03/03','2014/03/04','2014/03/06','2014/03/08','2014/03/13','2014/03/14','2014/05/05','2014/05/20','2014/09/20','2014/09/31','2015/02/30','2015/02/31','2015/09/31','2015/11/31','2016/03/08','2016/03/31','2016/06/31','2016/11/31','2017/02/01','2017/02/30','2017/02/31','2017/09/05','2017/10/16','2018/02/29','2018/02/30','2018/08/06','2018/08/20','2018/09/20','2018/09/21','2018/09/24','2018/09/29','2018/09/31','2018/10/01','2018/10/02','2018/10/07','2018/10/13','2018/10/17','2018/10/18','2018/10/25','2018/10/28','2018/11/06','2018/11/14','2018/11/15','2018/11/17','2018/11/19','2018/11/20','2018/11/23','2018/11/24','2018/11/26','2018/11/27','2018/11/28','2018/11/30' ];
var all_dates = [];

for (var y = 0; y < datesNeeded.length; y++) {
  showURL = baseURL+datesNeeded[y];
  all_dates.push(showURL);
}











//console.log("Current Location: "+window.location.href);
//console.log("Next Location: "+all_dates[all_dates.indexOf(window.location.href)+1]);

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
