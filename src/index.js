import 'styles/index.scss';
import WeatherApp from './weatherApp';

const initApp = (doc) => {
  WeatherApp(doc);
};

if (process.env.NODE_ENV !== 'test') initApp(document);
export default initApp;
