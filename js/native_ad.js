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
var scrollTimeout = 0;
var lastScrollTop = 0;
    $(window).scroll(function () {
      if(scrollTimeout){
        clearTimeout(scrollTimeout);
      }
       else{
        scrollTimeout = setTimeout(function(){
          //inform to stop animation
          var win = document.getElementById("iframe").contentWindow;
          win.postMessage('Stop animation','https://varunsk.github.io');
        }, 100);
      }
        scrollHandler();
    });

scrollHandler = function() {
  var d = document.getElementById("test");
  var win = document.getElementById("iframe").contentWindow;
  if(elementInViewport(d)){
  st = $(this).scrollTop();
  if(st < lastScrollTop) {
      win.postMessage('Up','https://varunsk.github.io');
      }
  else {
      win.postMessage('Down','https://varunsk.github.io');
      }
  lastScrollTop = st;
  }
}
