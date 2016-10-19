console.log("Hello there  ...");
var iframe_parent_div = window.frameElement ? window.frameElement.parentNode : null;
console.log(iframe_parent_div);
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
console.log("Test1");

window.parent.onscroll = function(){
    if(elementInViewport(iframe_parent_div)) {
       console.log("Entered");
           iframe_parent_div.classList.add('zoomad');
        iframe_parent_div.classList.remove('zoomoutad');
        
    } else {
         iframe_parent_div.classList.add('zoomoutad');
        iframe_parent_div.classList.remove('zoomad');
    }
   };

