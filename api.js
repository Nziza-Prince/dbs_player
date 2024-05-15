let races;
let roles
let naming;
let counter=10;
let button = document.getElementById("btn1");
let label = document.getElementById("paragraph");
let guessedName=document.getElementById("guessedName")
let guessedRace=document.getElementById("guessedRace")
let guessedRole=document.getElementById("guessedRole")
let results=document.querySelector(".results")
let header=document.getElementById("header")
let nameresult=document.getElementById("nameresult")
let raceresult=document.getElementById("raceresult")
let roleresult=document.getElementById("roleresult")
let rules=document.getElementById("rules")
let ruker=document.getElementById("ruler")
let head = document.getElementById("he")
let race=document.getElementById("race")
let  role=document.getElementById("role")
let desc=document.getElementsByClassName('desc')
let data;

results.style.display="none"

ruker.onclick=()=>{
    rules.style.display="block"
}
function showRules(){
    rules.style.display='block'
}

let names=document.getElementById("nameOfPokemon");
async function fetchData(){
    if(names.value ==''){
        alert('please enter a character')
    }
    else{
        
        try{
            let response=await fetch(`https://dragonball-api.com/api/characters/${names.value}`)
        if(!response.ok){
            throw new Error("Sorry couldnt fetch the api")
        }
        else{
            let img=document.getElementById("sprite")
           data = await response.json()
            let displayedImage = data.image;
            img.src=displayedImage
            img.style.display="block";
        }
    }
    
    catch(error){
        alert("Sorry the character was not found try another number please")
    }
    
}

}
function description(){
    races=data.race
    naming=data.name
    roles=data.affiliation
    head.textContent=`name:${naming}`
    race.textContent=`race:${races}`
    role.textContent=`role:${roles}`
}
button.onclick=()=>{
    if(counter==10){
        label.textContent=counter
        let interval = setInterval(function(){
            counter--
            label.textContent=counter
            if(counter<=0){
                clearInterval(interval)
                counter=10
                description();
                resultDisplay()
            }
        },1000)
    }
}
function resultDisplay(){
   if(guessedName.value == naming && guessedRace.value == races && guessedRole.value ==roles){
        header.innerHTML=`You guessed the right traits`
        nameresult.innerHTML=`you said name is ${guessedName.value}:real name ${naming}`
        raceresult.innerHTML=`you said race is ${guessedRace.value}:real race ${races}`
        roleresult.innerHTML=`you said role is ${guessedRole.value}:real role ${roles}`
        results.style.display="block"
}       
else{
    header.innerHTML=`You guessed the wrong traits`
    nameresult.innerHTML=`you said name is ${guessedName.value} : real name ${naming}`
    raceresult.innerHTML=`you said race is ${guessedRace.value} : real race ${races}`
    roleresult.innerHTML=`you said role is ${guessedRole.value} : real role ${roles}`
    results.style.display="block"
}
}





