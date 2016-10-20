/*console.log("Hello there  ...");
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
   console.log("Entered onscroll");
   console.log(iframe_parent_div.id);
   var d = document.getElementById(iframe_parent_div.id);
    if(elementInViewport(d)) {
       console.log("Entered");
           d.classList.add('zoomad');
        d.classList.remove('zoomoutad');
        
    } else {
         d.classList.add('zoomoutad');
        d.classList.remove('zoomad');
    }
   };*/
function listener(event){
	if ( event.origin !== "https://varunsk.github.io" )
		return
	if(event.data == 'Shoot'){
		var d = document.getElementById("test");
		d.classList.add('zoomad');
       	        d.classList.remove('zoomoutad');
		}
	document.getElementById("testing").innerHTML = event.data;
	}
	if (window.addEventListener){
		addEventListener("message", listener, false)
	} 
	else {
		 attachEvent("onmessage", listener)
	}
