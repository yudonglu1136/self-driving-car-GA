
const canvas = document.getElementById('myCanvas');
canvas.width = 200;
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(1), 550, 30, 50, "KEYS");
const traffic = [
	new Car(road.getLaneCenter(Math.floor(Math.random() * 3)), -Math.floor(Math.random() * 600), 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(Math.floor(Math.random() * 3)), -Math.floor(Math.random() * 1000), 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(Math.floor(Math.random() * 3)), -Math.floor(Math.random() * 400), 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(Math.floor(Math.random() * 3)), -Math.floor(Math.random() * 100), 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(Math.floor(Math.random() * 3)), -Math.floor(Math.random() * 600), 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(Math.floor(Math.random() * 3)), -Math.floor(Math.random() * 1000), 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(Math.floor(Math.random() * 3)), -Math.floor(Math.random() * 400), 30, 50, "DUMMY", 2),
	
];

animate();

function animate(){
	for (let i=0; i<traffic.length; i++){
		traffic[i].update(road.borders,[]);
	}
	car.update(road.borders, traffic);
	canvas.height = window.innerHeight;
	ctx.save();
	ctx.translate(0, -car.y+canvas.height*0.7);
	road.draw(ctx);
	for(let i=0; i<traffic.length;i++){
		traffic[i].draw(ctx)
	}
	car.draw(ctx);
	ctx.restore();
	requestAnimationFrame(animate);
}