let count = 0;

document.getElementById("dec").onclick = function() {
    count--;
    document.getElementById("num").innerHTML = count;
    if( count == -10 ){
        alert("Hz Teii Ng");
        console.log("Hz Teii Ng");
    }
}

document.getElementById("inc").onclick = function() {
    count++;
    document.getElementById("num").innerHTML = count;
    if( count == 10 ){
        alert("Khom Mes Tv Na ");
        console.log("Khom Mes Tv Na");
    }
}

document.getElementById("set").onclick = function() {
    count = 0;
    document.getElementById("num").innerHTML = count;
    if( count == 0 ){
        alert("Teii Ban Reset Jg Kmeng Toch");
        console.log("Teii Ban Reset Jg Kmeng Toch");
    }
}
