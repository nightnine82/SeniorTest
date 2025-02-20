// //alert("hello world");
// alert("hello world");
function Onclick(){
    alert("hello world");
}
// const input = Number(document.getElementById("input").value);
// const input2 = Number(document.getElementById("input2").value);
function Sum(){
    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);
    if( isNaN(input1) || isNaN(input2) || input1 === "" || input2 === "" ){
        alert("Please enter a number");
        return;
    }
    alert("The sum is: " +(input1 + input2));
}
