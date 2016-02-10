$(document).ready(function () {
    $('.ryu-still').show();
    $('.ryu').mouseenter(function () {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-still').show();
            $('.ryu-ready').hide();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({
                    'left': '1020px'
                },
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '622px');
                })
        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });

    $(document).keydown(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-still').hide();
            $('.ryu-throwing').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
            playCool();
        }
    });

    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
            $('#cool-sound')[0].pause();
        }
    });
});
var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
}
var coolSound = false;

function playCool() {
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool-sound')[0].volume = 0.5;
        // $('#cool-sound')[0].load(); //
        $('#cool-sound')[0].play();
    }
}
