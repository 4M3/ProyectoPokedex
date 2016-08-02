var num = 0;
var image;
var types = ["bug","dragon","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water",""];
var Bulbasaur = ["#001 Bulbasaur", "0.7 m", "6.9 Kg", "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", types[7],types[11], "Overgrow: When HP is below 1/3rd its maximum, power of Grass-type moves is increased by 50%.", "Chlorophyll: When sunny, the Pokémon’s Speed doubles. However, Speed will not double on the turn weather becomes Strong Sunlight.", "Starter Pokemon"];
var Bulbasaur1 = ["#001 Bulbasaur", "0.7 m", "6.9 Kg", "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", types[7],types[11], "Overgrow: When HP is below 1/3rd its maximum, power of Grass-type moves is increased by 50%.", "Chlorophyll: When sunny, the Pokémon’s Speed doubles. However, Speed will not double on the turn weather becomes Strong Sunlight.", "Starter Pokemon"];
var mainarray = [ Bulbasaur , Bulbasaur1 ];
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

function type1 (){
    document.write("src = 'img/"+ mainarray[num][4] +".gif'" );
}

function type2 (){
    document.write( mainarray[num][5] );
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

function plus (){
    document.write( mainarray[num][0] );
}

function minus (){
    document.write( mainarray[num][0] );
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


