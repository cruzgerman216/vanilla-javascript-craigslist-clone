class Home {
  constructor(){
    this.render();
    this.getCategories();
    this.displayCalendar();
    this.getlocation();
    this.addEventListeners();
  }

    render(){
      document.body.innerHTML = "";
        const home = 
        `
        <div class="container main" style="width: 980px; padding-top: 15px;font-size:smaller;">
         <div class="row" style="text-align:center;">
          <div class="col-2 sidebar" style="flex: 0 0 20%; max-width:20%;">
            <div class="row" style="display:block;">
              <h1 style="font-size: 2em"><a class="link" >craigslist</a></h1>
            </div>
            <div class="row" style="display:block; padding: 5px;" >
              <a class="link" id="homecreatepost" style="background-color: #ffc" >
                create a posting
              </a>
            </div>
            <div class="row" id="session" style="display:block; padding:5px;">
              <div id="myaccount">my account</div>
            </div>
            <div class="row"style="display:block; padding:5px;" >
              <form id="searchbar">
              <input id="searchbarinput" style="width: 90%; text-align:center; border: 1px black solid;"placeholder="search craigslist" input="submit">
              </form>
            </div>
            <div class="row" style="display:block; padding:10px; ">
                <a class="link" >event calendar</a>
                <div class="container" style="margin-right:0;" id="calendar">
                </div>
            </div>
            <div style="padding-top:15px;padding-bottom:15px">
              <div class="link" style="padding:2px">
                craigslist app
              </div>
              <div class="link" style="padding:2px">
                help, faq, abuse, legal
              </div>
              <div class="link" style="padding:2px">
                avoid scams & fraud
              </div>
              <div class="link" style="padding:2px">
                personal safety tips
              </div>
              <div class="link" style="padding:2px">
                terms of use
              </div>
              <div class="link" style="padding:2px">
                privacy policy
              </div>
              <div class="link" style="padding:2px">
                system status
              </div>
            </div>
            <div style="padding-top:15px;padding-bottom:15px">
              <div class="link" style="padding:2px">
                about craigslist
              </div>
              <div class="link" style="padding:2px">
                craigslist open source
              </div>
              <div class="link" style="padding:2px">
                craigslist blog
              </div>
              <div class="link" style="padding:2px">
                best-of-craigslist
              </div>
              <div class="link" style="padding:2px">
                "craigslist joe"
              </div>
              <div class="link" style="padding:2px">
                crig newmark philanthropies
              </div>
            </div>
          </div>
          <div class="col-9"  style="flex: 0 0 70%; max-width:70%;">
            <div class="row headers"  style="display:block; margin-right:10px; margin-left:10px;padding:5px;">
              <h4 id="header">Welcome</h4>
            </div>
            <div class="container" id="categories">
              <div class="row">
                <div class="col-5" id="column-1">
                    <div>                  
                      <h5 class="subheaders link" name="community" data-id="1">community</h5>
                      <div  class="container grid-container-two-column" id="category-1" style="font-size:12px; padding:0px;">
                      </div>
                    </div>
                  <div>                  
                    <h5 class="subheaders link" name="services" data-id="1">services</h5>
                    <div class="container grid-container-two-column" id="category-61">
                    </div>
                  </div>

                <div>                  
                    <h5 class="subheaders link" name="discussion forums" data-id="1">discussion forums</h5>
                    <div class="container grid-container-three-column" id="category-137">
                    </div>
                </div>

                </div>
                <div class="col-5" >
              <div>                  
                  <h5 class="subheaders link" name="housing" data-id="1">housing</h5>
                  <div class="container grid-container-one-column" id="category-19" >
                  </div>
              </div>

              <div>                  
                  <h5 class="subheaders link" name="for sale" data-id="1">for sale</h5>
                  <div class="container grid-container-two-column" id="category-82">
                  </div>
              </div>

                </div>

                <div class="col-2" style="padding:0px;" >
                <div>                  
                  <h5 class="subheaders link" name="jobs" data-id="1">jobs</h5>
                  <div class="container grid-container-one-column" id="category-30" style="padding:0px;" >
                  </div>
                </div>

                <div>                  
                  <h5 class="subheaders link" name="gigs" data-id="1">gigs</h5>
                  <div class="container grid-container-two-column" id="category-127"  > 
                  </div>
                </div>

                <div class="container">
                  <div id="category-136">
                  <h5 class="subheaders link" name="resumes" data-id="1">resumes</h5>
                  </div>
                </div>
              </div>
           </div>
          </div>
        </div>
          <div class="col-1 sidebar"  style="flex: 0 0 9%; max-width:9%;">
            <div class="row" style="display:block; padding-top:10px">
              <select>
                <option value="english">english</option>
                <option value="spanish">Spanish</option>
              </select>
              <br><br>
            </div>
            <div class="row" style="display:block;">
              <p >dallas</p>
            </div>
            <div class="row" style="display:block;">
              <p >columbia</p>
            </div>
          </div>
        </div>
      </div>
        `
        document.body.innerHTML = home;
        const footer = document.createElement("div");
        footer.classList.add("footer");
        document.body.append(footer);

        footer.innerHTML += 
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
    }

  getCategories() {
    api.fetchAllCategories()
    .then(categories => {
      categories.forEach(category=>{
        const parent_id = category.parent_id;
        const subcategory_name = category.name;
        const subcategory_id = category.id;
        if(parent_id){
          const category_div = document.getElementById(`category-${parent_id}`);
          category_div.innerHTML += 
            `
              <div class="linkcategory" name="${subcategory_name}" data-id="${subcategory_id}" >
                ${subcategory_name}
              </div>
            `
        }
      })
    });
  }

  addEventListeners(){
    document.getElementById("myaccount").addEventListener("click",()=>{
    if(state.userstate.islogin()){
      state.userstate.renderMyAccount();
    }else{
      new Login;
    }
    })

    document.getElementById("homecreatepost").addEventListener("click", ()=>{
      if(state.userstate.islogin()){
        new PostForm;
      }else{
        new Login;
      }
    })

    document.getElementById("categories").addEventListener("click", event =>{
      if(event.target.attributes["data-id"]){
        const category = {
           name: event.target.attributes["name"].value,
           id: event.target.attributes["data-id"].value
        }

          api.fetchAllPosts(category.id).then(posts => {
            const postpage = new Post;
            postpage.displayposts(category,posts);
          });
        }
    })

    document.getElementById("searchbar").addEventListener("submit",event=>{
      event.preventDefault();
      const search = event.target.querySelector(`#searchbarinput`).value;
      api.fetchSearchPosts(search).then(posts=>{
        const postpage = new Post;
        const category = {
          name: search
        }
        postpage.displayposts(category,posts);
      })
    })
  }

  getlocation(){
    if(state.userstate.islogin() || state.userstate.city != ""){
      document.getElementById("header").innerHTML = state.userstate.city; 
    }else{
      const sucessfulLookup =  (position) => {
        const { latitude, longitude} = position.coords; 
        api.fetchLocation(latitude, longitude)
        .then(location =>  {
          state.userstate.city = location.results[0].formatted.split(",")[1].substring(1);
          document.getElementById("header").innerHTML = location.results[0].formatted.split(",")[1].substring(1); 
        })
      };
      navigator.geolocation.getCurrentPosition(sucessfulLookup)
    }
  }

  displayCalendar(){
    const dated = new Date();
    const firstday = new Date(dated.getFullYear(), dated.getMonth(),1);
    const day_of_week = firstday.getDay();
    const calendar_days = [];
    if(day_of_week == 1){
      for(let i = day_of_week; i < 30;i++){
        calendar_days.push(i);
      }
    }else{
      const lastdaydate = new Date(dated.getFullYear(), dated.getMonth(),0);
      const lastday = lastdaydate.getDate();
      for(let i = -day_of_week+2; i < 30;i++){
        if(Math.sign(i) == -1 || i == 0){
          calendar_days.push(lastday+i);
        }else{
          calendar_days.push(i);

        }
      }
    }
  
    const div = document.getElementById("calendar");
    let getcol = ``;
    for(let i=1; i<29; i++){
      getcol += 
        `
            <div class="col-1" >
            ${calendar_days[i-1]}
          </div>
        `
      if(i%7 == 0){
        div.innerHTML += 
        `
          <div class="row">
            ${getcol}
          </div>
        `
        getcol = ``;
      }
  
    }
  
    let getcal = `
    <div class="row">
      <div class="col-1">M</div>
      <div class="col-1">T</div>
      <div class="col-1">W</div>
      <div class="col-1">T</div>
      <div class="col-1">F</div>
      <div class="col-1">S</div>
      <div class="col-1">S</div>
    </div>
  
    `;
  
    getcal += div.innerHTML; 
    div.innerHTML = getcal;
  }
}