"use strict";
//create a cartoon object
var cartoon = { 
   canvas: undefined,
   context: undefined
 };
/*begin with getting the id of the canvas from the html file 
 *  * and the context from the canvas
 *   * and start to draw on it and write on it.
 *    */
cartoon.start = function () {
    cartoon.canvas = document.getElementById("myCanvas");
    cartoon.context = cartoon.canvas.getContext("2d");
    cartoon.draw();
    cartoon.write();
};

document.addEventListener('DOMContentLoaded', cartoon.start);

//write some text on the canvas
cartoon.write = function () {
    cartoon.context.font = "30px Arial";
    cartoon.context.fillStyle = "rgb(58, 24, 40)";
    cartoon.context.textAlign = "center";
    cartoon.context.fillText("生 日 快 乐 小 宝 宝", 500, 50);
};

/*draw some image by calling each method, passing parameters to translate 
 *  * the location and the scale the size
 *   */

cartoon.draw = function () {
    cartoon.changeCanvasColor();
    // cartoon.mountain(30, 80, 20, 40);
    // cartoon.mountain(130, 100, 20, 40);
    // cartoon.mountain(700, 40, 20, 50);
    // cartoon.sun(100, 100, 1.25, 1.25);
    // cartoon.cloud(150, 190, 0.8, 0.6);
    // cartoon.cloud(200, 170, 0.7, 0.5);
    // cartoon.cloud(25, 160, 0.6, 0.35);
    // cartoon.cloud(950, 190, 1, 0.6);
    // cartoon.cloud(850, 170, 0.7, 0.5);
    // cartoon.cloud(700, 130, 1, 0.35);
    // cartoon.cloud(600, 150, 1, 0.35);

    // cartoon.tree(40, 300, 0.7, 1);
    // cartoon.tree(140, 300, 0.7, 1);
    // cartoon.tree(250, 330, 0.7, 1);
    // cartoon.tree(350, 330, 0.7, 1);
    // cartoon.tree(450, 300, 0.7, 1);
    // cartoon.tree(540, 300, 0.7, 1);
    // cartoon.tree(650, 330, 0.7, 1);
    // cartoon.tree(750, 330, 0.7, 1);
    // cartoon.tree(850, 300, 0.7, 1);
    // cartoon.tree(940, 300, 0.7, 1);
    // cartoon.tree(1050, 330, 0.7, 1);
    
    // cartoon.christmasTree(30, 300, 8, 8);
    // cartoon.christmasTree(150, 320, 8, 8);
    // cartoon.rocks(10, 500, 1, 1);
    // cartoon.grass(-10, 580, 2, 3);

    // cartoon.roof(70, 30, 5, 5);
    // cartoon.body(70, 30, 5, 5);
    // cartoon.window(70, 30, 5, 5);
    // cartoon.door(70, 30, 5, 5);

    // cartoon.fence(350, 490, 1, 1);
    // cartoon.lagoon(950, 470, 2, 0.6);
    // cartoon.waterwaves(860, 430, 0.4, 0.1);
    // cartoon.waterwaves(870, 460, 0.4, 0.1);
    // cartoon.christmasTree(700, 300, 8, 8);
    // cartoon.christmasTree(800, 350, 8, 8);
    cartoon.heart(24,50,0.5,0.5);
    cartoon.heart(100,60,0.5,0.5);
};

//change the background color of the canvas

cartoon.changeCanvasColor = function () {
    cartoon.context.fillStyle = "rgb(69, 152, 254)";
    cartoon.context.fillRect(0, 0, cartoon.canvas.width, 400);
    cartoon.context.fillStyle = "rgb(153, 118, 40)";
    cartoon.context.fillRect(0, 400, cartoon.canvas.width, 200);
};

