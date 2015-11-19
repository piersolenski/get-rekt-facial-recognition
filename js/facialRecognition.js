$(function () {

    const IMAGES = {
        "top-left": [
            "windows95.png",
            "doritos.gif",
            "mountain-dew.png",
            "rekt.png"
        ],
        "top-right": [
            "pingu.png",
            "illuminati.png",
            "mlg.jpg",
            "doge.png"
        ],
        "bottom-left": [
            "thomas.png",
            "snoop.gif",
            "frog.gif",
            "gun.png"
        ]
    };

    var getRandomImage = function getRandomImage(selector) {
        var imageOptions = IMAGES[selector];
        var image = imageOptions[Math.floor(Math.random() * imageOptions.length)];
        return image;
    };

    var placeImages = function placeImages() {
        Object.keys(IMAGES).forEach(function(selector){
            $("<img>", {
                "class": selector,
                "src": "img/" + getRandomImage(selector)
            }).insertAfter("#picture");
        });
    };

    placeImages();

    $('#picture').faceDetection({
        complete: function (faces) {
            for (var i = 0; i < faces.length; i++) {
                $('<div>', {
                    'class':'face',
                    'css': {
                        'position': 'absolute',
                        'left':     faces[i].x * faces[i].scaleX + 'px',
                        'top':      faces[i].y * faces[i].scaleY + 'px',
                        'width':    faces[i].width  * faces[i].scaleX + 'px',
                        'height':   faces[i].height * faces[i].scaleY + 'px'
                    }
                })
                .insertAfter(this);
            }
        },
        error:function (code, message) {
            alert('Error: ' + message);
        }
    });
});
