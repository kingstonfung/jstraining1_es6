import { santizeCurrentData, santizeForecastData } from './santizeCurrentData';
import renderForecastInformation from './renderForecastInformation';
import renderCurrentInformation from './renderCurrentInformation';
import geoDetect from './geoDetect';
import getWeatherData from './getWeatherData';
import displayErrorMessage from './displayErrorMessage';

export default (doc) => {
  const weatherApp = {};

  doc.addEventListener('DOMContentLoaded', () => {
    const onCurrentDataReceived = data => {
      try {
        const weatherData = JSON.parse(data);
        const sanitizedData = santizeCurrentData(weatherData);
        renderCurrentInformation(sanitizedData, doc);
      } catch (error) {
        const errorMessage = 'Error parsing weather data with reason:' + error.message;
        displayErrorMessage(errorMessage, doc);
        throw new Error(errorMessage);
      }
    };

    const onForecastDataReceived = data => {
      try {
        const forecastData = JSON.parse(data);
        const sanitizedData = santizeForecastData(forecastData);
        renderForecastInformation(sanitizedData, doc);
      } catch (error) {
        const errorMessage = 'Error parsing forecast data with reason:' + error.message;
        displayErrorMessage(errorMessage, doc);
        throw new Error(errorMessage);
      }
    };

    doc.querySelector('form .button').addEventListener('click', evt => {
      const searchValue = doc.querySelector('.searchbar').value;
      getWeatherData(searchValue, onCurrentDataReceived, onForecastDataReceived);
      evt.preventDefault();
      evt.stopPropagation();
    });


    const onGeoDataReceived = (coordinates) => {
      getWeatherData(coordinates, onCurrentDataReceived, onForecastDataReceived);
    };

    geoDetect(onGeoDataReceived);
  });
};
