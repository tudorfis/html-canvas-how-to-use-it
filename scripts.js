import Effect from './app/Effect.class.js'

let effect

onload = _ => {
    effect = new Effect({
        x: 100, 
        y: 100, 
        distance: 100,
        angle: 0,
        animatingMethod: 'drawMathSin'
    })

    effect.animate()
}

addEventListener( 'resize', _ => {
    cancelAnimationFrame( effect.animationFrame )

    effect.x = 0
    effect.y = 0 
    effect.distance = 10

    effect.animate()
})
