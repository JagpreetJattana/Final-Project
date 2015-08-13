module managers {
    export class Collision {

        //constructor of the class
        constructor() {

        }
        //Public methods 
        //check teh colision between superman and other objects
        
        public check(gameObject: objects.GameObject) {
           // var scoreboard: objects.ScoreBoard;
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        var flag: number=0;
        p1.x = doraemon.x;
        p1.y = doraemon.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;

        if (utility.distance(p1, p2) < ((doraemon.width * 0.5 + gameObject.width * 0.5))) {
            if (gameObject.isColliding == false) {
                console.log("collision");
                createjs.Sound.play(gameObject.soundString);
                if ((gameObject.name == "obstacle1") || (gameObject.name == "obstacle_down")) {
                   
                    scoreboard.lives--;
                    if (scoreboard.lives < 0) {
                        changeState(constants.GAME_OVER_STATE);

                    }
                  
                }
                if (gameObject.name == "ring") {
                    scoreboard.score += 100;
                    if (scoreboard.score > 2000) {
                        //  changeState(constants.PLAY_LEVEL_TWO);
                    }
                    config.RINGSTRIKE = true;
                    ring.reset();

                }
                else if (gameObject.name == "Bow") {
                    //to show that player has succesfully got the bow
                 
                    config.HAVING_BOW = true;
                    game.removeChild(iron_bow);
                }
                else if (gameObject.name == "watermellon") {

                    doraemon.dieing();

                }
            }
            gameObject.isColliding = true;
        }
        else {
            gameObject.isColliding = false;
        }

        }

        public check_obstacle(): void{

         
            if (((doraemon.x > (obstacle1.x - 41)) && (doraemon.x < (obstacle1.x + 41)) && (doraemon.y < (obstacle1.y + 150)) && (doraemon.y > (obstacle1.y - 150))) || ((doraemon.x > (obstacle1.x - 24)) && (doraemon.x < (obstacle1.x + 24)) && (doraemon.y > (obstacle1.y + 250)) && (doraemon.y < (obstacle1.y + 550)))) {
               
                console.log("collision with obstacle");
                doraemon.dieing();
               
            }
           


        }



    }

} 