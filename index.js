function main(){
  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
  var context = canvas.getContext('2d');

    var warholArray = {
      src1 : "Art/Andy Warhol/Warhol1.jpg",
      src2 : "Art/Andy Warhol/Warhol2.jpg",
      src3 : "Art/Andy Warhol/Warhol3.jpg",
      src4 : "Art/Andy Warhol/Warhol4.jpg",
      src5 : "Art/Andy Warhol/Warhol5.jpg",
      src6 : "Art/Andy Warhol/Warhol6.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var baconArray = {
      src1 : "Art/Francis Bacon/Bacon1FRAME.jpg",
      src2 : "Art/Francis Bacon/Bacon2FRAME.jpg",
      src3 : "Art/Francis Bacon/Bacon3FRAME.jpg",
      src4 : "Art/Francis Bacon/Bacon4FRAME.jpg",
      src4 : "Art/Francis Bacon/Bacon5FRAME.jpg",
      src5 : "Art/Francis Bacon/Bacon6FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var condoArray = {
      src1 : "Art/George Condo/Condo1.jpg",
      src2 : "Art/George Condo/Condo2.jpg",
      src3 : "Art/George Condo/Condo3.jpg",
      src4 : "Art/George Condo/Condo4.jpg",
      src5 : "Art/George Condo/Condo5.jpg",
      src6 : "Art/George Condo/Condo6.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var pollockArray = {
      src1 : "Art/Jackson Pollock/Pollock1.jpg",
      src2 : "Art/Jackson Pollock/Pollock2.jpg",
      src3 : "Art/Jackson Pollock/Pollock3.jpg",
      src4 : "Art/Jackson Pollock/Pollock4.jpg",
      src5 : "Art/Jackson Pollock/Pollock5.jpg",
      src6 : "Art/Jackson Pollock/Pollock6.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var basquiatArray = {
      src1 : "Art/Jean Michel Basquiat/Basquiat1.jpg",
      src2 : "Art/Jean Michel Basquiat/Basquiat2.jpg",
      src3 : "Art/Jean Michel Basquiat/Basquiat3.jpg",
      src4 : "Art/Jean Michel Basquiat/Basquiat4.jpg",
      src5 : "Art/Jean Michel Basquiat/Basquiat5.jpg",
      src6 : "Art/Jean Michel Basquiat/Basquiat6.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var haringArray = {
      src1 : "Art/Keith Haring/Haring1.jpg",
      src2 : "Art/Keith Haring/Haring2.jpg",
      src3 : "Art/Keith Haring/Haring3.jpg",
      src4 : "Art/Keith Haring/Haring4.jpg",
      src5 : "Art/Keith Haring/Haring5.jpg",
      src6 : "Art/Keith Haring/Haring6.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var  ernstArray = {
      src1 : "Art/Max Ernst/Ernst1FRAME.jpg",
      src2 : "Art/Max Ernst/Ernst2FRAME.jpg",
      src3 : "Art/Max Ernst/Ernst3FRAME.jpg",
      src4 : "Art/Max Ernst/Ernst4FRAME.jpg",
      src5 : "Art/Max Ernst/Ernst5FRAME.jpg",
      src6 : "Art/Max Ernst/Ernst6FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var  picassoArray = {
      src1 : "Art/Pablo Picasso/Picasso1FRAME.jpg",
      src2 : "Art/Pablo Picasso/Picasso2FRAME.jpg",
      src3 : "Art/Pablo Picasso/Picasso3FRAME.jpg",
      src4 : "Art/Pablo Picasso/Picasso4FRAME.jpg",
      src5 : "Art/Pablo Picasso/Picasso5FRAME.jpg",
      src6 : "Art/Pablo Picasso/Picasso6FRAME.jpg",
      x1: 300, y1 : 300, x2 : 300, y2 : 300
    }


    var avedonArray = {
      src1 : "Art/Richard Avedon/Avedon1.jpg",
      src2 : "Art/Richard Avedon/Avedon2.jpg",
      src3 : "Art/Richard Avedon/Avedon3.jpg",
      src4 : "Art/Richard Avedon/Avedon4.jpg",
      src5 : "Art/Richard Avedon/Avedon5.jpg",
      src6 : "Art/Richard Avedon/Avedon6.jpg",
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
