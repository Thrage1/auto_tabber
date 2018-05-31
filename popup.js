document.addEventListener("DOMContentLoaded",function(){

  let open = document.getElementById('open');

  document.addEventListener('keypress', function(e){
    if (e.keyCode === 13 && e.srcElement.type !== 'button'){
      console.log(e.target);
      let list = document.getElementById('list');
      let nextField = document.createElement("input");
      nextField.classList.add('urls');
      list.appendChild( nextField );
    }
  });

  open.addEventListener("click", function(event) {
    event.preventDefault();
    let urls = document.getElementsByClassName('urls');
    console.log(urls);
    for(var i = 0; i < urls.length; i++){
      var url = urls[i];
      if(url.value !== ''){
        chrome.tabs.create({url: url.value, selected: false})
      }
    }
    window.close();

  });
});


// chrome.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });
