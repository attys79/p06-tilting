let control2 = 0
for (let x = 0; x <= 4; x++) {
    led.plotBrightness(x, 1, 127)
    led.plotBrightness(x, 3, 127)
}
let x = 2
basic.forever(function () {
    control2 = x
    basic.pause(100)
    x = Math.map(input.rotation(Rotation.Roll), 30, -30, 0, 4)
    if (x != control2) {
        led.unplot(control2, 2)
    }
    led.plot(x, 2)
})
