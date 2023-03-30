var i = 0;
var str = "篮球是我生命中的热爱，是我与这个世界交流的方式。机车和滑板则是我探索未知世界的工具，它们让我感受到速度与激情的魅力。我向往自由自在的生活，渴望探索未知的领域。我希望能够环游世界，见识不同的风景和文化，寻找生命中的意义和价值。在旅途中，我会享受每一刻的感觉，感受自然的美妙，品味人文的韵味。我相信，只有通过艺术的眼光和感受，才能真正地认识这个世界，理解人生的真谛。在我的人生旅途中，篮球和机车、滑板将一直是我的伙伴，带我穿越时空，领略不同的风景和文化。我的艺术，我的旅程，我的人生。"
window.onload = function typing() {
    //获取div
    var mydiv = document.getElementById("text");
    mydiv.innerHTML += str.charAt(i);
    i++;
    var id = setTimeout(typing, 60);
    if (i == str.length) {
        clearTimeout(id);
    }
}