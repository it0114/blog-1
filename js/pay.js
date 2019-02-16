window.onload = function () {
    var imgS = document.querySelectorAll("img");
    var num = 0;
    for (var i = 0; i < imgS.length; i++) {
        var img = imgS[i];
        img.onmouseover = function () {
            if (num === 0) {
                for (var j = 0; j < imgS.length; j++) {
                    imgS[j].style.opacity = "0.1";
                    imgS[j].style.transform = "";
                }
                this.style.transform = "scale(1.8)";
                this.style.opacity = "1";
                this.style.margin = "10px auto";
                this.style.transition = "all 0.5s";
                num++;
            }
        };
        img.onmouseout = function () {
            if (num === 1) {
                for (var o = 0; o < imgS.length; o++) {
                    imgS[o].style.opacity = "1";
                    imgS[o].style.transform = "";
                }
                this.style.opacity = "1";
                this.style.transform = "";
                this.style.display = "";
                num = 0;
            }
        }
    }
};