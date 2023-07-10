document.addEventListener("DOMContentLoaded",()=>{
    const loader = document.getElementById("loader")
    const userlist = document.getElementById("user-list")

    loader.style.display='none'

    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then((data)=>{
        data.forEach((user)=>{
            const listItem= document.createElement("li")
        listItem.textContent=user.name
        userlist.appendChild(listItem)
        })
    })
})