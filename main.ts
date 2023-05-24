let distancia = sonar.ping(
DigitalPin.P2,
DigitalPin.P1,
PingUnit.Centimeters
)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distancia <= 5) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (distancia <= 10) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else if (distancia <= 15) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (distancia <= 20) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (distancia <= 25) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (distancia <= 30) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (distancia <= 35) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (distancia <= 40) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
