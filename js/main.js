import { data } from "../utils/data.js";
const container = document.getElementById ("grid")
const dataList = informacion => informacion.map(
    post=> 
    `
    <div class="cubo cubo-1">
    <img class="img-blogs" src="${post.image}" alt=""   width="50">
    
    <h2 class="second-word">${post.title}</h2>
    <p class="text-blogs">${post.description}</p>
    
    <a class="button-blogs" href="${post.url}">Ir al post</a>
    </div>
     `
)
const insertPost = () =>{
    const post = dataList(data) 
    return container.innerHTML=post.join(" ")
}
insertPost() 