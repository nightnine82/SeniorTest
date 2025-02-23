class Color{
    constructor(){
        this. colorType = [
            "#2336FB",
            "#497068",
            "#599F96",
            "#1544C7",
            "#3542AF",
            "#15FCA9",
            "#10EF45",
            "#722031",
    
        ];
    }
    generate(){
        let  random_col = this.colorType[Math.floor(Math.random() * this.colorType.length)];
        document.getElementById("code").innerHTML = random_col;
        document.getElementById("code").style.color = random_col;
        document.getElementById("title").style.color = random_col;
        document.getElementById("container1").style.backgroundColor = random_col;
        document.getElementById("container1_2").style.backgroundColor = random_col;
        document.getElementById("reset").style.backgroundColor = random_col;
        document.getElementById("container3").style.backgroundColor = random_col
    }
    reset(){
        document.getElementById("code").innerHTML = "#2336FB";
        document.getElementById("code").style.color = "#2336FB";
        document.getElementById("title").style.color = "#2336FB";
        document.getElementById("container1").style.backgroundColor = "#2336FB";
        document.getElementById("container1_2").style.backgroundColor = "#2336FB";
        document.getElementById("reset").style.backgroundColor = "#2336FB";
        document.getElementById("container3").style.backgroundColor = "#2336FB";
    }

}
const color = new Color();
