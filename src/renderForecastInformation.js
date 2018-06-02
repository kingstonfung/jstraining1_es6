import { getShortDayOfWeek } from './dateModels';

export default (data, doc = document) => {
  let html = '';
  let nowDayOfWeek = new Date().getDay() + 1;

  data.forEach(forecastData => {
    if (nowDayOfWeek > 6) nowDayOfWeek = 0;
    html += `
      <div class="block">
        <h3 class="secondary">${getShortDayOfWeek(nowDayOfWeek++)}</h3>
        <span class="wi wi-owm-${forecastData.icon}"></span>
        <h2 class="high">${forecastData.high}</h2>
        <h4 class="secondary">${forecastData.low}</h4>
      </div>
    `;
  });

  doc.querySelector('.forecast').innerHTML = html;
};
