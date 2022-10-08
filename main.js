function startClassfication()
{
  navigator.mediaDevices.getUserMedia({audio : true});
  Classfier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/txgZgIm5R/model.json",modelready)
 }
function modelready()
{
  Classfier.classify(gotresults);
}

function gotresults(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    random_no_r= Math.floor(Math.random()*255)+1;
    random_no_g= Math.floor(Math.random()*255)+1;
    random_no_b= Math.floor(Math.random()*255)+1;
  
    document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accerucy - "+(results[0].confidence*100).toFixed(2)+"%" ;
    document.getElementById("result_label").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
  
  
    img1=document.getElementById("ear");
    img2=document.getElementById("dog");
    img3=document.getElementById("cat");
    img4=document.getElementById("lion");
    img5=document.getElementById("cow");
  
    if(results[0].label == "barking"){
      img1.src="ear1.png";
      img2.src="dog-2 copy.jpg";
      img3.src="cat1.jpg";
      img4.src="lion1.jpg";
      img5.src="cow.jpg";
    }
    else if(results[0].label == "roar"){
      img1.src="ear1.png";
      img2.src="dog-1 copy.jpg";
      img3.src="cat1.jpg";
      img4.src="lion.jpg";
      img5.src="cow.jpg";
    }
    else if(results[0].label == "meowing"){
      img1.src="ear1.png";
      img2.src="dog-1 copy.jpg";
      img3.src="cat.jpg";
      img4.src="lion1.jpg";
      img5.src="cow.jpg";
    }
    else if(results[0].label == "mooing"){
      img1.src="ear1.png";
      img2.src="dog-1 copy.jpg";
      img3.src="cat1.jpg";
      img4.src="lion1.jpg";
      img5.src="cow.jpg";
    }
    else{
      img1.src="ear.png";
      img2.src="dog-1 copy.jpg";
      img3.src="cat1.jpg";
      img4.src="lion1.jpg";
      img5.src="cow1.jpg";
    }
  }}
  