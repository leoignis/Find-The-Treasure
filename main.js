$(document).ready(function(){
    //получаем случайное число от 0 до size-1
    var getRandomNumber = function (size) {
        return Math.floor(Math.random()*size);
    };
    //вычисляем растояние от клика (event) до клада (target)
    var getDistance = function (event,target) {
        var diffX = event.offsetX - target.x;
        var diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };
    //получить строчку подсказки в зависимости от расстояния до клада
    var getDistanceHint =function (distance) {
        if (distance < 10) {
            return "Very very hot!";
        } else if (distance < 20) {
            return "very hot!";
        } else if (distance < 40) {
            return "Hot!";
        } else if (distance < 80) {
            return "warmly";
        } else if (distance < 160) {
            return "Cold";
        } else if (distance < 320) {
            return "Very cold";
        } else {
            return "Very very cold!";
        }
    };

    //создание необходимых переменных
    var width = 400;
    var height = 400;
    var clicks = 0;
    //координаты случайной позиции клада 
    var target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    };
    //обработчик кликов для элемента img
    $("#map").click(function(event){
        clicks++;
        //получаем расстояние от места клика до клада 
        var distance = getDistance(event, target);
        //преобразуем расстояние в подсказку
        var distanceHint = getDistanceHint(distance);
        //записиваем в элемент #distance новую подсказку 
        $("#distance").text(distanceHint);
        //если клик был достаточно близко поздравляем с победой
        if (distance < 8) {
            alert("Treasure is found! Clicks: " + clicks);
        }

    });
  




});