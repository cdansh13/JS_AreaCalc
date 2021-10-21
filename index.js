function rectShow(){
    const rectForm = document.getElementById("rectForm");
    const check = document.getElementById("check");
    rectForm.style.display='block';
    check.style.display='none';
}
function squShow(){
    const squForm = document.getElementById("squForm");
    const check = document.getElementById("check");
    squForm.style.display='block';
    check.style.display='none';
}
function triShow(){
    const triForm = document.getElementById("triForm");
    const check = document.getElementById("check");
    triForm.style.display='block';
    check.style.display='none';
}

function rect(){
    const rectForm = document.getElementById("rectForm"); 
    const num1 = document.getElementById("num1"); 
    const num2 = document.getElementById("num2"); 
    console.log(num1.value,num2.value)
    output = num1.value*num2.value
    console.log(output)
    out = document.getElementById("out").innerHTML = output;
}
function tri(){
    const triForm = document.getElementById("triForm"); 
    const num1 = document.getElementById("h"); 
    const num2 = document.getElementById("b"); 
    console.log(h.value,b.value)
    output = (h.value*b.value)/2
    console.log(output)
    out = document.getElementById("out1").innerHTML = output;
}
function squ(){
    const squForm = document.getElementById("squForm"); 
    const num1 = document.getElementById("side"); 
    // const num2 = document.getElementById("num2"); 
    console.log(side.value)
    output = side.value*side.value
    console.log(output)
    out = document.getElementById("out2").innerHTML = output;
}