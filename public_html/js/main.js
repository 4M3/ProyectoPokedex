var num = 0;
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
var Bulbasaur1 = ["#002 Bulbasaur", "0.7 m", "6.9 Kg", "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", types[7],types[11], "Overgrow: When HP is below 1/3rd its maximum, power of Grass-type moves is increased by 50%.", "Chlorophyll: When sunny, the Pokémon’s Speed doubles. However, Speed will not double on the turn weather becomes Strong Sunlight.", "Starter Pokemon"];
var mainarray = [ Bulbasaur , Bulbasaur1 ];

function plus(){
    if (num<152){
    num += 1 ;}
}

function name (){
    document.write( mainarray[num][0] );
}

function height (){
    document.write( mainarray[num][1] );
}

function weight (){
    document.write( mainarray[num][2] );
}

function description (){
    document.write( mainarray[num][3] );
}

function type1() {
    var img = document.createElement("img");
    img.src = mainarray[num][4][0];
    img.alt = mainarray[num][4][1];
    img.style.margin = "0 3px";
    document.getElementById("type1").appendChild(img);
}

function type2 (){
    var img = document.createElement("img");
    img.src = mainarray[num][5][0];
    img.alt = mainarray[num][5][1];
    img.style.margin = "0 3px";
    document.getElementById("type1").appendChild(img);
}

function ability (){
    document.write( mainarray[num][6] );
}

function hability (){
    document.write( mainarray[num][7] );
}

function location (){
    document.write( mainarray[num][8] );
}


function minus (){
    if (num>0){
    num -= 1;
 return num}
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


