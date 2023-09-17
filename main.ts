input.onButtonPressed(Button.A, function () {
    zas_x.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    zas_x.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    zas_x.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    zas_x.change(LedSpriteProperty.X, 1)
})
let zas_x: game.LedSprite = null
zas_x = game.createSprite(2, 5)
zas_x = game.createSprite(2, 5)
basic.forever(function () {
    zas_x.ifOnEdgeBounce()
})
