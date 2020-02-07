function main(){
  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
  var context = canvas.getContext('2d');

    var francisBaconArray = [
      "Art/Francis Bacon/Bacon1FRAME.jpg",
      "Art/Francis Bacon/Bacon2FRAME.jpg",
      "Art/Francis Bacon/Bacon3FRAME.jpg"
    ]
    francisBacon = new Image();
    francisBacon.src = francisBaconArray[2];
    
    francisBacon.onload = function(){

      context.drawImage(francisBacon, 10, 10, 300, 300);
  }
}

}
