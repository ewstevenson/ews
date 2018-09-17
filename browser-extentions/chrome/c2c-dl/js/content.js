
// functions

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

//
var filter = {urls: ["<all_urls>"]};
//var arr = [], l = document.getElementsByClassName("audiobox4");
var streamLinks = document.getElementsByClassName("streamlink-dynamic");
console.log(streamLinks);


for(var i=0; i<streamLinks.length; i++) {
    console.log(streamLinks.item(i));
  //  console.log(streamLinks.item(i).className );
}

/*
var v = document.getElementsByClassName("streamlink-dynamic");
console.log(v);

var items = new Array();
for (var j = 0; j < v.length; j++){
  console.log(v.item+" is the link.");
  items[j] = v.item(j);
}

var client = new HttpClient();
client.get('https://ews.consulting/c2c.php?s='+items, function(response) {
    // do something with response
    console.log(response);
  });


console.log(links);
console.log(anchors);
*/
