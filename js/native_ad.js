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


console.log("testing log");
document.onscroll = function(){
    

var d = document.getElementById("test");

console.log(d);
    if(elementInViewport(d)) {
           d.classList.add('zoomad');
        d.classList.remove('zoomoutad');
        
    } else {
         d.classList.add('zoomoutad');
        d.classList.remove('zoomad');
    }
 };
