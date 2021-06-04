class Chain {
    constructor(Bodya,bodyb){
var c_options={
 bodyA:Bodya,
 bodyB:bodyb,
 stiffness:0.05,
 length:5
}

this.chain= Constraint.create(c_options)
World.add(world,this.chain)

    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}