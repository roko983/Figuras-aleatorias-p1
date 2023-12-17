class Create_cu {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.largo = random(5, 40)
        this.ancho = this.largo
        this.speed = 1
    }   
    display() {
        fill(red)
        rect(this.x, this.y, this.largo, this.ancho)
        console.log("entro a display1")
    }
    move() {
        this.x += random(-this.speed, this.speed)
        this.y += random(-this.speed, this.speed)
        console.log("entro a move1")
    }
}