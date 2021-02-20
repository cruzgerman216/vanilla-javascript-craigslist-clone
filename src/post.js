class Post {
  constructor(id, title, description) {
    this.id = id
    this.title = title;
    this.description = description;
  }

  display(postid){
    document.body.innerHTML = "";
    new Navbar();
    const postdiv = document.createElement("div");
    postdiv.setAttribute("id", "post")
    document.body.append(postdiv);
    const getpost = document.createElement("div");
    getpost.setAttribute("id", "getpost")
    postdiv.append(getpost);

    api.fetchPost(postid)
    .then(post => {
      getpost.innerHTML += `
      <div class="container">
        <div class="row">
          <div class="col-4">
              <div class="row" style="text-align:center;">
                <div class="col-3"><button class="replybutton">reply</button></div>
                <div class="col-3">
                  <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg></div><div>favorite</div>
                </div>
                <div class="col-3"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.533.133a1.75 1.75 0 00-1.066 0l-5.25 1.68A1.75 1.75 0 001 3.48V7c0 1.566.32 3.182 1.303 4.682.983 1.498 2.585 2.813 5.032 3.855a1.7 1.7 0 001.33 0c2.447-1.042 4.049-2.357 5.032-3.855C14.68 10.182 15 8.566 15 7V3.48a1.75 1.75 0 00-1.217-1.667L8.533.133zm-.61 1.429a.25.25 0 01.153 0l5.25 1.68a.25.25 0 01.174.238V7c0 1.358-.275 2.666-1.057 3.86-.784 1.194-2.121 2.34-4.366 3.297a.2.2 0 01-.154 0c-2.245-.956-3.582-2.104-4.366-3.298C2.775 9.666 2.5 8.36 2.5 7V3.48a.25.25 0 01.174-.237l5.25-1.68zM6.78 5.22a.75.75 0 10-1.06 1.06L6.94 7.5 5.72 8.72a.75.75 0 001.06 1.06L8 8.56l1.22 1.22a.75.75 0 101.06-1.06L9.06 7.5l1.22-1.22a.75.75 0 10-1.06-1.06L8 6.44 6.78 5.22z"></path></svg></div><div>hide</div></div>
                <div class="col-3"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg></div><div>flag</div></div>
              </div>
          </div>
          <div class="col-4" style="text-align:center">
          Posted
          </div>
          <div class="col-4" style="text-align:right;">
          <span class="link">print</span>
          </div>
        </div>
      </div>
    `;
      const column = 
      `
        <div class="row">
          <div class="col-8">
          <h3>${post.title}</h3>
          <div>${post.description}</div>
          </div>
          <div class="col-4">
            <img style="width:100%"src="https://media.wired.com/photos/5a6a61938c669c70314b300d/master/pass/Google-Map-US_10.jpg"/>
          </div>

        </div>
        <p class="posting">post id: ${post.id}</p>
        <p class="posting">posted</p>
        <p class="posting"><button class="button link">email to friend</button></p>
        <p class="posting link">best of</p>
        `

      getpost.innerHTML += column;
    });
  }

   displayposts(category, posts){
    document.body.innerHTML = "";
    new Navbar();
    const displayposts = document.createElement("div");
    displayposts.setAttribute("id", "mainposts")
    document.body.append(displayposts);

    displayposts.innerHTML = `
    
    <div id="mainposts" >
    <a name="top"><a>
    <form id="search" class="searchnav">
      <input id="searchinput" type="text" style="width:55%; color:#969494;font-size:1.3em" placeholder="search" class="button">
      <button class="button" input="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path></svg></button>
    </form>

    <div class="sidenav">

      <div id="sidenavname" class="link">
      </div>
      <form>
        <input type="checkbox" id="titlesonly" name="titlesonly" value="titles">
        <label for="titlesonly">search titles only</label><br>

        <input type="checkbox" id="hasimage" name="hasimage" value="hasimage">
        <label for="hasimage">has image</label><br>

        <input type="checkbox" id="posttoday" name="posttoday" value="posttoday">
        <label for="posttoday">posted today</label><br>

        <input type="checkbox" id="bundleduplicates" name="bundleduplicates" value="bundleduplicates">
        <label for="bundleduplicates">bundle duplicates</label><br>

        <input type="checkbox" id="areas" name="areas" value="areas">
        <label for="areas">include nearby areas</label><br>
        <button class="button link">reset</button>
        <button class="button link">update saerch</button> 
      </form>
    </div>
    <div class="sidecontent" id="posts">
    </div>
  </div>`

    document.getElementById("sidenavname").innerHTML = category.name;
    document.getElementById("searchinput").placeholder = `search ${category.name}`;
    
    const getposts = document.getElementById("posts");
    posts.map(post =>{
      const month = post.created_at.split("T")[0].split("-")[1]
      const day = post.created_at.split("T")[0].split("-")[2]
  
      getposts.innerHTML += 
      `
        <div class="link" data-id=${post.id}>${month}-${day} ${post.title}(${state.userstate.city})</div>
      `
    })
    getposts.innerHTML += `<button  class="button"><a href="#top">^back to top<a></button>`;
    document.getElementById("mainposts").addEventListener("click",(event)=>{
      const data = event.target.attributes["data-id"];
      if(data){
        this.display(data.value)
      }
    })

    document.getElementById("search").addEventListener("submit",event=>{
      event.preventDefault();
      const search = event.target.querySelector(`#searchinput`).value;
      if(search && category.id){
        api.fetchSearchCategoryPost(category.id,search).then(posts=>{
          const postpage = new Post;
          postpage.displayposts(category,posts);
      })
    }else{
      api.fetchSearchPosts(search).then(posts=>{
        const postpage = new Post;
        const category = {
          name: search
        }
        postpage.displayposts(category,posts);
      })
    }
    })
  }

  deletepost(id){
    const postid = parseInt(id);
    api.deletePost(postid).then(()=>state.userstate.renderMyAccount())
  }
}
