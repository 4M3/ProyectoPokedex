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
var mainarray = [ Bulbasaur , Ivysaur ];

function plus(){
    if (num<152){
    num += 1 ;
    update = "on";
    console.log(update);
    name ();
    height ();
    weight ();
    description();
    type1();
    type2();
    ability();
    hability();
    location();
    update = "off";
    console.log(update);
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
     console.log(document.getElementById("weight").childNodes);
    }
    else{
     var x = document.getElementById("weight"); 
     var t = document.createTextNode(mainarray[num][2]);
      x.removeChild(x.childNodes[1]);
     console.log(document.getElementById("weight").childNodes);
      x.appendChild(t); 
           console.log(document.getElementById("weight").childNodes);
    }
}

function description (){
         if (update === "off"){
     var t = document.createTextNode(mainarray[num][3]);
     document.getElementById("description").appendChild(t);
     console.log(document.getElementById("description").childNodes);
    }
    else{
     var x = document.getElementById("description"); 
     var t = document.createTextNode(mainarray[num][3]);
      x.removeChild(x.childNodes[1]);
     console.log(document.getElementById("description").childNodes);
      x.appendChild(t); 
           console.log(document.getElementById("description").childNodes);
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

function ability (){
    if (update === "off"){
     var t = document.createTextNode(mainarray[num][6]);
     document.getElementById("ability").appendChild(t);
     console.log(document.getElementById("ability").childNodes);
    }
    else{
     var x = document.getElementById("ability"); 
     var t = document.createTextNode(mainarray[num][6]);
      x.removeChild(x.childNodes[1]);
     console.log(document.getElementById("ability").childNodes);
      x.appendChild(t); 
           console.log(document.getElementById("ability").childNodes);
    }
}

function hability (){
    if (update === "off"){
     var t = document.createTextNode(mainarray[num][7]);
     document.getElementById("hability").appendChild(t);
     console.log(document.getElementById("hability").childNodes);
    }
    else{
     var x = document.getElementById("hability"); 
     var t = document.createTextNode(mainarray[num][7]);
      x.removeChild(x.childNodes[1]);
     console.log(document.getElementById("hability").childNodes);
      x.appendChild(t); 
           console.log(document.getElementById("hability").childNodes);
    }
}

function location (){
    if (update === "off"){
     var t = document.createTextNode(mainarray[num][8]);
     document.getElementById("location").appendChild(t);
     console.log(document.getElementById("location").childNodes);
    }
    else{
     var x = document.getElementById("location"); 
     var t = document.createTextNode(mainarray[num][8]);
      x.removeChild(x.childNodes[1]);
     console.log(document.getElementById("location").childNodes);
      x.appendChild(t); 
           console.log(document.getElementById("location").childNodes);
    }
}


function minus (){
    if (num>0){
    num -= 1;
 return num;}
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


