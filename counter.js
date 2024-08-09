// let count = document.getElementById('count');
// const btns = document.querySelectorAll(".btn");
// let counter = 1;
// btns.forEach(function(e){
//     let ele = e.classList;
//     e.addEventListener("click", function(){
//         if (ele.contains("previous")){
//             // console.log("Hy");
//             counter--;
//         }
//         else if(ele.contains("next")){
//             counter++;

//         }
//         else{
//             counter = 0;

//         }
//         count.innerHTML=counter;
//     });
    
// });

// color changer
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F"];


const colorName = document.getElementById('colorName');

const btn = document.getElementById('btn');

btn.addEventListener("click", function(){

    let colore = "#";
    for(let i=0; i<6; i++){

        colore=colore+colors[getrandomNumber()]; 
        // console.log(hex);


        colorName.textContent = colore;
        document.body.style.backgroundColor = colore;
    }

});

function getrandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
