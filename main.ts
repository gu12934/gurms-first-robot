input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("E E - - G - - - ", 120)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
