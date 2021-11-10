controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (allow == 1) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
            info.setScore(40)
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
            info.setScore(30)
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
            info.setScore(20)
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
            info.setScore(10)
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
            game.over(false)
        } else {
            if (mySprite.overlapsWith(mySprite2)) {
                info.setScore(50)
                game.over(true)
            }
        }
        info.changeScoreBy(info.highScore())
        pause(2000)
        game.reset()
    }
})
info.onCountdownEnd(function () {
    allow = 1
})
let allow = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
tiles.setTilemap(tilemap`level1`)
story.showPlayerChoices("Easy", "Medium", "Hard")
if (story.checkLastAnswer("Easy")) {
    mySprite2 = sprites.create(img`
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        22222
        `, SpriteKind.Food)
} else if (story.checkLastAnswer("Medium")) {
    mySprite2 = sprites.create(img`
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        222
        `, SpriteKind.Food)
} else {
    mySprite2 = sprites.create(img`
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        `, SpriteKind.Food)
}
mySprite = sprites.create(img`
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    5 5 
    `, SpriteKind.Player)
mySprite.vx += -240
allow = 0
info.startCountdown(5)
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vx += 240
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vx += -240
    }
})