cartoon.heart = function(x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.translate(x, y);
    cartoon.context.scale(a, b);
    cartoon.context.bezierCurveTo(75, 37, 70, 25, 50, 25);
    cartoon.context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    cartoon.context.bezierCurveTo(20, 80, 40, 102, 75, 120);
    cartoon.context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    cartoon.context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    cartoon.context.bezierCurveTo(85, 25, 75, 37, 75, 40);
    cartoon.context.fillStyle = "rgb(235, 62, 84)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();
}

//draw a lagoon
cartoon.lagoon = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.translate(x, y);
    cartoon.context.scale(a, b);
    cartoon.circle();
    cartoon.context.fillStyle = "rgb(105,242, 255)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();
};
//draw some waterwaves on the lagoon
cartoon.waterwaves = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.translate(x, y);
    cartoon.context.scale(a, b);
    cartoon.context.moveTo(20, 20);

    cartoon.context.bezierCurveTo(200, 300, 100, 50, 200, 200);
    cartoon.context.bezierCurveTo(400, 600, 200, 100, 400, 400);
    cartoon.context.stroke();
    cartoon.context.restore();
    cartoon.context.closePath();
};
//draw some rocks using a for loop
cartoon.rocks = function (x, y, a, b) {
    var width = 1000;

    for (var i = x; i < width; i += 160) {
        cartoon.context.beginPath();
        cartoon.context.save();

        cartoon.context.translate(i, y);
        cartoon.context.scale(a, b);

        cartoon.context.fillStyle = "rgb(109, 105, 113)";

        cartoon.context.rect(0, 0, 10, 10);
        cartoon.context.rect(80, 60, 10, 10);
        cartoon.context.fill();
        cartoon.context.restore();
        cartoon.context.closePath();


    }
};

