var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var players, platforms;
 
function preload() {
	
	game.load.spritesheet('char', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charLeft', 'assets/Run_left.png',200,200,8);
	
	world.preload();
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	createServer();
	//game.physics.setImpactEvents(true);
	//game.physics.arcade.collide('char', sprite2, collisionHandler, null, this);
	game.physics.arcade.gravity.y = 2000;

	world.create();

	// hej.move();

	players = game.add.group();
	players.setAll('body.collideWorldBounds', true);
	players.setAll('body.width ', 100);
	players.setAll('body.bounce.x', 4);
	players.setAll('body.bounce.y', 2);


}
 
function update() {
	game.physics.arcade.collide(players, platforms);

	for(c in characters){
		var x = characters[c]["sprite"].position.x;
		var y = characters[c]["sprite"].position.y;

		characters[c]["name"].position.x = (x+105);
		characters[c]["name"].position.y = y-20;

	}
}
