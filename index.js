function main(){
  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
  var context = canvas.getContext('2d');

    base_image = new Image();
    base_image.src = 'Art/Andy Warhol/Warhol1.jpg';
    base_image.onload = function(){
      context.drawImage(base_image, 0, 0);
  }
}

}
