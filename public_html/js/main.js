var num = 0;
var update = "off";
var image;
var types = [["img/bug.gif","bug"],
    ["img/dragon.gif","dragon"],
    ["img/electric.gif","electric"],
    ["img/fighting.gif","fighting"],
    ["img/fire.gif","fire"],
    ["img/flying.gif","flying"],
    ["img/ghost.gif","ghost"],
    ["img/grass.gif","grass"],
    ["img/ground.gif","ground"],
    ["img/ice.gif","ice"],
    ["img/normal.gif","normal"],
    ["img/poison.gif","poison"],
    ["img/psychic.gif","psychic"],
    ["img/rock.gif","rock"],
    ["img/water.gif","water"],
    [" "," "]];
var Bulbasaur = ["#001 Bulbasaur", "0.7 m", "6.9 Kg", "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", types[7],types[11], "Overgrow: When HP is below 1/3rd its maximum, power of Grass-type moves is increased by 50%.", "Chlorophyll: When sunny, the Pokémon’s Speed doubles. However, Speed will not double on the turn weather becomes Strong Sunlight.", "Starter Pokemon"];
var Ivysaur = ["#002 Ivysaur", "1.0 m", "13.0 Kg", "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.", types[7],types[11], "Overgrow: When HP is below 1/3rd its maximum, power of Grass-type moves is increased by 50%.", "Chlorophyll: When sunny, the Pokémon’s Speed doubles. However, Speed will not double on the turn weather becomes Strong Sunlight.", "Evolve Bulbasaur"];
var Venusaur = ["#003 Venusaur", "2.0 m", "100.0 Kg", "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.", types[7],types[11], "Overgrow: When HP is below 1/3rd its maximum, power of Grass-type moves is increased by 50%.", "Chlorophyll: When sunny, the Pokémon’s Speed doubles. However, Speed will not double on the turn weather becomes Strong Sunlight.", "Evolve Ivysaur"];
var Charmander = ["#004 Charmander", "0.6 m", "8.5 Kg", "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.", types[4],types[15], "Blaze: When HP is below 1/3rd its maximum, power of Fire-type moves is increased by 50%.", "Solar Power: During sunshine, the Pokémon’s Special Attack raises to 1.5 times but HP decreases by 1/8th the maximum HP every turn.", "Starter Pokemon"];
var mainarray = [ Bulbasaur, Ivysaur, Venusaur, Charmander ];

function plus(){
    if (num<152){
    num += 1 ;
    update = "on";
    console.log(update);
    image();
    name ();
    height ();
    weight ();
    description();
    type1();
    type2();
    ability();
    hability();
    location();
    baseimg ();
    firstimg ();
    secondimg ();
    update = "off";
    console.log(update);
}

}

function minus (){
    if (num>0){
    num -= 1;
    update = "on";
    console.log(update);
    image();
    name ();
    height ();
    weight ();
    description();
    type1();
    type2();
    ability();
    hability();
    location();
    baseimg ();
    firstimg ();
    secondimg ()
    update = "off";
    console.log(update);
 }
}

function image() {
    if (update === "off"){  
     var img = document.createElement("img");
      img.src = "img/"+ num +".png";
      img.alt = mainarray[num][0];
      img.style.width = "75%";
      img.style.height = "75%";
     document.getElementById("image").appendChild(img);  
    }

    else{
      var uimg = document.createElement("img");
      uimg.src = "img/"+ num +".png";
      uimg.alt = mainarray[num][0];
      uimg.style.width = "75%";
      uimg.style.height = "75%";
     img = document.getElementById("image");     
     img.replaceChild(uimg, img.childNodes[1]);   
    }
    }
    
function name (){
    if (update === "off"){
     var t = document.createTextNode(mainarray[num][0]);
     document.getElementById("name").appendChild(t);
    }
    else{
     var x = document.getElementById("name"); 
     var t = document.createTextNode(mainarray[num][0]);
      x.removeChild(x.childNodes[1]);
      x.appendChild(t); 
    }
}

function height (){
        if (update === "off"){
     var t = document.createTextNode(mainarray[num][1]);
     document.getElementById("height").appendChild(t);
    }
    else{
     var x = document.getElementById("height"); 
     var t = document.createTextNode(mainarray[num][1]);
      x.removeChild(x.childNodes[1]);
      x.appendChild(t); 
    }
}

function weight (){
     if (update === "off"){
     var t = document.createTextNode(mainarray[num][2]);
     document.getElementById("weight").appendChild(t);
    }
    else{
     var x = document.getElementById("weight"); 
     var t = document.createTextNode(mainarray[num][2]);
      x.removeChild(x.childNodes[1]);
      x.appendChild(t); 
    }
}

function description (){
         if (update === "off"){
     var t = document.createTextNode(mainarray[num][3]);
     document.getElementById("description").appendChild(t);
    }
    else{
     var x = document.getElementById("description"); 
     var t = document.createTextNode(mainarray[num][3]);
      x.removeChild(x.childNodes[1]);
      x.appendChild(t); 
    }
}

