let Counter = 0
basic.forever(function () {
    while (input.temperature() > 20) {
        basic.showIcon(IconNames.Angry)
        Counter += 1
        if (Counter == 0) {
            basic.showIcon(IconNames.Heart)
        }
    }
    while (input.compassHeading() > 180) {
        for (let index = 0; index <= 4; index++) {
            basic.showIcon(IconNames.Heart)
            music.playTone(262, music.beat(BeatFraction.Eighth))
            music.stopAllSounds()
            music.playTone(440, music.beat(BeatFraction.Eighth))
        }
    }
})
