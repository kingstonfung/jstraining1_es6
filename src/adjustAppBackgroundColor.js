export default (temperature, doc = document) => {
  let className = '';
  if (temperature < 15) {
    className = 'cool';
  } else if (temperature > 15 && temperature < 25) {
    className = 'warm';
  } else if (temperature > 25) {
    className = 'hot';
  }

  doc.querySelector('body').setAttribute('class', className);
};
