
//   function myFunction() {
//     alert("Page is loaded");
//   }
  
  function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
  }

  function myFunction() {
    console.log("inside body onload function");
    if(inIframe()){
      document.getElementById("signInButton").setAttribute("rel", "noreferrer");
      document.getElementById("signInButton").setAttribute("target", "_blank");
    }
  }

document.body.addEventListener("load", init, false);
