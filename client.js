

var content_container = document.createElement("div");
content_container.style.width = "1440px";
content_container.id = "content_container";
content_container.style.position = "relative";
content_container.style.display = "block";
content_container.style.margin = "0 auto";
document.body.appendChild(content_container);
var page_desktop___1_ek1 = document.createElement("div");
page_desktop___1_ek1.id = "page_desktop___1_ek1";
page_desktop___1_ek1.style.width = "1440px";
page_desktop___1_ek1.style.height = "1024px";
page_desktop___1_ek1.style.left = "0px";
page_desktop___1_ek1.style.top = "0px";
page_desktop___1_ek1.style.position = "absolute";
content_container.appendChild(page_desktop___1_ek1);

var _bg__desktop___1_ek2 = document.createElement("div");
_bg__desktop___1_ek2.id = "_bg__desktop___1_ek2";
_bg__desktop___1_ek2.style.left = "0px";
_bg__desktop___1_ek2.style.top = "0px";
_bg__desktop___1_ek2.style.width = "1440px";
_bg__desktop___1_ek2.style.height = "1024px";
_bg__desktop___1_ek2.style.background = 'rgba(255,255,255,1)';

page_desktop___1_ek1.appendChild(_bg__desktop___1_ek2);

var rectangle_1 = document.createElement("div");
rectangle_1.id = "rectangle_1";
rectangle_1.style.left = "455px";
rectangle_1.style.opacity = "0.5";
rectangle_1.style.filter = "alpha(opacity='50')";
rectangle_1.style.top = "25px";
rectangle_1.style.width = "608px";
rectangle_1.style.height = "563px";
rectangle_1.style.borderRadius = "58px";
rectangle_1.style.border = "1px solid #c616e2";
rectangle_1.style.background = 'rgba(106.21,125.56,175.31,0.5)';

page_desktop___1_ek1.appendChild(rectangle_1);

var rectangle_2 = document.createElement("div");
rectangle_2.id = "rectangle_2";
rectangle_2.style.left = "455px";
rectangle_2.style.opacity = "0.5";
rectangle_2.style.filter = "alpha(opacity='50')";
rectangle_2.style.top = "639px";
rectangle_2.style.width = "608px";
rectangle_2.style.height = "163px";
rectangle_2.style.border = "1px solid #4a84c8";
rectangle_2.style.background = 'rgba(172.28,163.14,228.44,0.5)';



page_desktop___1_ek1.appendChild(rectangle_2);

window.addEventListener("DOMContentLoaded", function() {
    var content_container = document.getElementById("content_container");
    var page_desktop___1_ek1 = document.getElementById("page_desktop___1_ek1");
  
    var ellipse_1 = document.createElement("div");
    ellipse_1.id = "ellipse_1";
    ellipse_1.style.left = "700px";
    ellipse_1.style.opacity = "0.5";
    ellipse_1.style.filter = "alpha(opacity='50')";
    ellipse_1.style.top = "839px";
    ellipse_1.style.width = "115px";
    ellipse_1.style.height = "89px";
    ellipse_1.style.borderRadius = "57.5px / 44.5px";
    ellipse_1.style.background = "rgba(153,55.72,125.76,0.5)";
    page_desktop___1_ek1.appendChild(ellipse_1);
  
    var send = document.createElement("button");
    send.innerHTML = "SEND";
    send.style.textAlign = "left";
    send.id = "send";
    send.style.left = "689px";
    send.style.top = "944px";
    send.style.width = "191px";
    send.style.height = "96px";
    send.style.fontFamily = "Inter";
    send.style.fontSize = "50px";
    send.style.overflow = "hidden";
    send.style.color = "#000000";
    send.style.cursor = "pointer"; // Add cursor pointer style
  
    send.addEventListener("click", function() {
      var inputText = document.getElementById("input_box").value; // Get the value from the input box
      console.log("Input Text:", inputText); // Print the input text to the console (you can replace this with your desired functionality)
    });
  
    ellipse_1.appendChild(send);
  });
  
