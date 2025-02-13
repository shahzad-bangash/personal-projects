
let score = 0;

document.getElementById("inc_btn").onclick = function(){
    score += 1;
    document.getElementById("scorelabel").innerHTML = score;
}

document.getElementById("dec_btn").onclick = function(){
    if(score > 0){
        score -= 1;
        document.getElementById("scorelabel").innerHTML = score;
    }
}

document.getElementById("res_btn").onclick = function(){
    score = 0;
    document.getElementById("scorelabel").innerHTML = score;
}
