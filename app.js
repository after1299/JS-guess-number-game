let ans  = Math.floor(Math.random()*100);
console.log(ans);
let n1 = 0;
let n2 = 99;


while(true) {
    let yourAns = prompt("請輸入 " + n1 +" ~ " + n2 +" 之間的數字");

    if(yourAns < n1 || yourAns > n2) {
        alert("請輸入正確範圍的數字");
        continue;
    }
    if (yourAns == ans) {
        alert("你猜對了，正確答案是: " + ans);
        break;
    }
    else if(yourAns < ans) {
        n1 = yourAns;
    }
    else if(yourAns > ans) {
        n2 = yourAns;
    }
}