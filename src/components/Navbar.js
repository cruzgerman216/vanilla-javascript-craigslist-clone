class Navbar {
    constructor(){
        this.render();
        this.addEventListener();
    }

    render(){
        document.body.innerHTML = "";
        if(state.userstate.islogin()){
            document.body.innerHTML = `
            <div class="navigator" id="home" >
                <span id="homenav" class="navlink"style="bored: 1px solid black; border-radius: 100%; padding:3px;background-color:white;cursor:pointer"  ">CL</span> >
                <span id="navtext" class="navlink">${state.userstate.email}</span>
                <span id="logout" class="navlink" style="float:right;" >[Logout]</span>
                </div>
            `
        }else{
            document.body.innerHTML = `  
            <div class="navigator" id="home" >          
                <span id="homenav" class="navlink"style="bored: 1px solid black; border-radius: 100%; padding:3px;background-color:white;cursor:pointer"  ">CL</span> >
                <span id="navtext" class="navlink">account log in</span>
                <span id="logout" class="navlink" style="float:right;display:none;" >[Logout]</span>
             </div>
        `
        }
    }

    addEventListener(){
        document.querySelector("#logout").addEventListener('click', this.logout);
        document.querySelector("#homenav").addEventListener('click', this.clickHome);
    }

    logout = () =>{
        this.clickHome()
        state.userstate.logout();
      }

    clickHome = () => {
        new Home();
    }
}