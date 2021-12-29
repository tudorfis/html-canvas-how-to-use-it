
class Effect {
    constructor({ x, y, distance, angle, animatingMethod }) {
        this.x = x
        this.y = y
        this.distance = distance
        this.angle = angle
        this.animatingMethod = animatingMethod

        this.mouse = {
            x: 0,
            y: 0
        }

        this.build()
    }
    build() {
        this.canvas = document.createElement( 'canvas' )
        this.ctx = this.canvas.getContext( '2d' )

        this.adjustCanvasDimensions()

        Object.assign( this.ctx, {
            'strokeStyle': 'white',
            'lineWidth': '3',
        })
        
        document.body.append( this.canvas )
    }
    adjustCanvasDimensions() {
        Object.assign( this.canvas, {
            'width': innerWidth,
            'height': innerHeight,
        })
    } 
    drawPath() {
        const { ctx, x, y, distance } = this

        ctx.beginPath()
        ctx.moveTo( x, y )
        ctx.lineTo( x + distance, y + distance )
        ctx.stroke()

        this.x++
        this.y++
        this.distance++
    }
    drawMathSin() {
        const { ctx, x, y, distance } = this

        ctx.beginPath()

        ctx.moveTo( x, y )
        ctx.lineTo( 
            distance + Math.cos( this.angle ) * distance, 
            distance + Math.sin( this.angle ) * distance 
        )

        ctx.stroke()
        this.angle += 0.1
    }
    drawMouse() {
        const { ctx, mouse, canvas } = this

        ctx.beginPath()
        ctx.moveTo( canvas.width / 2, canvas.height / 2 )
        ctx.lineTo( mouse.x, mouse.y )
        ctx.stroke()
    }
    animate() {
        this.clearCanvas()
        this[ this.animatingMethod ]()
        this.animationFrame = requestAnimationFrame( this.animate.bind( this ) )
    }
    clearCanvas() {
        const { canvas, ctx } = this

        ctx.clearRect( 0, 0, canvas.width, canvas.height )
    }
}



export default Effect
