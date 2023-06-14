var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
blockwithoutunderscores="";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        blockwithoutunderscores=Img;
        blockwithoutunderscores.scaleToHeight(510);
        blockwithoutunderscores.scaleToWidth(600);
        blockwithoutunderscores.set({
            top:0,
            left:0
        });
        canvas.add(blockwithoutunderscores);
});
}

function playSound(){
	x.play();
}
