(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
var joy = 1;
// Grab elements, create settings, etc.
var video = document.getElementById('image');


// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

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

var client_id = "1004398263726-kj10ggpkou7lq2svu2h2etk1goq7tj30.apps.googleusercontent.com";
var client_secret = "qUDoub0zzw-iBCgor9klzvKv";
var callback_uri = "http://localhost:8888";


// Elements for taking the snapshot


// [END vision_face_detection_tutorial_imports]
// [START vision_face_detection_tutorial_client]
// Creates a client
//const client = new vision.ImageAnnotatorClient();

const img = new Image();
// Trigger photo take
document.getElementById("snap").addEventListener("click", async function() {

    /*
    const vision = require('@google-cloud/vision');
    const auth = require('google-auth-library');
    const http = require('http');
    const url = require('url');
    const open = require('open');
    const destroyer = require('server-destroy');


    const oauth2client = new auth.OAuth2Client(client_id, client_secret, callback_uri);
    const authUrl = oauth2client.generateAuthUrl({
        access_type: 'offline',
        scope: vision.ImageAnnotatorClient.scopes
    });
    const tokenResponse = await oauth2client.getToken(code);
    oauth2client.setCredentials(tokenResponse.tokens);
    const client = new vision.ImageAnnotatorClient({auth: oauth2client});
    */
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 640, 480);
    var dataURL = canvas.toDataURL("image/png");
    dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    /*
    const [result] = await client.faceDetection('./resources/sad.jpg');
    const faces = result.faceAnnotations;
  
    console.log('Faces:');
    faces.forEach((face, i) => {
        console.log(`  Face #${i + 1}:`);
        console.log(`    Joy: ${face.joyLikelihood}`);
        console.log(`    Anger: ${face.angerLikelihood}`);
        console.log(`    Sorrow: ${face.sorrowLikelihood}`);
        console.log(`    Surprise: ${face.surpriseLikelihood}`);
    });
    /*
    alert(img.src);
    var bin64 = img.src.substring(img.src.indexOf("base64,") +7);
    console.log('bruh');
    
  }); 
  */

  main(dataURL); 
}); 





// [START vision_face_detection_tutorial_imports]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication




/**
 * TODO(developer): Uncomment the following line before running the sample.
 */

console.log("hello");

async function main(bin){
    let url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyARSU-ejllRwjQiO08h1FmGFwyuyicnMro"; 
    let ldata = {
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
        if(`${data.responses[0]["faceAnnotations"][0].joyLikelihood}`=="VERY_UNLIKELY"){
            joy = 0;
        } else {
            joy = 1;
        }
        console.log(joy);
    });
    console.log("....");
    //const [result] = await client.faceDetection(fileName);

    /* const faces = result.faceAnnotations;
    console.log('Faces:');
    faces.forEach((face, i) => {
    console.log(`  Face #${i + 1}:`);
    console.log(`    Joy: ${face.joyLikelihood}`);
    console.log(`    Anger: ${face.angerLikelihood}`);
    console.log(`    Sorrow: ${face.sorrowLikelihood}`);
    console.log(`    Surprise: ${face.surpriseLikelihood}`);
    }); */

}


},{}]},{},[1]);