//draw some grass using a for loop
cartoon.grass = function (x, y, a, b) {
    var width = y + 400;
    for (var i = x; i < width; i += 15) {
        cartoon.context.beginPath();
        cartoon.context.save();
        var path = cartoon.triangle();
        cartoon.context.translate(i, y);
        cartoon.context.scale(a, b);
        cartoon.context.fillStyle = "rgb(102, 211, 5)";
        cartoon.context.fill(path);
        cartoon.context.restore();
        cartoon.context.closePath();
    }
};
//draw some fence using a for loop
cartoon.fence = function (x, y, a, b) {

    var width = 800;
    for (var i = x; i < width; i += 50) {
        cartoon.context.beginPath();
        cartoon.context.save();
        var path = cartoon.triangle();

        cartoon.context.translate(i, y);
        cartoon.context.scale(a, b);

        cartoon.context.fillStyle = "rgb(160, 178, 197)";
        cartoon.context.fill(path);
        cartoon.context.rect(0, 10, 20, 70);
        cartoon.context.fill();
        cartoon.context.restore();
        cartoon.context.closePath();
    }
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.translate(i, y);
    cartoon.context.scale(a, b);
    cartoon.context.rect(-450, 30, 400, 10);
    cartoon.context.fillStyle = "rgb(160, 178, 197)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw a roof top
cartoon.roof = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.scale(a, b);
    cartoon.context.translate(x, y);
    var path = new Path2D();
    path.moveTo(0, 40);
    path.lineTo(40, 0);
    path.lineTo(80, 40);
    path.lineTo(75, 45);
    path.lineTo(40, 10);
    path.lineTo(5, 45);
    path.lineTo(0, 40);
    cartoon.context.fillStyle = "rgb(176, 64, 55)";
    cartoon.context.fill(path);

    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw the body of the house
cartoon.body = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.scale(a, b);
    cartoon.context.translate(x, y);
    var path = new Path2D();

    path.moveTo(70, 40);
    path.lineTo(70, 80);
    path.lineTo(10, 80);
    path.lineTo(10, 40);
    path.lineTo(40, 10);
    path.lineTo(70, 40);
    cartoon.context.fillStyle = "rgb(254, 205, 80)";
    cartoon.context.fill(path);

    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw the window on the house
cartoon.window = function (x, y, a, b) {

    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.scale(a, b);
    cartoon.context.translate(x, y);
    var path = new Path2D();
    cartoon.context.rect(32, 28, 15, 15);
    cartoon.context.fillStyle = "rgb(255, 245, 0)";
    cartoon.context.fill();
    cartoon.context.stroke();

    cartoon.context.restore();
    cartoon.context.save();
    cartoon.context.scale(a, b);
    cartoon.context.translate(x, y);
    path.moveTo(39.5, 28);
    path.lineTo(39.5, 43);
    cartoon.context.stroke(path);
    path.moveTo(32, 35.5);
    path.lineTo(47, 35.5);
    cartoon.context.stroke(path);

    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw a door
cartoon.door = function (x, y, a, b) {

    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.scale(a, b);
    cartoon.context.translate(x, y);

    cartoon.context.rect(32, 55, 15, 25);
    cartoon.context.fillStyle = "rgb(176, 64, 55)";
    cartoon.context.fill();
    cartoon.context.stroke();
    cartoon.context.closePath();

    cartoon.context.beginPath();

    cartoon.context.arc(36, 65, 1, 0, 2 * Math.PI);
    cartoon.context.stroke();


    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw a mountain on the back
cartoon.mountain = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    var path = cartoon.triangle();
    cartoon.context.translate(x, y);
    cartoon.context.scale(a, b);
    cartoon.context.fillStyle = "rgb(153, 118, 40)";
    cartoon.context.fill(path);
    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw a sun
cartoon.sun = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.translate(x, y);
    cartoon.context.scale(a, b);
    cartoon.circle();
    cartoon.context.fillStyle = "rgb(230, 97, 69)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw a cloud
cartoon.cloud = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.translate(x, y);
    cartoon.context.scale(a, b);
    cartoon.circle();
    cartoon.context.fillStyle = "rgb(213, 233, 231)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();

};

//draw a tree
cartoon.tree = function (x, y, a, b) {
    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.translate(x, y);
    cartoon.context.scale(a, b);
    cartoon.circle();
    cartoon.context.fillStyle = "rgb(45, 148, 91)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();

    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.rect(x - 10, y + 80, 20, 90);
    cartoon.context.fillStyle = "rgb(74, 32, 0)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();

    cartoon.context.beginPath();
    cartoon.context.save();
    var path = cartoon.triangle();
    cartoon.context.translate(x - 10, y + 70);
    cartoon.context.scale(a + 0.25, b);
    cartoon.context.fillStyle = "rgb(74, 32, 0)";
    cartoon.context.fill(path);
    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw a chritmas tree
cartoon.christmasTree = function (x, y, a, b) {
    var height = y + 150;
    for (var i = y; i < height; i += 50) {
        cartoon.context.beginPath();
        cartoon.context.save();
        var path = cartoon.triangle();
        cartoon.context.translate(x, i);
        cartoon.context.scale(a, b);
        cartoon.context.fillStyle = "rgb(138, 218, 84)";
        cartoon.context.fill(path);
        cartoon.context.restore();
        cartoon.context.closePath();
    }

    cartoon.context.beginPath();
    cartoon.context.save();
    cartoon.context.rect(x + 70, y + 180, 20, 60);
    cartoon.context.fillStyle = "rgb(148, 61, 11)";
    cartoon.context.fill();
    cartoon.context.restore();
    cartoon.context.closePath();
};

//draw a circle, since most of the shapes contain a circle
cartoon.circle = function () {
    cartoon.context.arc(0, 0, 80, 0, 2 * Math.PI);
};

//draw a triangle, since most of the shapes contain a triangle
cartoon.triangle = function () {
    var path = new Path2D();
    path.moveTo(10, 0);
    path.lineTo(20, 10);
    path.lineTo(0, 10);
    path.lineTo(10, 0);

    return path;
};
