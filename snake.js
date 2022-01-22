
class snake{
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.trail = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1
    }

    move(){
        if(this.rotateX == 1){
            neRect = {
                x: this.tail[this.tail.length -1].x + this.size,
                y: this.tail[this.tail.length -1].y
            }
        }
    }
}  


var canvas = document.getElementById("canvas")

var snake = new snake()

var apple = new apple()

var canvasContext = canvas.getContext('2d')

window.onload = ()=>{
    gameLoop()
}

function gameLoop(){
    setInterval(show, 1000/15) // the 15 here represents fps
}

function show(){
    update()
    draw()
}