if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather (position.coords.latitude + ',' + position.coords.longitude);
    });
} else {
    loadWeather("Toronto, CA", "");
}

$(document).ready(function() {
    setInterval(getWeather, 10000);
}
