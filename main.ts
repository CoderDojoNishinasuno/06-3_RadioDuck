radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 0) {
        あひるを表示()
        basic.pause(1000)
        if (randint(0, 確率) != 0) {
            radio.sendNumber(1)
            あひる通過()
        }
    } else if (receivedNumber == 1) {
        あひるを表示()
    }
})
function あひるを表示 () {
    あひるexists = true
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # #
        . . # # #
        . . . # #
        . . . # #
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (あひるexists) {
        radio.sendNumber(0)
        あひる通過()
    }
})
function あひる通過 () {
    あひるexists = false
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onGesture(Gesture.Shake, function () {
    確率 = randint(0, 10)
    basic.showNumber(確率)
})
input.onButtonPressed(Button.B, function () {
    あひるexists = true
    basic.showIcon(IconNames.Duck)
})
let 確率 = 0
let あひるexists = false
radio.setGroup(67)
あひるexists = true
basic.showIcon(IconNames.Duck)
確率 = 4
basic.forever(function () {
	
})
