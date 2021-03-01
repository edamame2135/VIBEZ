'use strict';
var joy = "1";
// Grab elements, create settings, etc.
var video = document.getElementById('image');

/*
// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
*/
/* Legacy code below: getUserMedia
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.srcObject = stream;
        video.play();
    }, errBack);
}
*/


// Elements for taking the snapshot


// [END vision_face_detection_tutorial_imports]
// [START vision_face_detection_tutorial_client]
// Creates a client
//const client = new vision.ImageAnnotatorClient();

const img = new Image();
// Trigger photo take
document.getElementById("snap").addEventListener("click", async function() {
    document.getElementById("recom").removeAttribute("disabled");
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 640, 480);
    var dataURL = canvas.toDataURL("image/png");
    dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    /*
    alert(img.src);
    var bin64 = img.src.substring(img.src.indexOf("base64,") +7);
    console.log('bruh');
    
  }); 
  */

  main(dataURL); 
}); 


var mooddict = {
    "UNKNOWN": 0,
    "VERY_UNLIKELY": 1,
    "UNLIKELY": 2,
    "POSSIBLE": 3,
    "LIKELY": 4,
    "VERY_LIKELY": 5
}


// [START vision_face_detection_tutorial_imports]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication




/**
 * TODO(developer): Uncomment the following line before running the sample.
 */


async function main(bin){
    let url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyARSU-ejllRwjQiO08h1FmGFwyuyicnMro"; 
    let data = {
        "requests":[
        {
            "image":{
                "content": bin
              },
            "features":[
            {
                "type":"FACE_DETECTION",
                "maxResults":10
            }
            ]
        }
        ]
    };
    async function getData(url, data) {
        let response = await fetch(url, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let responseData = await response.json();
        return responseData; 
    }

    let response = await getData(url, data);
    console.log(response); 
    let resolved = Promise.resolve(response); 
    resolved.then(function(data) {
        console.log(data.responses[0]["faceAnnotations"][0]);
        var joyval = `${data.responses[0]["faceAnnotations"][0].joyLikelihood}`;
        var sadval = `${data.responses[0]["faceAnnotations"][0].sorrowLikelihood}`;
        if(mooddict[joyval] < mooddict[sadval]){
            joy = 0;
        } else {
            joy = 1;
        }
    });
}

