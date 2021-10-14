document.getElementById("img").addEventListener("onmouseenter",changeSrc)//when the mouse over change the image
document.getElementById("img").addEventListener("onmouseleave",backSrc)//when the mouse leave change the image again
document.getElementById("searchButton").addEventListener("click",pokemonSearch);//search button
async function  pokemonSearch (){
    let search =document.getElementById("search").value
    const respone= await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
    const data=await respone;
    const name=data.data.name;
    const Height=data.data.height;
    const Weight=data.data.weight;
    const Types=data.data.types[0].type.name
    const src=data.data.sprites.front_default
    document.getElementById("name").innerText="Name :" +name
    document.getElementById("Height").innerText="Height :" +Height
    document.getElementById("Weight").innerText="Weight :" +Weight
    document.getElementById("Types").innerText="Types :" +Types
    document.getElementById("img").setAttribute("src",src)
    console.log(data)
}
async function changeSrc(){
    let search =document.getElementById("search").value
    const respone= await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
    const data=await respone;
    document.getElementById("img").setAttribute("src",data.data.sprites.back_default)
}

async function backSrc(){
    let search =document.getElementById("search").value
    const respone= await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
    const data=await respone;
    document.getElementById("img").setAttribute("src",data.data.sprites.front_default)
}
