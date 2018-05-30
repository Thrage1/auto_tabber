document.addEventListener("DOMContentLoaded",function(){
  let urls = document.getElementsByClassName('urls');

  console.log(urls);

  let open = document.getElementById('open');

  open.addEventListener("click", function(event) {
    event.preventDefault();

    var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++){
      var link = links[i];
      chrome.tabs.create({url: link.href, selected: false})
    }
    window.close();

  });
});


// chrome.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });
