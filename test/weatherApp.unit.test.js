import WeatherApp from '../src/weatherApp';

describe('WeatherApp', () => {
  beforeEach(() => {
  });

  test('Should add an event listener for DOMContentLoaded', () => {
    const spy = jest.spyOn(document, 'addEventListener');

    WeatherApp(document);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
