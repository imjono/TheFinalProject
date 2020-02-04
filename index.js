function main(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var context = canvas.getContext('2d');

    var Warhol1 = document.getElementById("Warhol1");
    context.drawImage(Warhol1,  10, 10, 150, 180)
  }
}
