function main(){
  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
  var context = canvas.getContext('2d');

    var baconArray = {
      src1 : "Art/Francis Bacon/Bacon1FRAME.jpg",
      src2 : "Art/Francis Bacon/Bacon2FRAME.jpg",
      src3 : "Art/Francis Bacon/Bacon3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var  picassoArray = {
      src1 : "Art/Pablo Picasso/Picasso1FRAME.jpg",
      src2 : "Art/Pablo Picasso/Picasso2FRAME.jpg",
      src3 : "Art/Pablo Picasso/Picasso3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var  ernstArray = {
      src1 : "Art/Max Ernst/Ernst1FRAME.jpg",
      src2 : "Art/Max Ernsto/Ernst2FRAME.jpg",
      src3 : "Art/Max Ernst/Ernst3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }



  bacon = new Image();
  bacon.src = baconArray.src1;

  picasso = new Image();
  picasso.src = picassoArray.src1;

  ernst = new Image();
  ernst.src = ernstArray.src1;

bacon.onload = function(){

      context.drawImage(bacon, 50, 50, baconArray.x1, baconArray.y1);
      context.drawImage(picasso, 450, 50, picassoArray.x1, picassoArray.y1)
      context.drawImage(ernst, 850, 50, ernstArray.x1, ernstArray.y1)
    }





}



}
