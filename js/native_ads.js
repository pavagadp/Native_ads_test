console.log("Hello there");
if (jQuery('#card_id').visible(true)) {
  console.log("Yes");
} else {
  console.log("NO")
}
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
   console.log("Test1");
var d = document.getElementsById("card_id");
    if(elementInViewport(d)) {
       console.log("Entered");
           d.classList.add('zoomad');
        d.classList.remove('zoomoutad');
        
    } else {
         d.classList.add('zoomoutad');
        d.classList.remove('zoomad');
    }
 };
