function main(event){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var move = new Image();
  move.src = "sprite.png";
    context.drawImage(move,1142/12 *10,635/2,1142/12,635/4, 0, 500, 250,200)


  var x = 0, onX = 0;
  var state = "right-stop";

  var queryString = new URLSearchParams(window.location.search);
  if(queryString.get("from")){
    onX = 900;
    state = "left-stop"
  }



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
    context.drawImage(bacon, baconArray.startX, baconArray.startY, baconArray.wide, baconArray.high);
    context.drawImage(picasso, picassoArray.startX, picassoArray.startY, picassoArray.wide, picassoArray.high);
    context.drawImage(ernst, ernstArray.startX, ernstArray.startY, ernstArray.wide, ernstArray.high)



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
    if(onX > canvas.width - 400)
      location.href = "secondIndex.html"






  }
    var baconArray = {
      src1 : "Art/Francis Bacon/Bacon1FRAME.jpg",
      src2 : "Art/Francis Bacon/Bacon2FRAME.jpg",
      src3 : "Art/Francis Bacon/Bacon3FRAME.jpg",
      src4 : "Art/Francis Bacon/Bacon4FRAME.jpg",
      src4 : "Art/Francis Bacon/Bacon5FRAME.jpg",
      src5 : "Art/Francis Bacon/Bacon6FRAME.jpg",
      startX: 50, startY: 50,
      wide: 300, high : 300
    }


    var  ernstArray = {
      src1 : "Art/Max Ernst/Ernst1FRAME.jpg",
      src2 : "Art/Max Ernst/Ernst2FRAME.jpg",
      src3 : "Art/Max Ernst/Ernst3FRAME.jpg",
      src4 : "Art/Max Ernst/Ernst4FRAME.jpg",
      src5 : "Art/Max Ernst/Ernst5FRAME.jpg",
      src6 : "Art/Max Ernst/Ernst6FRAME.jpg",
      startX: 450, startY: 50,
      wide: 300, high : 300
    }


    var  picassoArray = {
      src1 : "Art/Pablo Picasso/Picasso1FRAME.jpg",
      src2 : "Art/Pablo Picasso/Picasso2FRAME.jpg",
      src3 : "Art/Pablo Picasso/Picasso3FRAME.jpg",
      src4 : "Art/Pablo Picasso/Picasso4FRAME.jpg",
      src5 : "Art/Pablo Picasso/Picasso5FRAME.jpg",
      src6 : "Art/Pablo Picasso/Picasso6FRAME.jpg",
      startX: 850, startY: 50,
      wide: 300, high : 300
    }




bacon = new Image();
  bacon.src = baconArray.src2;

picasso = new Image();
  picasso.src = picassoArray.src2;

  ernst = new Image();
  ernst.src = ernstArray.src2;

  // pollock = new Image();
  // pollock.src = pollockArray.src2;
  //
  // avedon = new Image();
  // avedon.src = avedonArray.src2;



// bacon.onload = function(){
//       context.drawImage(bacon, baconArray.startX, baconArray.startY, baconArray.wide, baconArray.high);
//     }
// picasso.onload = function(){
//       context.drawImage(picasso, picassoArray.startX, picassoArray.startY, picassoArray.wide, picassoArray.high)
// }
// ernst.onload = function(){
//       context.drawImage(ernst, ernstArray.startX, ernstArray.startY, ernstArray.wide, ernstArray.high)
//     }
// pollock.onload = function(){
//       context.drawImage(pollock, pollockArray.startX, pollockArray.startY, pollockArray.wide, pollockArray.high)
// }
// avedon.onload = function(){
//       context.drawImage(avedon, avedonArray.startX, avedonArray.startY, avedonArray.wide, avedonArray.high)
// }


    canvas.onmousemove = function(evt){
            var x = window.event.screenX;
      if(evt.x < baconArray.startX + baconArray.wide &&
        evt.x > baconArray.startX &&
        evt.y < baconArray.startY + baconArray.high &&
        evt.y  > baconArray.startY){
          canvas.style.cursor = "grab";

    }
    else if(evt.x < picassoArray.startX + picassoArray.wide &&
          evt.x > picassoArray.startX &&
          evt.y < picassoArray.startY + picassoArray.high &&
          evt.y  > picassoArray.startY){
          canvas.style.cursor = "grab";
    }
    else if(evt.x < ernstArray.startX + ernstArray.wide &&
          evt.x > ernstArray.startX &&
          evt.y < ernstArray.startY + ernstArray.high &&
          evt.y  > ernstArray.startY){
          canvas.style.cursor = "grab";
    }




          else{
            canvas.style.cursor = "";
          }
        }





  canvas.onclick = function(evt){
      if(evt.x < baconArray.startX + baconArray.wide &&
        evt.x > baconArray.startX &&
        evt.y < baconArray.startY + baconArray.high &&
        evt.y  > baconArray.startY){

      location.href = 'bacon.html';
    }
    if(evt.x < picassoArray.startX + picassoArray.wide &&
      evt.x > picassoArray.startX &&
      evt.y < picassoArray.startY + picassoArray.high &&
      evt.y  > picassoArray.startY){

      location.href = 'picasso.html'
  }

  if(evt.x < ernstArray.startX + ernstArray.wide &&
    evt.x > ernstArray.startX &&
    evt.y < ernstArray.startY + ernstArray.high &&
    evt.y  > ernstArray.startY){

    location.href = 'ernst.html'
}

if(evt.x < pollockArray.startX + pollockArray.wide &&
  evt.x > pollockArray.startX &&
  evt.y < pollockArray.startY + pollockArray.high &&
  evt.y  > pollockArray.startY){
    alert('this will take you to pollock.html')
}

}



  document.addEventListener('keydown', function(event) {
      if(event.keyCode == 65) {
        state = "left";
        onX -=40;
      }
      else if(event.keyCode == 68) {
              state = "right";
              onX +=40;
      }

  });
  document.addEventListener('keyup', function(event){
    if(state == "left")
      state = "left-stop";
    if(state == "right")
      state = "right-stop"
  });




}
