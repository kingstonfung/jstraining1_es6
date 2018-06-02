/* eslint-disable no-console, no-unused-vars */

export default callback => {
  const FALLBACK_COORDINATES = {
    lat: 53.541621,
    long: -113.486238
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  const onGeoDetectSuccessful = function (position) {
    var crd = position.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    callback({ lat: crd.latitude, long: crd.longitude });
  };

  const onGeoDetectFailed = function (error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
    callback(FALLBACK_COORDINATES);
  };

  // navigator.geolocation.getCurrentPosition(onGeoDetectSuccessful, onGeoDetectFailed, options);
  callback(FALLBACK_COORDINATES);
};
/* eslint-enable no-console, no-unused-vars */
