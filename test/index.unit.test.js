import MainApp from '../src/Index';

describe('MainApp', () => {

  test('Should create an event listner once the app is mounted to the document level', () => {
    const spy = jest.spyOn(document, 'addEventListener');
    MainApp(document);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
