


// orignal code

chrome.runtime.onMessage.addListener(function(mp3_url, sender, sendResponse) {
  // huge hack
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

  for (var y = 0; y < years.length; y++) {
    year = years[y];
    for (var m = 0; m < months.length; m++) {
      month = months[m];
      for (var d = 0; d < days.length; d++){
        day = days[d];
        datePath = year+"/"+month+"/"+day;
        showURL = baseURL+datePath;
        // do this for everyday in loop
        console.log(showURL);
      }
    }
  }

  // end huge hack




console.log(mp3_url);
//chrome.tabs.create({ url: mp3_url });


/*
		chrome.downloads.download({
			url: url,
			saveAs: false
		});
		*/
});

//end original code
