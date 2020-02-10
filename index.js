function main(){
  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
  var context = canvas.getContext('2d');

    var warholArray = {
      src1 : "Art/Andy Warhol/Warhol1FRAME.jpg",
      src2 : "Art/Andy Warhol/Warhol2FRAME.jpg",
      src3 : "Art/Andy Warhol/Warhol3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var baconArray = {
      src1 : "Art/Francis Bacon/Bacon1FRAME.jpg",
      src2 : "Art/Francis Bacon/Bacon2FRAME.jpg",
      src3 : "Art/Francis Bacon/Bacon3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var condoArray = {
      src1 : "Art/George Condo/Condo1FRAME.jpg",
      src2 : "Art/George Condo/Condo2FRAME.jpg",
      src3 : "Art/George Condo/Condo3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var pollockArray = {
      src1 : "Art/Jackson Pollock/Pollock1.jpg",
      src2 : "Art/Jackson Pollock/Pollock2.jpg",
      src3 : "Art/Jackson Pollock/Pollock3.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var basquiatArray = {
      src1 : "Art/Jean Michel Basquiat/Basquiat1.jpg",
      src2 : "Art/Jean Michel Basquiat/Basquiat2.jpg",
      src3 : "Art/Jean Michel Basquiat/Basquiat3.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var haringArray = {
      src1 : "Art/Keith Haring/Haring1.jpg",
      src2 : "Art/Keith Haring/Haring2.jpg",
      src3 : "Art/Keith Haring/Haring3.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var  ernstArray = {
      src1 : "Art/Max Ernst/Ernst1FRAME.jpg",
      src2 : "Art/Max Ernst/Ernst2FRAME.jpg",
      src3 : "Art/Max Ernst/Ernst3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var  picassoArray = {
      src1 : "Art/Pablo Picasso/Picasso1FRAME.jpg",
      src2 : "Art/Pablo Picasso/Picasso2FRAME.jpg",
      src3 : "Art/Pablo Picasso/Picasso3FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }

    var avedonArray = {
      src1 : "Art/Richard Avedon/Avedon1.jpg",
      src2 : "Art/Richard Avedon/Avedon2.jpg",
      src3 : "Art/Richard Avedon/Avedon3.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }



bacon = document.createElement("img"),
  bacon.src = baconArray.src2;

picasso = document.createElement("img"),
  picasso.src = picassoArray.src1;

  ernst = document.createElement("img"),
  ernst.src = ernstArray.src1;

bacon.onload = function(){

      context.drawImage(bacon, 50, 50, baconArray.x1, baconArray.y1);
      context.drawImage(picasso, 450, 50, picassoArray.x1, picassoArray.y1)
      context.drawImage(ernst, 850, 50, ernstArray.x1, ernstArray.y1)
    }





}



}
