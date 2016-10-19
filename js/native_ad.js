var abc="xyz";
function elementInViewport(el) {
   var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
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
document.onscroll = function(){
   var d = document.getElementById("test");
    if(elementInViewport(d)) {
       console.log("Element is visible");
       parent.postMessage('shoot', 'https://varunsk.github.io/Native_ads_test/native_ad.html');
           d.classList.add('zoomad');
           d.classList.remove('zoomoutad');
    } else {
         d.classList.add('zoomoutad');
        d.classList.remove('zoomad');
    }
   };
