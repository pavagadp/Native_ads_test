var abc="xyz";
function elementInViewport(el) {
   var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
     console.log(el);
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
console.log("Test1");

window.parent.onscroll = function(){
   var d = document.getElementById("test");
    if(elementInViewport(d)) {
       top.postMessage('hello', 'https://github.com/VarunSK/Native_ads_test/blob/gh-pages/native_ad.html');
       console.log("Entered");
           d.classList.add('zoomad');
        d.classList.remove('zoomoutad');
        
    } else {
         d.classList.add('zoomoutad');
        d.classList.remove('zoomad');
    }
   };
