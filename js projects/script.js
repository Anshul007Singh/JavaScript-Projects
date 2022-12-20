 // StopWatch............
 
 let min=0;
 let sec=0;
 let count=0;

 let timer= false;

function stopwatch(){

    if(timer==true){
        count=count+1;
    
    if(count==100){
        sec= sec+1;
        count=0;
    }
    if(sec ==60){
        min = min+1;
        sec=0;
    }

    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("count").innerHTML=count;

   setTimeout("stopwatch()",10)
}
}

function startHandler(){
    timer=true
   stopwatch()
}


function stopHandler(){
    timer= false
    console.log("end");
}


function resetHandler(){

    timer=false;

   min=0;
   sec=0;
   count=0;

   document.getElementById("min").innerHTML=min;
   document.getElementById("sec").innerHTML=sec;
   document.getElementById("count").innerHTML=count;
}  

// ......... Clock..........//

function clocktime(){
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("textchange").innerHTML = "CountDown";

    let t= setTimeout(()=>clocktime(),1000);
}


// ........... Counter...........//

let counter = 0;

incrementHandler =()=>{
        counter++
       document.getElementById("counter").innerHTML=counter;
}
decrementHandler =()=>{
    counter--
    document.getElementById("counter").innerHTML=counter;
}
resetHandler =()=>{
    let reset = 0;
    document.getElementById("counter").innerHTML=reset;
}

//............. Calculator ..............//

display=(val)=>{
 document.getElementById("result").value += val;
 return val;
}

solve=()=>{
    let x = document.getElementById("result").value;
    let y = eval(x);

    document.getElementById("result").value = y
    return y;

}

clearInput =()=>{
    document.getElementById("result").value = "";
}

backspace=()=>{
    let val = document.getElementById("result").value;
    document.getElementById("result").value = val.substr(0, val.length -1)
}


// ............. Form Validation ............//



function onSubmit(e){

    e.preventDefault();
    let text;


if(document.getElementById(userName).value == ""){
    text= "Enter the Valid Username";
    alert(text);
    return false;
}
// if(document.myForm.name.value){}
// return true;

}