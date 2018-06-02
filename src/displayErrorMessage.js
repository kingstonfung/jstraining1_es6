export default (message, doc = document) => {
  const errorLabel = doc.querySelector('label[for="search"]');
  errorLabel.innerHTML = message;
};
