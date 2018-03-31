function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
var originalState = $(".numbers").clone();
var count = 0;

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));



    var left = false;
    var right = false;
    var drag = '#drag';

    for (var i = 1; i < 10; i++) {

        var j = i;
        temp = drag + j.toString();
        if ($('#tensDiv').find(temp).length == 1) {
            left = true;
        }
        if ($('#onesDiv').find(temp).length == 1) {
            right = true;
        }
    }


    if (left == false || right == false) {
        return;
    }




    if ($('#tensDiv').find('#drag5').length == 1 && $('#onesDiv').find('#drag3').length == 1) {
        //do something
        $('#correct1').show();
        $('#incorrect1').hide();
        count++;
        console.log(count);
        document.getElementById('count').innerHTML = count;
        setTimeout(function () {
            $('#tensDiv').empty();
            $('#onesDiv').empty();
            $('.numbers').replaceWith(originalState.clone());
            $('#correct1').hide();
            $('#left-5').hide();
            $('#right-3').hide();
            $('#left-4').show();
            $('#right-2').show();
        }, 3000)

    } else if ($('#tensDiv').find('#drag4').length == 1 && $('#onesDiv').find('#drag2').length == 1) {
        //do something
        $('#correct1').show();
        $('#incorrect1').hide();
        count++;
        console.log(count);
        document.getElementById('count').innerHTML = count;
        setTimeout(function () {
            $('#tensDiv').empty();
            $('#onesDiv').empty();
            $('.numbers').replaceWith(originalState.clone());
            $('#correct1').hide();
            $('#left-4').hide();
            $('#right-2').hide();
            $('#left-1').show();
            $('#right-8').show();
        }, 3000)
    } else if ($('#tensDiv').find('#drag1').length == 1 && $('#onesDiv').find('#drag8').length == 1) {
        //do something
        $('#correct1').show();
        $('#incorrect1').hide();
        count++;
        console.log(count);
        document.getElementById('count').innerHTML = count;
        setTimeout(function () {
            $('#tensDiv').empty();
            $('#onesDiv').empty();
            $('.numbers').replaceWith(originalState.clone());
            $('#correct1').hide();
            $('#left-1').hide();
            $('#right-8').hide();
            $('#left-6').show();
            $('#right-5').show();
        }, 3000)
    } else if ($('#tensDiv').find('#drag6').length == 1 && $('#onesDiv').find('#drag5').length == 1) {
        //do something
        $('#correct1').show();
        $('#incorrect1').hide();
        count++;
        console.log(count);
        document.getElementById('count').innerHTML = count;
        setTimeout(function () {
            $('#tensDiv').empty();
            $('#onesDiv').empty();
            $('.numbers').replaceWith(originalState.clone());
            $('#correct1').hide();
            $('#left-6').hide();
            $('#right-5').hide();
            $('#left-2').show();
            $('#right-9').show();
        }, 3000)
    } else if ($('#tensDiv').find('#drag2').length == 1 && $('#onesDiv').find('#drag9').length == 1) {
        //do something
        $('#correct1').show();
        $('#incorrect1').hide();
        count++;
        console.log(count);
        document.getElementById('count').innerHTML = count;
        setTimeout(function () {
            $('#tensDiv').empty();
            $('#onesDiv').empty();
            $('.numbers').replaceWith(originalState.clone());
            $('#correct1').hide();


        }, 3000)
    } else {
        $('#incorrect1').show();
        setTimeout(function () {
            $('#tensDiv').empty();
            $('#onesDiv').empty();
            $('.numbers').replaceWith(originalState.clone());
        }, 2000)

    }
}
$(document).ready(function () {
    $('#startLeft').addClass('animated bounceInLeft');
    $('#startRight').addClass('animated bounceInRight');
    $('#startGame').on('click', function () {
        $('#startLeft').addClass('animated bounceOutLeft');
        $('#startRight').addClass('animated bounceOutRight');
        $('.question1').show('slow');
        $('#tens1').addClass('animated bounceInLeft');
        $('#ones1').addClass('animated bounceInRight');
        $('.numbers').addClass('animated bounceInUp');
    })

});
