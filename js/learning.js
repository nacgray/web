var i=0;
var str="2021.09-2022.01：《C语言程序设计》、《计算机导论》； 2022.03-2022.07：《面向对象程序设计》、《离散数学I；r 2022.09-2023.01：《数据结构》、《计算机组成与设计》、《离散数学II》； 2023.01-2023.07：《算法设计与分析》、《Java程序设计》、《计算机系统结构》、《计算机操作系统》、《微机系统》、《网页设计》《Linux》 "
window.onload=function typing(){
            //获取div
    var mydiv=document.getElementById("text");
    mydiv.innerHTML+=str.charAt(i);
    i++;
    var id=setTimeout(typing,60);
    if(i==str.length){
        clearTimeout(id);
        }
    }