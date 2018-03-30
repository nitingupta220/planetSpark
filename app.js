function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log(12);
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
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

})
