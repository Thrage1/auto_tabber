document.addEventListener("DOMContentLoaded",function(){
  let urls = document.getElementsByClass('url')
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
