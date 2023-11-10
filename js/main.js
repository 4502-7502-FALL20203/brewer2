
var gallery-image = document.querySelector('gallery-image')
var images = ['tacos.jpg', 'pasta.jpg', 'pizza.jpg', 'sushi.jpg', 'crab.jpg']
var i=0;

function button_previous(){
  if(1 <= 0) = images.length;
  i--;
  return setImg()
}
function button_next() {

}
function setImg() {
  return gallery-image.setAttribute('src', 'images/' + images [i])
}