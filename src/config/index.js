
const enviromentUrl = new Map();

enviromentUrl.set('localhost', 'http://localhost:8080');
enviromentUrl.set('termtrain.herokuapp.com', 'https://termtrain.herokuapp.com/');

export default enviromentUrl.get(window.location.hostname);