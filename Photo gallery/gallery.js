function upDate(previewPic){
document.getElementById('image').innerHTML=previewPic.alt;
var src=previewPic.getAttribute("src");
document.getElementById('image').style.backgroundImage="url("+previewPic.src+")";
}
function unDo(){
var text="Hover over an image below to display here.";
document.getElementById('image').style.backgroundImage="url('')";
document.getElementById('image').innerHTML=text;
}
