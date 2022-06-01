function disablealarm () {
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function alarm () {
    for (let index = 0; index < 100; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
}
let _switch = 0
let servo_value = 0
pins.setAudioPin(AnalogPin.P2)
basic.forever(function () {
    servo_value = pins.digitalReadPin(DigitalPin.P0)
    _switch = pins.digitalReadPin(DigitalPin.P1)
    if (servo_value == 1) {
        disablealarm()
    } else if (_switch == 1) {
    	
    }
})
