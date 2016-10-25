var zoom = 1.5;
function apply_scale(zoom){
  var elem = document.getElementById("image_area");
  elem.style.transform = "scale("+zoom+")";
  elem.style.webkitTransform = "scale("+zoom+")";
  elem.style.MozTransform = "scale("+zoom+")";
  elem.style.msTransform = "scale("+zoom+")";
}

function zoom_action(flag,boundary){
  if(zoom > 1 && zoom!=boundary){
        apply_scale(zoom);
        zoom=zoom+(flag*0.005);
      }
      else{
        zoom = 1.005;
      }
}
function listener(event){
    if ( event.origin !== "https://varunsk.github.io" )
      return
    if(event.data == 'Shoot'){
      //var d = document.getElementById("test");
    }
    if(event.data == 'Up'){
      zoom_action(1,2.5);
    }
    else if(event.data == 'Down'){
      zoom_action(-1,1.6);
    }
    else if(event.data == 'Stop animation')
    {
    }
  }
  if (window.addEventListener){
    addEventListener("message", listener, false)
  } 
  else {
     attachEvent("onmessage", listener)
  }
