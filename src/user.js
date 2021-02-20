class User {
  constructor(session){
    if(this.islogin()){
      this.id = session.id;
      this.email = session.email;
      this.city = session.city;
    }else{
      this.id = -1;
      this.email = "";
      this.city = "";
    }
  }

  islogin(){
    let condition;
    sessionStorage.length != 0 ? condition = true : condition = false;
    return condition;
  }

  logout(){
    sessionStorage.clear()
    this.id = -1;
    this.email = "";
    this.city = "";
  }

  renderMyAccount(){
    document.body.innerHTML = ``;
    new Navbar(); 
    const myaccount = document.createElement("div");
    myaccount.classList.add("useraccount");
    myaccount.setAttribute("id", "user_account")
    document.body.append(myaccount);
    myaccount.innerHTML += 
    `
    <fieldset class="field" >
      <legend style="font-size: .95em">( page: 1 )</legend>
      <div class="tablepost">
        <div >
          <div class="row adjustable" >
            <div class="col-1" style="border-radius: 4px; background-color: #ffffff; border: 1px solid #aaaaaa">
              status
            </div>
            <div class="col-3 tabelepostheader">
              manage
            </div>
            <div class="col-5 tabelepostheader">
              posting title
            </div>

            <div class="col-2 tabelepostheader">
              posted date
            </div>

            <div class="col-1 tabelepostheader">
              id
            </div>
          </div>
          <div id="myposts" class="posts">
          </div>
        </div>
      </div>
    </fieldset> 
    `;
    api.fetchUserPosts(sessionStorage.id).then((posts)=>{
      const myposts = document.getElementById("myposts")
      myposts.innerHTML = "";
      posts.map(post => {
        myposts.innerHTML += 
        `
          <div class="row adjustable">
            <div class="col-1 mypostentry" style="background-color:lightgreen;">
              status
            </div>
            <div class="col-3 mypostentry">
              <a class="link" data-id="${post.id}" name="display">display</a>
              <a class="link" data-id="${post.id}" name="delete">delete</a>
              <a class="link">edit</a>
            </div>
            <div class="col-5 mypostentry">
              ${post.title}
            </div>
            <div class="col-2 mypostentry">
              ${post.updated_at}
            </div>

            <div class="col-1 mypostentry">
              ${post.id}
            </div>
          </div>
        `
      })
    })
    myposts.addEventListener("click", (event)=>{
      const post = new Post;
      if(event.target.attributes["data-id"]){
        if(event.target.attributes["name"].value =="delete"){
          post.deletepost(event.target.attributes["data-id"].value)
        }else if(event.target.attributes["name"].value =="display"){
          post.display(event.target.attributes["data-id"].value)
        }              
      }
    })
  }
}
