class ApiService{
    constructor(url){
        this.url = url
    }

    fetchAllCategories = () => fetch(`${this.url}/categories`).then((resp) => resp.json())

    deleteUser = userId => fetch(`${this.url}/users/${userId}`,{method: 'DELETE'})

    fetchUsers = () => fetch(`${this.url}/users`).then((resp) => resp.json())

    fetchPost = (postid) => fetch(`${this.url}/posts/${postid}`).then((resp) => resp.json())

    fetchUserPosts = (userId) => fetch(`${this.url}/users/${userId}/posts`).then((resp) => resp.json())
    
    deletePost = postid => fetch(`${this.url}/posts/${postid}`,{method: 'DELETE'}) 

    fetchAllPosts = category_id => fetch(`${this.url}/categories/${category_id}/posts`).then((resp) => resp.json())

    fetchSubcategories = category => fetch(`${this.url}/${category}/subcategories`).then((resp) => resp.json())
    
    fetchSearchPosts = search => fetch(`${this.url}/posts/search/${search}`).then(resp=>resp.json())

    fetchSearchCategoryPost = (id, search) => fetch(`${this.url}/category/${id}/${search}`).then(resp=>resp.json())

    fetchCreatePost = (userpost) => {
      return fetch(`${this.url}/posts`,{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userpost)
        })
        .then(resp => resp.json())
  }

    fetchLogin = (user) => {
      return fetch(`${this.url}/login`,{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(resp => resp.json())
  }

  
  fetchsignup = (user) => {
      return fetch(`${this.url}/users`,{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(resp => resp.json())
  }

  fetchLocation = (latitude, longitude) => fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f51f687021cb4b56bdb9899d71042ad0`).then(response =>  response.json())

}