let alarmon = 0
let alarmdisabled = 0
let _switch = 0
let servo_value = 0
pins.setAudioPin(AnalogPin.P2)
music.setTempo(220)
basic.forever(function () {
    servo_value = pins.analogReadPin(AnalogPin.P0)
    _switch = pins.digitalReadPin(DigitalPin.P1)
    if (servo_value == 318) {
        alarmdisabled = 1
    } else if (_switch == 0) {
        alarmon = 1
    }
    if (alarmdisabled) {
        music.setVolume(0)
    } else if (alarmon) {
        for (let index = 0; index < 100; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        if (alarmdisabled) {
            music.setVolume(0)
        }
    }
})
