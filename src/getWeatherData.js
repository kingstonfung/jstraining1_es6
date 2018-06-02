import displayErrorMessage from './displayErrorMessage';

export default (coordinates, currentWeatherCallback, forecastCallback) => {
  const networkMethod = 'GET';
  const API_KEY = 'abb695648274743abff28bd89d04ed01';

  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&&appid=${API_KEY}&`;
  if (typeof coordinates !== 'string') {
    weatherURL += `lat=${coordinates.lat}&lon=${coordinates.long}`;
  } else {
    weatherURL += `q=${coordinates}`;
  }

  const getCurrentWeatherInfo = () => {
    const networkRequest = new XMLHttpRequest();

    networkRequest.onreadystatechange = () => {
      if (networkRequest.readyState === 4 && networkRequest.status === 200) {
        currentWeatherCallback(networkRequest.responseText);
      } else if (networkRequest.readyState === 4) {
        displayErrorMessage(`Erorr fetching weather info for ${coordinates}`);
        throw new Error('Erorr fetching weather info for ' + coordinates.toString());
      }
    };

    networkRequest.open(networkMethod, weatherURL);
    networkRequest.send();
  };

  const getForecastWeatherInfo = () => {
    const networkRequest = new XMLHttpRequest();

    networkRequest.onreadystatechange = () => {
      if (networkRequest.readyState === 4 && networkRequest.status === 200) {
        forecastCallback(networkRequest.responseText);
      } else if (networkRequest.readyState === 4) {
        throw new Error('Erorr fetching forecast info for ' + coordinates.toString());
      }
    };

    networkRequest.open(networkMethod, weatherURL.replace('/weather?', '/forecast/daily?cnt=5&'));
    networkRequest.send();
  };

  getForecastWeatherInfo();
  getCurrentWeatherInfo();
};
