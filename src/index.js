// import {take} from "./login"
// console.log(take)
document.getElementById("img").addEventListener("mouseover",changeSrc)//when the mouse over change the image
document.getElementById("img").addEventListener("mouseleave",backSrc)//when the mouse leave change the image again
document.getElementById("searchButton").addEventListener("click",pokemonSearch);//search button
document.getElementById("Types").addEventListener("click", typeClick)
let loader=new Image(200,250)
loader.src="https://media4.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif"

function clear(){ 
document.getElementById("name").innerText="Name :" ;
document.getElementById("Height").innerText="Height :" ;
document.getElementById("Weight").innerText="Weight :" ;
document.getElementById("Types").innerText="Types :"
document.getElementById("img").setAttribute("src","");
document.getElementById("img").setAttribute("alt","")

}

//seraching by submit from input
async function  pokemonSearch (){
    clear()
    try{
        document.getElementById("loader").appendChild(loader)
        let list=document.getElementById("pokeList")
        list.innerText=""
        let search =document.getElementById("search").value;
        search=search.toLowerCase();
        const respone= await fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`,{
            method:"GET",
            headers: {  
                Accept: "application/json",
                "Content-Type": "application/json" 
            }
        })
        const data=await respone.json();
        const name=data.name;
        const Height=data.height;
        const Weight=data.weight;
        document.getElementById("Types").innerText="Types :"
        let Types=document.getElementById("Types");
        for(let typeindex of data.types){
            const typ =document.createElement("span")
            typ.innerText=typeindex.type.name +" "
            Types.appendChild(typ)
        }
        const src=data.sprites.front_default
        document.getElementById("name").innerText="Name :" +name;
        document.getElementById("Height").innerText="Height :" +Height;
        document.getElementById("Weight").innerText="Weight :" +Weight;
        document.getElementById("img").setAttribute("src",src);
        document.getElementById("img").setAttribute("alt",search);
        setTimeout(() => {
            document.getElementById("loader").removeChild(loader)
            },1000)
  }
    catch{
        setTimeout(() => {document.getElementById("loader").removeChild(loader)
         }, 500); 
        let list=document.getElementById("pokeList")
        list.innerText="pokemon not found"
        badGuy()

     }
 }
let bad=new Image(250,200)
bad.src="https://pm1.narvii.com/5752/dfa795a403b03df267e44ab0a223fd50bf86c3c3_hq.jpg"

function badGuy(){
    //setTimeout(() => {
        document.getElementById("badguy").appendChild(bad)
    //}, 1500); 
    setTimeout(() =>
        document.getElementById("badguy").removeChild(bad),
        2000)
    

}
//by clicking enter
let input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});
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
    try{
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
    catch{
        alert("click only the types names")
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
    let list=document.getElementById("pokeList")
    list.innerText=""
}