function type1() {
    if (update === "off"){  
     var img = document.createElement("img");
      img.src = mainarray[num][4][0];
      img.alt = mainarray[num][4][1];
      img.style.margin = "0 3px";
     document.getElementById("type").appendChild(img);  
    }

    else{
      uimg = document.createElement("img");
      uimg.src = mainarray[num][4][0];
      uimg.alt = mainarray[num][4][1];
      uimg.style.margin = "0 3px";
     img = document.getElementById("type");     
     img.replaceChild(uimg, img.childNodes[2]);   
    }
    }

function type2 (){
if (mainarray[num][5][0] !== ""){
  if (update === "off"){  
     var img = document.createElement("img");
      img.src = mainarray[num][5][0];
      img.alt = mainarray[num][5][1];
      img.style.margin = "0 3px";
     document.getElementById("type").appendChild(img);  
    }

    else{
      uimg = document.createElement("img");
      uimg.src = mainarray[num][5][0];
      uimg.alt = mainarray[num][5][1];
      uimg.style.margin = "0 3px";
     img = document.getElementById("type");     
     img.replaceChild(uimg, img.childNodes[3]);   
    }
    }
  else {
     rem = document.getElementById("type");
             rem.removeChild(rem.childNodes[3]);
             console.log(rem.childNodes);
      
  }
    }

function ability (){
    if (update === "off"){
     var t = document.createTextNode(mainarray[num][6]);
     document.getElementById("ability").appendChild(t);
    }
    else{
     var x = document.getElementById("ability"); 
     var t = document.createTextNode(mainarray[num][6]);
      x.removeChild(x.childNodes[1]);
      x.appendChild(t); 
    }
}

function hability (){
    if (update === "off"){
     var t = document.createTextNode(mainarray[num][7]);
     document.getElementById("hability").appendChild(t);
    }
    else{
     var x = document.getElementById("hability"); 
     var t = document.createTextNode(mainarray[num][7]);
      x.removeChild(x.childNodes[1]);
      x.appendChild(t); 
    }
}

function location (){
    if (update === "off"){
     var t = document.createTextNode(mainarray[num][8]);
     document.getElementById("location").appendChild(t);
    }
    else{
     var x = document.getElementById("location"); 
     var t = document.createTextNode(mainarray[num][8]);
      x.removeChild(x.childNodes[1]);
      x.appendChild(t); 
    }
}
function baseimg (){
    if (update === "off"){
        if (num === 0 || num === 3 || num === 6){
          var img = document.createElement("img");
      img.src = "img/"+ num +".png";
      img.alt = mainarray[num][0];
      img.style.width = "50%";
      img.style.height = "50%";
     document.getElementById("baseimg").appendChild(img); 
          console.log(document.getElementById("baseimg").childNodes);
        }
    }
    else{
      if (num === 0 || num === 3 || num === 6){
          uimg = document.createElement("img");
      uimg.src = "img/"+ num +".png";
      uimg.alt = mainarray[num][0];
      uimg.style.width = "50%";
      uimg.style.height = "50%";
     img = document.getElementById("baseimg");     
     img.replaceChild(uimg, img.childNodes[2]); 
        }
    }
}

function firstimg (){
    if (update === "off"){
        if (num === 0 || num === 3 || num === 6){
          var img = document.createElement("img");
      img.src = "img/"+ (num + 1) +".png";
      img.alt = mainarray[(num + 1)][0];
      img.style.width = "50%";
      img.style.height = "50%";
     document.getElementById("firstimg").appendChild(img);
        }
    }

    else{
      if (num === 0 || num === 3 || num === 6){
          uimg = document.createElement("img");
      uimg.src = "img/"+ (num + 1) +".png";
      uimg.alt =  mainarray[(num + 1)][0];
      uimg.style.width = "50%";
      uimg.style.height = "50%";
     img = document.getElementById("firstimg");     
     img.replaceChild(uimg, img.childNodes[2]); 
        }
    }
}

function secondimg (){
    if (update === "off"){
if (num === 0 || num === 3 || num === 6){
          var img = document.createElement("img");
      img.src = "img/"+ (num + 2) +".png";
      img.alt = mainarray[(num + 2)][0];
      img.style.width = "50%";
      img.style.height = "50%";
     document.getElementById("secondimg").appendChild(img);   
        }
    }
    else{
        if (num === 0 || num === 3 || num === 6){
          uimg = document.createElement("img");
      uimg.src = "img/"+ (num + 2) +".png";
      uimg.alt = mainarray[(num + 2)][0];
      uimg.style.width = "50%";
      uimg.style.height = "50%";
     img = document.getElementById("secondimg");     
     img.replaceChild(uimg, img.childNodes[2]); 
        }
    }
}


     /* console.log(document.getElementById("image").childNodes);*/

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


