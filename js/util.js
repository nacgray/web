window.addEventListener('load', function () {//让我的js有效果
    var i = 0;
    function move() {
        /*每次移动的像素*/
        i -= 1;
        document.getElementById("img").style.marginLeft = i + "px";
        /*移至指定位置重置滚动图*/
        if (i == -550) {
            document.getElementById("img").style.marginLeft = "0px";
            i = 0;
        }
    }
    function start() {
        /*设置每次移动的时间间隔*/
        setInterval("move()", 40);
    }
    var oDiv = document.getElementById("div1");
    var oUl = document.getElementsByTagName("ul")[0];
    var oLi = document.getElementsByTagName("li");
    var oA = document.getElementsByTagName("a");
    var timer = null;
    var iSpeed = 8;
    //复制一遍ul
    oUl.innerHTML += oUl.innerHTML;
    //ul的高度是所有li高度之和，复制ul之后的整个ul的高度就是li的长度乘以一个li的高度
    oUl.style.height = oLi.length * oLi[0].offsetHeight + "px";

    function fnMove() {
        //图片向上移动时的条件，即在div里的ul的offsetTop小于一个ul的高度
        if (oUl.offsetTop < -oUl.offsetHeight / 2) {
            //将整个复制的ul向下拖拽直至整个ul中的第一张图归位到起点
            oUl.style.top = 0;
        }
        //图片向下移动时的条件，即在div里的ul的offsetTop大于等于0
        else if (oUl.offsetTop >= 0) {
            //将整个复制的ul向上拖拽直至整个ul中的第一张图归位到起点
            oUl.style.top = -oUl.offsetHeight / 2 + "px";
        }
        //给ul一个速度让整个ul的offsetTop增加或减少，速度为正则向下移动，速度为负则向上移动
        oUl.style.top = oUl.offsetTop + iSpeed + "px";
    }
    //从上往下
    iSpeed = 8;
    //自动滚动
    timer = setInterval(fnMove, 40);
    //当鼠标移动到div里面的时候图片滚动暂停，此时清除定时器即可。
    oDiv.onmouseover = function () {
        clearInterval(timer);
    }
    //当鼠标移出div的时候图片继续滚动，此时重新加载定时器。
    oDiv.onmouseout = function () {
        timer = setInterval(fnMove, 40);
    }


    //让图片滚动更加顺畅
    function throttle(func, wait, mustRun) {
        var timeout,
            startTime = new Date();

        return function () {
            var context = this,
                args = arguments,
                curTime = new Date();

            clearTimeout(timeout);
            // 如果达到了规定的触发时间间隔，触发 handler
            if (curTime - startTime >= mustRun) {
                func.apply(context, args);
                startTime = curTime;
                // 没达到触发间隔，重新设定定时器
            } else {
                timeout = setTimeout(func, wait);
            }
        };
    };
    // 实际想绑定在 scroll 事件上的 handler
    function realFunc() {
        console.log("Success");
    }
    // 采用了节流函数
    window.addEventListener('scroll', throttle(realFunc, 500, 1000));
})