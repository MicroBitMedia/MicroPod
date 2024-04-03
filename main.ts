let Selection = 0
let Active_App = 0
/**
 * 1 = Kompass
 * 
 * 2 = Wetter
 * 
 * 3 = Micro4School
 * 
 * 4 = Shop
 * 
 * 5 = Beatsaber
 * 
 * 6 =
 */
// 1= Kompass
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Selection += 1
})
basic.forever(function () {
    if (Selection == 6) {
        Selection = 0
    }
})
basic.forever(function () {
    if (Selection == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # . . . #
            . # # # .
            `)
        if (input.buttonIsPressed(Button.A) && Selection == 1) {
            Active_App = 1
        }
    } else if (Selection == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . . . . .
            `)
        if (input.buttonIsPressed(Button.A) && Selection == 2) {
            Active_App = 2
        }
    } else if (Selection == 3) {
        basic.showLeds(`
            . . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        if (input.buttonIsPressed(Button.A) && Selection == 3) {
            Active_App = 3
        }
    } else if (Selection == 4) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . # # # #
            . # # # #
            . # . . #
            `)
        if (input.buttonIsPressed(Button.A) && Selection == 4) {
            Active_App = 4
        }
    } else if (Selection == 5) {
        basic.showLeds(`
            # # . . #
            # . # . #
            # # # . #
            # . # . #
            # # . . #
            `)
        if (input.buttonIsPressed(Button.A) && Selection == 5) {
            Active_App = 5
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
    }
})
