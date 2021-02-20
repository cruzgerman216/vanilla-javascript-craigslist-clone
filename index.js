const api = new ApiService("http://localhost:3000/");
// const api = new ApiService("https://craigslistclone-api.herokuapp.com/")
const state = {userstate: new User(sessionStorage)};
new Home();

fetch("https://craigslistclone-api.herokuapp.com/users/1").then(res=>res.json()).then(data=>console.log(data))