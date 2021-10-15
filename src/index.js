document.getElementById("img").addEventListener("mouseover",changeSrc)//when the mouse over change the image
document.getElementById("img").addEventListener("mouseleave",backSrc)//when the mouse leave change the image again
document.getElementById("searchButton").addEventListener("click",pokemonSearch);//search button
document.getElementById("Types").addEventListener("click", typeClick)
//seraching by submit from input
async function  pokemonSearch (){
    try{
        let search =document.getElementById("search").value
        const respone= await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
        const data=await respone;
        const name=data.data.name;
        const Height=data.data.height;
        const Weight=data.data.weight;
        document.getElementById("Types").innerText="Types :"
        let Types=document.getElementById("Types");
        for(let typeindex of data.data.types){
            const typ =document.createElement("span")
            typ.innerText=typeindex.type.name +" "
            Types.appendChild(typ)
        }
        const src=data.data.sprites.front_default
        document.getElementById("name").innerText="Name :" +name;
        document.getElementById("Height").innerText="Height :" +Height;
        document.getElementById("Weight").innerText="Weight :" +Weight;
        document.getElementById("img").setAttribute("src",src);
        document.getElementById("img").setAttribute("alt",search);
    }
    catch{
        return alert ("not found")
    }
}
//change the img by putting the mouse over
async function changeSrc(){
    let search =event.target.alt
    const respone= await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
    const data=await respone;
    document.getElementById("img").setAttribute("src",data.data.sprites.back_default)
}
//changing the image back when the mouse isnt over 
async function backSrc(){
    let search =event.target.alt
    const respone= await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
    const data=await respone;
    document.getElementById("img").de
    document.getElementById("img").setAttribute("src",data.data.sprites.front_default)
}
//print all pokemons with the same type
async function typeClick(){
    if(event.target.textContent!==Types){
        let type=(event.target.textContent) 
        const respone= await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        const data=await respone;
    let list=document.getElementById("pokeList")
    list.innerText=""
    for (let poke of data.data.pokemon){
        let li=document.createElement("li")
        li.innerText=poke.pokemon.name
        li.addEventListener("click",searchByClick)
        list.appendChild(li)
    }    
    }
}
//by clicking the name he comes up in the web 
async function searchByClick(){
    let search =event.target.textContent
    const respone= await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
    const data=await respone;
    const name=data.data.name;
    const Height=data.data.height;
    const Weight=data.data.weight;
    document.getElementById("Types").innerText="Types :"
    let Types=document.getElementById("Types");
    for(let typeindex of data.data.types){
        const typ =document.createElement("span")
        typ.innerText=typeindex.type.name +" "
        Types.appendChild(typ)
    }
    const src=data.data.sprites.front_default
    document.getElementById("name").innerText="Name :" +name;
    document.getElementById("Height").innerText="Height :" +Height;
    document.getElementById("Weight").innerText="Weight :" +Weight;
    document.getElementById("img").setAttribute("src",src);
    document.getElementById("img").setAttribute("alt",search);
    }
