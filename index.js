// const api = new ApiService("http://localhost:3000/");
const api = new ApiService("https://craigslistclone-api.herokuapp.com/")
const state = {userstate: new User(sessionStorage)};
new Home();
