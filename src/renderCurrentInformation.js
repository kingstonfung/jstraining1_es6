import { getDayOfWeek, getMonthName} from './dateModels';
import adjustAppBackgroundColor from './adjustAppBackgroundColor';
import displayErrorMessage from './displayErrorMessage';

export default (data, doc = document) => {
  const cityElement = doc.querySelector('.city');
  cityElement.innerHTML = `${data.city}, ${data.country}`;

  const mainTemperatureElement = doc.querySelector('.main-temperature .value');
  mainTemperatureElement.innerHTML = data.temperature;

  const mainTemperatureIconElement = doc.querySelector('.main-icon.wi');
  mainTemperatureIconElement.classList.add(`wi-owm-${data.icon}`);

  const currentTimeElement = doc.querySelector('.current-time');
  const now = new Date();
  const dayOfWeek = getDayOfWeek(now.getDay());
  const monthName = getMonthName(now.getMonth());
  currentTimeElement.innerHTML = `${dayOfWeek}, ${monthName} ${now.getDate()}, ${now.getFullYear()}`;

  const currentConditionElement = doc.querySelector('.current-condition');
  currentConditionElement.innerHTML = data.condition;

  const windSpeedElement = doc.querySelector('.wind .value');
  windSpeedElement.innerHTML = data.wind;

  const humidityElement = doc.querySelector('.humidity .value');
  humidityElement.innerHTML = data.humidity;

  adjustAppBackgroundColor(data.temperature);
  displayErrorMessage('', doc);
};
