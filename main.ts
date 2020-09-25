input.onButtonPressed(Button.A, function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) > 5) {
        music.setVolume(255)
        music.playTone(988, music.beat(BeatFraction.Double))
    } else {
        music.setVolume(255)
        music.playTone(131, music.beat(BeatFraction.Double))
    }
})
