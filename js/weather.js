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

function loadWeather(location, woeid) {
    $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'c',
      success: function(weather) {
        city = weathr.city;
        temp = weather.temp+'&deg;';
        wcode = '<img class="weathericon" src="images/weathericons/' + weather.code +'.svg">';
                                wind = '<p>' + weather.wind.speed + '</p><p>' + weath.units.speed '</p>';
                                humidity = weather.humidity + ' %';

                                
