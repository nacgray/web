window.onload = function () {//让我的js有效果
    //定时器更新时间
    setInterval(function () {
        var nowTime = new Date();
        var targetTime = new Date('2023-10-29');

        //得到时间戳
        var timeStamp = targetTime - nowTime;

        //方法一：数学方法
        //天数
        var day = parseInt(timeStamp / (1000 * 60 * 60 * 24));
        //小时
        var hour = parseInt(timeStamp % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        //分钟
        var minute = parseInt(timeStamp % (1000 * 60 * 60) / (1000 * 60));
        //秒
        var second = parseInt(timeStamp % (1000 * 60) / 1000);

        var date = document.getElementById('info');
        //向info盒子中添加倒计时
        date.innerText = ('还剩' + day + '天' + hour + '小时' + minute + '分钟' + second + '秒！');
    }, 1000);
    window.onload = function () {
        Sticker.init('.sticker');
    }
}