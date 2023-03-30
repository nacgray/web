var i=0;
var str="吉林大学红十字会组织部副部长：1.参与组织艾滋病防疫宣传 ； 2.参与组织吉林大学献血活动 ； 吉林大学博世校园俱乐部第十三届成员：先后组织参与各种俱乐部活动 ； HLS吉林大学校园大使 ； 2022暑期吉林大学阜阳支教成员：荣获“优秀先进个人”、“优秀班干部”等奖项"
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