var imgdemo = ["img/babiloonf.jpg", "img/dragonf.jpg", "img/minhvucf.jpg"];
var imgcrop1 = ["img/babiloon1.jpg", "img/dragon1.jpg", "img/minhvuc1.jpg",];
var imgcrop2 = ["img/babiloon2.jpg", "img/dragon2.jpg", "img/minhvuc2.jpg",];
var imgcrop3 = ["img/babiloon3.jpg", "img/dragon3.jpg", "img/minhvuc3.jpg",];
var imgcrop4 = ["img/babiloon4.jpg", "img/dragon4.jpg", "img/minhvuc4.jpg"];
// var babiloon = ["img/babiloonf.jpg", "img/babiloon1.jpg", "img/babiloon2.jpg", "img/babiloon3.jpg", "img/babiloon4.jpg"]
// var dragon = ["img/dragonf.jpg", "img/dragon1.jpg", "img/dragon2.jpg", "img/dragon3.jpg", "img/dragon4.jpg",]
// var minhvuc = ["img/minhvucf.jpg", "img/minhvuc1.jpg", "img/minhvuc2.jpg", "img/minhvuc3.jpg", "img/minhvuc4.jpg"]
var random = Math.floor(Math.random() * imgdemo.length);
var i = [-1 ,-2 ,-3 ,-4, -5];
function changedemo() {
    var random = Math.floor(Math.random() * imgdemo.length);
    document.getElementById("full").src = imgdemo[random];
    i[4] = random;
    check();
}
function changecrop1() {
    var random1 = Math.floor(Math.random() * imgcrop1.length);
    document.getElementById("img1").src = imgcrop1[random1];
    i[0] = random1;
    check();
}
function changecrop2() {
    var random2 = Math.floor(Math.random() * imgcrop2.length);
    document.getElementById("img2").src = imgcrop2[random2];
    i[1] = random2;
    check();
}
function changecrop3() {
    var random3 = Math.floor(Math.random() * imgcrop3.length);
    document.getElementById("img3").src = imgcrop3[random3];
    i[2] = random3;
    check();
}
function changecrop4() {
    var random4 = Math.floor(Math.random() * imgcrop4.length);
    document.getElementById("img4").src = imgcrop4[random4];
    i[3] = random4;
    check();
}
function check() {
    if ( (i[0] == i[1]) && (i[0] == i[2])) {
        if ((i[0] == i[3])) {
            if ((i[0] == i[4])) {
                    alert("ban da hoan thanh");
            }
        }
    }
}