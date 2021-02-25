let Counter = 0
basic.forever(function () {
    while (input.temperature() > 20) {
        basic.showIcon(IconNames.Angry)
        Counter = 4
    }
    if (input.compassHeading() > 180) {
        basic.showIcon(IconNames.Heart)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
