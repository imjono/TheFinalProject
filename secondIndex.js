function main(event){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var move = new Image();
  move.src = "sprite.png"

  var x = 0, onX = 200;
  var state = "right-stop";
  setInterval(dostuff,100);

  function dostuff(){
    clearbackground();
  // updateStuff();
    draw();
  }



  function clearbackground(){
    console.log("clback");
    context.fillStyle = "white";
    context.fillRect( 0, 0, canvas.width, canvas.height);
  }

  function draw(){
    context.drawImage(warhol, warholArray.startX, warholArray.startY, warholArray.wide, warholArray.high);
    context.drawImage(condo, condoArray.startX, condoArray.startY, condoArray.wide, condoArray.high);
    context.drawImage(pollock, pollockArray.startX, pollockArray.startY, pollockArray.wide, pollockArray.high);



    if (state == "left"){
      context.drawImage(move,x,635/4,1142/12,635/4, onX, 500, 250,200)
    x+=1142/12;
    x%=1142;
    }
    if(state == "right"){
      context.drawImage(move,x,635/2,1142/12,635/4, onX, 500, 250,200)
      x+=1142/12;
      x%=1142;
    }
    if(state == "right-stop")
        context.drawImage(move,1142/12 *10,635/2,1142/12,635/4, onX, 500, 250,200)

    if(state == "left-stop")
      context.drawImage(move,1142/12 *10,635/4,1142/12,635/4, onX, 500, 250,200)

    if(onX < 100)
      location.href = "index.html?from=secondIndex"






  }

    var warholArray = {
      src1 : "Art/Andy Warhol/Warhol1.jpg",
      src2 : "Art/Andy Warhol/Warhol2.jpg",
      src3 : "Art/Andy Warhol/Warhol3.jpg",
      src4 : "Art/Andy Warhol/Warhol4.jpg",
      src5 : "Art/Andy Warhol/Warhol5.jpg",
      src6 : "Art/Andy Warhol/Warhol6.jpg",
      startX: 50, startY: 50,
      wide: 300, high : 300
    }

        var  condoArray = {
          src1 : "Art/George Condo/Condo1.png",
          src2 : "Art/George Condo/Condo2.png",
          src3 : "Art/George Condo/Condo3.jpg",
          src4 : "Art/George Condo/Condo4.jpg",
          src5 : "Art/George Condo/Condo5.jpg",
          src6 : "Art/George Condo/Condo6.jpg",
          startX: 450, startY: 50,
          wide: 300, high : 300
        }



    var pollockArray = {
      src1 : "Art/Jackson Pollock/Pollock1.jpg",
      src2 : "Art/Jackson Pollock/Pollock2.jpg",
      src3 : "Art/Jackson Pollock/Pollock3.jpg",
      src4 : "Art/Jackson Pollock/Pollock4.jpg",
      src5 : "Art/Jackson Pollock/Pollock5.jpg",
      src6 : "Art/Jackson Pollock/Pollock6.jpg",
      startX: 850, startY: 50,
      wide: 300, high : 300
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



    var avedonArray = {
      src1 : "Art/Richard Avedon/Avedon1.jpg",
      src2 : "Art/Richard Avedon/Avedon2.jpg",
      src3 : "Art/Richard Avedon/Avedon3.jpg",
      src4 : "Art/Richard Avedon/Avedon4.jpg",
      src5 : "Art/Richard Avedon/Avedon5.jpg",
      src6 : "Art/Richard Avedon/Avedon6.jpg",
      startX: 1650, startY: 50,
      wide: 300, high : 300
    }



warhol = new Image();
  warhol.src = warholArray.src2;

condo = new Image();
  condo.src = condoArray.src2;

  // pollock = new Image();
  // pollock.src = pollockArray.src2;

  pollock = new Image();
  pollock.src = pollockArray.src2;
  //
  // avedon = new Image();
  // avedon.src = avedonArray.src2;



// warhol.onload = function(){
//       context.drawImage(warhol, warholArray.startX, warholArray.startY, warholArray.wide, warholArray.high);
//     }
// condo.onload = function(){
//       context.drawImage(condo, condoArray.startX, condoArray.startY, condoArray.wide, condoArray.high)
// }
// pollock.onload = function(){
//       context.drawImage(pollock, pollockArray.startX, pollockArray.startY, pollockArray.wide, pollockArray.high)
//     }


    canvas.onmousemove = function(evt){
            var x = window.event.screenX;
      if(evt.x < warholArray.startX + warholArray.wide &&
        evt.x > warholArray.startX &&
        evt.y < warholArray.startY + warholArray.high &&
        evt.y  > warholArray.startY){
          canvas.style.cursor = "grab";

    }
    else if(evt.x < condoArray.startX + condoArray.wide &&
          evt.x > condoArray.startX &&
          evt.y < condoArray.startY + condoArray.high &&
          evt.y  > condoArray.startY){
          canvas.style.cursor = "grab";
    }
    else if(evt.x < pollockArray.startX + pollockArray.wide &&
          evt.x > pollockArray.startX &&
          evt.y < pollockArray.startY + pollockArray.high &&
          evt.y  > pollockArray.startY){
          canvas.style.cursor = "grab";
    }




          else{
            canvas.style.cursor = "";
          }
        }





  canvas.onclick = function(evt){
      if(evt.x < warholArray.startX + warholArray.wide &&
        evt.x > warholArray.startX &&
        evt.y < warholArray.startY + warholArray.high &&
        evt.y  > warholArray.startY){

      location.href = 'warhol.html';
    }
    if(evt.x < condoArray.startX + condoArray.wide &&
      evt.x > condoArray.startX &&
      evt.y < condoArray.startY + condoArray.high &&
      evt.y  > condoArray.startY){

      location.href = 'condo.html'
  }

  if(evt.x < pollockArray.startX + pollockArray.wide &&
    evt.x > pollockArray.startX &&
    evt.y < pollockArray.startY + pollockArray.high &&
    evt.y  > pollockArray.startY){

    location.href = 'pollock.html'
}

// if(evt.x < pollockArray.startX + pollockArray.wide &&
//   evt.x > pollockArray.startX &&
//   evt.y < pollockArray.startY + pollockArray.high &&
//   evt.y  > pollockArray.startY){
//     alert('this will take you to pollock.html')
// }

}



  document.addEventListener('keydown', function(event) {
      if(event.keyCode == 65) {
        state = "left";
        onX -=30;
      }
      else if(event.keyCode == 68) {
              state = "right";
              onX +=30;
      }

  });
  document.addEventListener('keyup', function(event){
    if(state == "left")
      state = "left-stop";
    if(state == "right")
      state = "right-stop"
  });




}
