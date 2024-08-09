// var name = 34;
// let name = 34; // all variales. it value can be changed

// const name = 34;// it value can not be changed


// Operator

// Arthimatic Operators/
/* let x = 5;
let y = 3;
let z = x % y;
console.log(z); */
// alert(x+y);
// document.querySelector("h1").innerHTML= "The sum of number is:" + " "+ z;



//Relation Operators 

// let a = 14;
// let b = 7;
// let c = 5;
// document.querySelector("h1").innerHTML= a === b;
// a === b; // Check if the values are same and also the data type is same
// a == b; // Check if the values are same not data type

// a <b  // less then operator 
// a > b // greater then opetator

// document.querySelector("h1").innerHTML= a < b;
// document.querySelector("h2").innerHTML= a > b;

// a <= b //less then or equal to 
// a >=b // greate than or equal to 
// document.querySelector("h1").innerHTML= 14 <=6;
// document.querySelector("h2").innerHTML= 6 >=6;


// if/else method
/* let b=78;

if (b>=33){
    document.querySelector('.tex').innerHTML= "pass";
}
else{
    document.querySelector('.tex').innerHTML= "fail";
}

let d=31;

if (d>=33){
    document.querySelector(".texa").innerHTML= "pass";
}
else{
    document.querySelector(".texa").innerHTML= "fail";
} 




let c=52;
if (c>=33){
    document.querySelector(".texs").innerHTML= "pass";
}
else{
    document.querySelector(".texs").innerHTML= "fail";
}




let e=91;
if (e>=33){
    document.querySelector(".texd").innerHTML= "pass";
}
else{
    document.querySelector(".texd").innerHTML= "fail";
}


function subjectclick(){
    document.querySelector("table").style.color="red";
    document.querySelector("table").style.transform;
} */




// console.log(marks);
function performStatus(obtainedMarks,totalMarks, demo, marksfield ){
    marksfield.innerHTML= obtainedMarks;

    if(obtainedMarks >= totalMarks*0.33){
        demo.innerHTML= "pass";
        
    }
    else{
        demo.innerHTML= "fail";
        
    }
    
}
function showgrade(obtainedMarks,totalMarks,  gradeShow){
    if(obtainedMarks >= totalMarks * 0.9){
        gradeShow.innerHTML="A+";
    }
    else if( obtainedMarks >= totalMarks * 0.8 && obtainedMarks < totalMarks * 0.9){
        gradeShow.innerHTML ="A";
    }
    else if( obtainedMarks >= totalMarks * 0.6 && obtainedMarks < totalMarks * 0.8){
        gradeShow.innerHTML ="B";
    }
    else if(obtainedMarks >= totalMarks * 0.5 && obtainedMarks < totalMarks * 0.6){
        gradeShow.innerHTML = "C";
    }
    else if(obtainedMarks >= totalMarks * 0.33 && obtainedMarks < totalMarks * 0.5){
        gradeShow.innerHTML ="D"
    }
    else{
        gradeShow.innerHTML = "F"
    }
}




function showMarks(){
    let mommarks = document.getElementById("mathmarks").value;
    
    let mf=document.getElementById("moM");
    let MS = document.getElementById("tex");
    performStatus(mommarks, 100, MS, mf);
    let mgrades = document.getElementById("mgrade");
    showgrade( mommarks,100, mgrades);

    let physicsmarks = document.getElementById("physicsmarks").value;
    let pf= document.getElementById("poM");
    let PS = document.getElementById("texp");
    performStatus(physicsmarks, 100, PS, pf)
    let pgrades = document.getElementById("pgrade");
    showgrade( physicsmarks,100, pgrades);

    let chemmarks = document.getElementById("chemmarks").value;
    let cf= document.getElementById("coM");
    let cS = document.getElementById("texc");
    performStatus(chemmarks, 100, cS, cf)
    let cgrades = document.getElementById("cgrade");
    showgrade( chemmarks,100, cgrades);

    let biomarks = document.getElementById("biomarks").value;
    let bf= document.getElementById("boM");
    let bS = document.getElementById("texb");
    performStatus(biomarks, 100, bS, bf)
    let bgrades = document.getElementById("bgrade");
    showgrade( biomarks,100, bgrades);


    let englismarks = document.getElementById("englishmarks").value;
    let ef= document.getElementById("eoM");
    let eS = document.getElementById("texe");
    performStatus(englismarks, 100, eS, ef)
    let egrades = document.getElementById("egrade");
    showgrade( englismarks,100, egrades);


    let urdumarks = document.getElementById("urdumarks").value;
    let uf= document.getElementById("uoM");
    let uS = document.getElementById("texu");
    performStatus(urdumarks, 100, uS, uf)
    let ugrades = document.getElementById("ugrade");
    showgrade( urdumarks,100, ugrades);


    let islmarks = document.getElementById("islmarks").value;
    let tf= document.getElementById("ioM");
    let tS = document.getElementById("texi");
    performStatus(islmarks, 100, tS, tf)
    let igrades = document.getElementById("igrade");
    showgrade( islmarks,100, igrades);


    let pstmarks = document.getElementById("pstmarks").value;
    let sf= document.getElementById("soM");
    let sS = document.getElementById("texs");
    performStatus(pstmarks, 100, sS, sf)
    let sgrades = document.getElementById("sgrade");
    showgrade( pstmarks,100, sgrades);


    // console.log(marks);
}

// i = i +1 ; i++
// for(let i = 4; i <= 25; i++){
    
// }

// let i= 1;
// while(i<=10){
//     console.log(i*3);
//     i++;
// } 

// let i= 7;
// do{
//     console.log(i);
//     i++;

// }while(i<25);


 
// const tableContainer = document.getElementById("showtable");
// // tableContainer.textContent ="2" + " X " + 2 + " = " + 2*2 + '\n' + 34;


// for(let i=1; i <= 10; i++){
//     let tableRow = document.createElement("h4");
//     // console.log(tableRow);
//     tableRow.textContent = "6" + " X " + i + " = " + 6*i ;
//     tableContainer.appendChild(tableRow);
// }
   

 
// let colors = ["red", "green", "blue", "rgb(34, 56, 67)", "#ff34aa"];


// const colorName = document.getElementById('colorName');

// const btn = document.getElementById('btn');

// btn.addEventListener("click", function(){
//     colorName.textContent = colors[getrandomNumber()];
//     // console.log(getrandomNumber());
//     document.body.style.backgroundColor = colors[getrandomNumber()];

// });

// function getrandomNumber(){
//     return Math.floor(Math.random()*colors.length);
// } 




let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F"];


const colorName = document.getElementById('colorName');

const btn = document.getElementById('btn');

// btn.addEventListener("click", function(){

//     let hex = "#";
//     for(let i=0; i<5; i++){

//         hex=hex+colors[getrandomNumber()]; 
//         // console.log(hex);


//         colorName.textContent = hex;
//         document.body.style.backgroundColor = hex;
//     }

// });

// function getrandomNumber(){
//     return Math.floor(Math.random()*colors.length);
// }


// const tablediv =document.getElementById("table8");

// for(let i=1;i<=10;i++){
//     let tableRow=document.createElement("h3");
//     tableRow.textContent="8"+"x"+i+"="+8*i;
//     tablediv.appendChild(tableRow);
// }


// pre-loader
window.addEventListener('DOMContentLoaded', function(){
let loader=document.querySelector('#preloader');
console.log(loader);

loader.classList.add('pre-loader');
window.addEventListener('load', function(){
    loader.classList.remove('pre-loader');
})

});getBoundingClientrect()

