function right () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin1, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin2, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 30)
}
function back () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin1, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin2, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 30)
}
function left () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin1, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin2, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
}
function stop () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin1, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin2, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
}
input.onButtonPressed(Button.A, function () {
    run = 1
})
input.onButtonPressed(Button.B, function () {
    run = 0
    stop()
})
function forward () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin1, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin2, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
}
let run = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
run = 0
basic.pause(200)
huskylens.clearOSD()
basic.pause(200)
huskylens.writeOSD("3U 99", 111, 120)
basic.forever(function () {
    if (run == 1) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
            if (huskylens.readeArrow(1, Content2.xTarget) > 190) {
                right()
            } else if (huskylens.readeArrow(1, Content2.xTarget) < 130) {
                left()
            } else {
                forward()
            }
        } else {
            stop()
        }
    }
})
