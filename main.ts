basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -10) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (input.rotation(Rotation.Roll) > 10) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else {
        basic.clearScreen()
    }
})
