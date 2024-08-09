// let path = window.location.pathname;
// console.log(path);


// let navelement= document.querySelectorAll('#ink');
// console.log(navelement);


// navelement.forEach(function(element){
//     console.log(element);
//     element.addEventListener('click', function(e){
//         console.log(element.querySelector('a'));
//         let alink=e.currentTarget.querySelector('a');
//         console.log(alink);
//         let link= alink.href;
//         console.log(link);
//         if(link.includes(path)){
//             element.classList.add('imageback');
//         }
//     });


// });


let menu = document.querySelector('.main-menu');
let btn = document.querySelector('.toggle-button');
console.log(menu);
console.log(btn);

$('.main-menu')



btn.addEventListener('click', function(){
    if(menu.style.display !== "block"){
        // console.log('yes');
        menu.style.display='block';
        menu.classList.add('main-menu-screen');
        
    }
    else{
        menu.style.display ='none';
        menu.classList.remove('main-menu-screen');

    }
    
});


let path = window.location.pathname;
// console.log(path);


let navelement= document.getElementById('tag');
let element=document.getElementById('bag');
console.log(element);


    if(element.href.includes(path)){
        
        navelement.classList.add('imageback');
    }
    else{
        navelement.classList.remove('imageback');
    }
 



// let element=document.getElementById('bag');



    // if(element.href.includes(path)){
        
    //     navelement.classList.add('imageback');
    // }
    // else{
    //     navelement.classList.remove('imageback');
    // }
    
// let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F"];


// const colorName = document.getElementById('colorName');

// const btn = document.getElementById('btn');

// btn.addEventListener("click", function(){

//     let colore = "#";
//     for(let i=0; i<6; i++){

//         colore=colore+colors[getrandomNumber()]; 
//         // console.log(hex);


//         colorName.textContent = colore;
//         document.body.style.backgroundColor = colore;
//     }

// });

// function getrandomNumber(){
//     return Math.floor(Math.random()*colors.length);
// }

// const tablediv =document.getElementById("table8");

// for(let x=1;x<=10;x++){
//     let tableRow=document.createElement("h3");
//     tableRow.textContent="8"+"x"+x+"="+8*x;
//     tablediv.appendChild(tableRow);
// }