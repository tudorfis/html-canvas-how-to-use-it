

class PathEffect {
    constructor() {
        this.build()
    }
    build() {
        this.canvas = document.createElement( 'canvas' )
        this.ctx = this.canvas.getContext( '2d' )

        Object.assign( this.canvas, {
            'width': innerWidth,
            'height': innerHeight,
        })
        
        Object.assign( this.ctx, {
            'strokeStyle': 'white',
        })

        document.body.append( this.canvas )
    }
    drawPath() {
        const { ctx } = this

        ctx.beginPath()
        ctx.moveTo( x, y )
        ctx.lineTo( x + distance, y + distance )
        ctx.stroke()
    }
    animate() {
        this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height )
        
        this.x++
        this.y++
        this.distance++

        this.drawPath()
        requestAnimationFrame( this.animate.bind( this ) )
    }
}

var x = 0, 
    y = 0, 
    distance = 10

export default PathEffect