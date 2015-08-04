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

        if (utility.distance(p1, p2) < ((doraemon.height * 0.5 + gameObject.height * 0.5))) {
            if (gameObject.isColliding == false) {
                console.log("collision");
                createjs.Sound.play(gameObject.soundString);
                if (gameObject.name == "fireball") {
                    scoreboard.lives--;
                    //here is what makes game over
                    if (scoreboard.lives < 0) {
                        stage.removeChild(game);
                        stage.removeAllChildren();
                        game.removeAllChildren();
                        game.removeChild(doraemon);
                        game.removeAllEventListeners();

                        changeState(constants.GAME_OVER_STATE);


                    }
                    if (flag == 0) {
                        game.removeChild(doraemon);
                        colliding.update();
                        game.addChild(colliding);
                        flag = 1;
                    }
                    window.setTimeout(function () {
                        game.removeChild(colliding);
                        game.addChild(doraemon);
                        flag = 0;
                    }, 1400);
                }
                if (gameObject.name == "ring") {
                    scoreboard.score += 100;
                   // ring.reset();                   
                    
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