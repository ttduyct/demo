let tin_hieu = 0
basic.forever(function () {
    tin_hieu = 20
    if (tin_hieu < 10) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
