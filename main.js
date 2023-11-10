function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2I0k368d-/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var lion = 0;
var  cat = 0;
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
document.getElementById("result_label").innerHTML = "Som detectado e de um "+results[0].label;
document.getElementById("result_count").innerHTML = 'cachorro'+dog+'gato'+cat+'leao'+lion;
img = document.getElementById('animal_image')

        if(results[0].label=="cachorro"){
            img.src ='11029418.jpg';
            dog = dog+1;
        }
        else if(results[0].label=="gato"){
            img.src ='11029432.jpg';
            cat = cat+1;
        }
        else if(results[0].label=="leao"){
            img.src ='11521213.jpg';
            lion = lion+1;
        }
        else{
            img.src ='listen.gif';
        }
    }

}
