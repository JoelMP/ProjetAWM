/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
document.addEventListener('deviceready', onDeviceReady, false);
var $pic = $('#getPicture');

function onDeviceReady() {
    document.addEventListener("volumeupbutton", callbackFunction);
    document.addEventListener("backbutton", onBackKeyDown);
    $pic.click(takePicture());
}

function onBackKeyDown(e) {
    e.preventDefault();
    alert('Back  Button  is  Pressed!');
}

function callbackFunction() {
    alert('Volume  Up  Button  is  pressed!');
}

function takePicture() {
    alert('photo');
    // on  indique  le nom de la  fonction  en cas
    // de  reussite  et en cas d echec
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType:  Camera.DestinationType.DATA_URL
    });
    // L image a ete  prise  avec  succes.
    // On l affiche  dans la  balise  image
    function onSuccess(imageData) {
        $("#myImage").attr("src", "data:image/jpeg;base64 ," + imageData);
    }
    // echec : on  affiche  le  message d erreur
    function onFail(message) {
        alert('Failed  because:' + message);
    }
}