class PostForm{
  constructor(){
    this.render();
  }
    render(){
        document.body.innerHTML = "";
        new Navbar();
          let div = document.createElement("div");
          div.classList.add("container");
          div.classList.add("createpost");
          document.body.append(div);
          div.setAttribute("id", "post_forms")

        div.innerHTML =
        `
        <form id="create-post-1">
        <p>please limit each posting to a single area and category, once per 48 hours</p>
        <p><b>what type of posting is this:</b> (see prohibited list before posting.)</p>
    
        <input type="radio" name="posting" value="jobs" checked="checked">
        <label for="posting">job offered</label><br>
        <input type="radio" name="posting" value="gigs">
        <label for="posting">gig offered (I'm hiring for a short-term, small or odd job)</label><br>
        <input type="radio" name="posting" value="resumes">
        <label for="posting">resume / job wanted</label><br>
        <br>

        <input type="radio" name="posting" value="housing">
        <label for="posting">housing offered</label><br>
        <input type="radio" name="posting" value="housing">
        <label for="posting">housing wanted</label><br>
        <br>

        <input type="radio" name="posting" value="for sale">
        <label for="posting">for sale by owner</label><br>
        <input type="radio" name="posting" value="for sale">
        <label for="posting">for sale by dealer</label><br>
        <input type="radio" name="posting" value="for sale">
        <label for="posting">wanted by owner</label><br>
        <input type="radio" name="posting" value="for sale">
        <label for="posting">wanted by dealer</label><br>
        <br>

        <input type="radio" name="posting" value="services" >
        <label for="posting">service offered</label><br>
        <br> 

        <input type="radio" name="posting" value="community"  >
        <label for="posting">community</label><br>
        <input type="radio" name="posting" value="community">
        <label for="posting">event / class</label><br>
        <input type="submit" value="continue">
        </form>
        `
         div = document.createElement("div");
        div.classList.add("footer");
        document.body.append(div);

        div.innerHTML += 
        `
        <div class="footer" >@2020 craigslist 
        <a class="footerlinks" href="#">help</a> 
        <a class="footerlinks" href="#">privacy</a>
        <a class="footerlinks" href="#">feedack</a>
        <a class="footerlinks" href="#">terms</a>
        <a class="footerlinks" href="#">about</a>
        <a class="footerlinks" href="#">mobile</a>
      </div>
        `
        let form1 = document.querySelector("#create-post-1");
        form1.addEventListener("submit", this.TypeOfPosting)
    }

    TypeOfPosting = (event) =>{
        event.preventDefault();
        let posting = document.getElementsByName("posting")
        let getvalue;
        for(let i = 0; i < posting.length; i++){
          if(posting[i].checked){
            getvalue = posting[i].value;
          }
        }
      
        let post = document.querySelector(".createpost");
        post.innerHTML = "";

        post.innerHTML = 
        `
          <form id="create-post-2">
            <p>please choose a category: (see prohibited list before posting.)</p>
      
          </form>
        `
      
        let form2 = document.querySelector("#create-post-2")
        api.fetchSubcategories(getvalue)
        .then((categories) => {
          for (const category of categories){
            form2.innerHTML += 
      
            `
            <input type="radio" id="category" name="category" value="${category.name}" >
            <label for="category">${category.name}</label><br>
          
            `
          }
         form2.innerHTML +=
      
          `
          <input type="submit" value="continue">
      
          `
        });
      
        form2.addEventListener("submit", this.createPostByUser)
      }

      createPostByUser = event => {
        event.preventDefault();
      
        let posting = document.getElementsByName("category")
        let getvalue;
        for(let i = 0; i < posting.length; i++){
          if(posting[i].checked){
            getvalue = posting[i].value;
          }
        }
        let post = document.querySelector(".createpost");
      
        post.innerHTML = "";
        post.innerHTML +=
        `
          <form id="create-post-3" >
            <div style="width: 100%">
              <div class="row">
                <div class="col-4">
                  <label for="title">posting title</label><br>
                  <input type="text" id="title" name="title" checked="checked"><br>
                </div>
      
                <div class="col-4">
                  <label for="location">city or neighborhood</label><br>
                  <input type="text" id="location" name="location" ><br>
                </div>
      
                <div class="col-4">
                  <label for="location">postal code</label><br>
                  <input type="text" id="location" name="location" ><br>
                </div>
      
              </div>
              <div class="row">
                <label for="description">description</label><br>
                <textarea id="description" name="description" style="width:100%; height:7em;"></textarea><br>
          
                <input type="text" id="category" name="category" value="${getvalue}" hidden>
              </div>
            </div>
      
            <input type="submit" value="continue">
          </form>
      
        `
        
        let form2 = document.querySelector("#create-post-3");
        form2.addEventListener("submit", this.informationPost)
      }

      informationPost = (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value
        const location = document.getElementById("location").value
        const description = document.getElementById("description").value
        const category = document.getElementById("category").value
      
        const userpost = {};
        userpost.details = {title: title, location: location, description: description};
        userpost.email = state.userstate.email
        userpost.category = category
      
        api.fetchCreatePost(userpost)
        .then (post => {
          document.querySelector(".createpost").innerHTML = "";
          document.querySelector(".createpost").style.display = "none";
          const postpage = new Post;
          postpage.display(post.id)
        })
      
      }
}