window.addEventListener("deviceorientation", handleOrientation);
window.addEventListener("devicemotion", handleMotion);
window.addEventListener("devicelight", handleLight);

function handleOrientation(e) {}

function handleMotion(e) {}

function handleLight(e) {}

var geo = window.navigator.geolocation;

function geoFindMe() {

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        //Geolocation is not supported by browser
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}