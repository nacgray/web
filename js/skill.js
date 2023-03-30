var i=0;
var str="作为一名程序员，我是一个不断学习和探索计算机科学的人。我热爱编程，并将其视为一种探索计算机世界的方式。我相信计算机科学是一个不断发展和变化的领域，因此我总是保持着好奇心和学习的热情。我的技能包括但不限于：熟练掌握至少一种编程语言，如Java、Python、C++等；熟悉常见的开发框架和工具，如Spring、Django、Git等；了解基本的数据结构和算法，如线性代数、概率论等；具备良好的团队协作能力和沟通能力；熟练使用常用的办公软件，如Excel、Word等。我对于技术的追求是不断提升自己的编程能力，同时也乐于分享我的知识和经验。我相信计算机科学是一个充满机会和挑战的领域，我希望能够与更多的人一起探索这个领域，并帮助他们解决问题。"
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