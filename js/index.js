window.onload = function () {
    //轮播图
    var banner_ul = document.querySelector("#banner-ul");
    var bannerContent = document.getElementById("banner-content");
    var index = 0;
    var width = 210;
    var bannerLeft = document.getElementById("banner-left");
    var bannerRight = document.getElementById("banner-right");
    //开始轮播图定时器
    var timer = setInterval(rool, 2000);
    setInterval(bannerLock,1000);
    //鼠标进入悬停
    bannerContent.onmousemove = function () {
        clearInterval(timer);
        //方向左移动
        bannerLeft.onclick = function () {
            this.disabled = true;
            index++;
            alterDirection();//执行改变方向函数
            tranSiTion();    //执行过渡函数
        };
        //方向右移动
        bannerRight.onclick = function () {
            this.disabled = true;
            index--;
            alterDirection();
            //过渡函数
            banner_ul.addEventListener("transitionend", function () {
                if (index === -1) {
                    index = 9;
                    banner_ul.style.marginLeft = (-index * width) + "px";
                    banner_ul.style.transition = "none";
                } else if (index === -8) {
                    index = 0;
                    alterDirection();
                }
            })
        };
    };
    //鼠标离开开始定时器
    bannerContent.onmouseout = function () {
        timer = setInterval(rool, 2000);
    };
    //自动轮播函数
    function rool() {
        index++;
        alterDirection();
        //判断运动过渡
        tranSiTion();
    }
    //轮播图切换按钮锁 防止重复点击
    function bannerLock(){
        bannerRight.disabled = "";
        bannerLeft.disabled = "";
    }
    //定义改变方向函数
    function alterDirection() {
        banner_ul.style.marginLeft = (-index * width) + "px";
        banner_ul.style.transition = "all 0.5s";
    }
    //过渡动画
    function tranSiTion() {
        banner_ul.addEventListener("transitionend", function () {
            if (index > 9) {
                index = 0;
                alterDirection();
            } else {
                alterDirection();
                banner_ul.style.transition = "none";
            }
        })
    }

};