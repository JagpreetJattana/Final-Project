module managers {
    export class Collision_other {

        //constructor of the class
        constructor() {

        }
        //Public methods 
        //check teh colision between superman and other objects
        
        public check(gameObject: objects.GameObject, gameObject2: objects.GameObject) {
            // var scoreboard: objects.ScoreBoard;
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            var flag: number = 0;
            p1.x = gameObject.x;
            p1.y = gameObject.y;

            p2.x = gameObject2.x;
            p2.y = gameObject2.y;

            if (utility.distance(p1, p2) < ((gameObject.height * 0.5 + gameObject2.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    console.log("collisionother");
                    if ((gameObject.name == "watermellon") && (gameObject2.name == "Arrow")) {
                      //  watermellon.gotoAndPlay("melondie");
                        //game.removeChild(arrow);

                        window.setTimeout(function () {
                            game.removeChild(watermellon);
                            config.MELLON_IS_THERE = false;
                         //   watermellon.gotoAndStop("melondie");
                         //   watermellon.gotoAndPlay("melon");
                        }, 450);

                        
                        //watermellon.stop();           
                        console.log("collision in mellon");
                        
                    }
                   
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }

        }



    }

}  