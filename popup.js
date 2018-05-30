document.addEventListener("DOMContentLoaded",function(){
  let urls = document.getElementsByClassName('urls');

  console.log(urls);

  let open = document.getElementById('open');

  open.addEventListener("click", function(event) {
    event.preventDefault();

    for(var i = 0; i < urls.length; i++){
      var url = urls[i];
      chrome.tabs.create({url: url.value, selected: false})
    }
    window.close();

  });
});


// chrome.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });
