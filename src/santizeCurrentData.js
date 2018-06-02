export const santizeCurrentData = data => (
  {
    icon: data.weather[0].id,
    temperature: Math.round(data.main.temp),
    city: data.name,
    country: data.sys.country,
    condition: data.weather[0].description,
    wind: data.wind.speed,
    humidity: data.main.humidity
  }
);

export const santizeForecastData = data => {
  const createSingleDayData = singleDayData => (
    {
      high: Math.round(singleDayData.temp.max),
      low: Math.round(singleDayData.temp.min),
      icon: singleDayData.weather[0].id
    }
  );

  return data.list.map(dateData => createSingleDayData(dateData));
};
