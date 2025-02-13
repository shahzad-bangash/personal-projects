let bulb = document.querySelector("#bulb")
let btn = document.querySelector("#btn");
let color = document.querySelector("#colorChoose");
let input = document.querySelector("#hexColor");

flag = true;

btn.onclick = function(){
    if(flag){

        let inputCol = String(input.value);
        let colIndex = color.options.selectedIndex;
        if(inputCol == ""){
            bulb.style.backgroundColor = color.options[colIndex].value;
        }
        else{
            bulb.style.backgroundColor = inputCol;
        }
        btn.innerHTML = "OFF";
        flag = false;

    }

    else{
        bulb.style.backgroundColor = "#fff";
        btn.innerHTML = "ON";
        flag = true;
    }
} 