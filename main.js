var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult= function(event){
    console.log(event);
 var content= event.results[0][0].transcript;

 if (content=="take my selfie"){
    speak();
 }
 
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function(){
        img_id= "selfie_1";
        take_snapshot()
        speak_data = "Taking your Selfie in 10 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
        },5000)
    setTimeout(function(){
        img_id= "selfie_2";
        take_snapshot()
        speak_data = "Taking your Selfie in 15 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
         },10000)
    setTimeout(function(){
        img_id= "selfie_3";
        take_snapshot()        
        },15000)
    
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}

function take_snapshot(){
    console.log(img_id)

    Webcam.snap(function(data_uri){
     if(img_id=="selfie_1"){
         document.getElementById("result1").innerHTML= '<img_id="selfie1" src="'+data_uri+'"/>';
     }
     if(img_id=="selfie_2"){
        document.getElementById("result2").innerHTML= '<img_id="selfie2" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie_3"){
        document.getElementById("result3").innerHTML= '<img_id="selfie3" src="'+data_uri+'"/>';
    }

    })
}
