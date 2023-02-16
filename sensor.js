class Sensor {
  constructor(car) { // it will be attached to car
    this.car = car
    this.rayCount = 5
    this.rayLenght = 150 // in pixels
    //this.raySpread = Math.PI/4 // 40 degrees
    this.raySpread = Math.PI/2 // 90 degrees
    //this.raySpread = Math.PI*2 // 360 degrees

    this.rays = []
    this.readings = []
  }

  update(roadBorders){
    this.#castRays()
    this.readings = []
    for(let i = 0; i < this.rays.lenght; i++){
      this.readings.push(
        this.#getReadings(this.rays[i],roadBorders)
      )
    }
  }

  #castRays(){
    this.rays = []
    for(let i=0; i < this.rayCount; i++) {
      const rayAngle = lerp(
        this.raySpread/2,
        -this.raySpread/2,
        //i/(this.rayCount-1) when raycount is 1 it becomes 0
        this.rayCount == 1? 0.5 : i/(this.rayCount-1)// returns half of the ray
      ) + this.car.angle

      const start = {x:this.car.x, y:this.car.y}
      const end = {
        x:this.car.x - 
          Math.sin(rayAngle)*this.rayLenght,
        y:this.car.y -
          Math.cos(rayAngle)*this.rayLenght
      }
      this.rays.push([start,end]) // pushes the result to array
    }
  }

  draw(ctx){
    for(let i=0; i < this.rayCount; i++){
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.strokeStyle = "yellow"
      ctx.moveTo(
        this.rays[i][0].x,
        this.rays[i][0].y
      )
      ctx.lineTo(
        this.rays[i][1].x,
        this.rays[i][1].y
      )
      ctx.stroke()
    }
  }
}