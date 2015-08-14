module managers {
    export class Collision_other {

        //constructor of the class
        constructor() {

        }
        //Public methods 
        //check teh colision between any two objects of the game
        
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
              //  if (gameObject.isColliding == false) {
                if ((gameObject.isColliding == false)&&(gameObject2.isColliding==false)) {
                    console.log("collisionother");
                    createjs.Sound.play(gameObject.soundString);
                    if ((gameObject.name == "watermellon") && (gameObject2.name == "Arrow")) {
                        watermellon.gotoAndPlay("melon3");
                        config.MELLON_DIEING = true;
                        //game.removeChild(arrow);
                        scoreboard.score += 50;

                        //Playing watermelon animation
                        window.setTimeout(function () {
                            game.removeChild(watermellon);
                            config.MELLON_IS_THERE = false;
                            watermellon.gotoAndStop("melon3");
                            config.MELLON_DIEING = false;
                            watermellon.gotoAndPlay("melon");
                        }, 850);
                        // to change the state according to current state
                            if (scoreboard.score > 2500) {
                                changeState(constants.TRANSITION_STATE);
                                scoreboard.score = 0;
                            }
                        

                        
                        //watermellon.stop();           
                        console.log("collision in mellon");
                        
                    }
                    if ((gameObject.name == "FinalMonster") && (gameObject2.name == "Arrow")) {
                        scoreboard.mpower -= 2;
                        if (scoreboard.mpower < 98) {
                            scoreboard.mpower = 0;
                            createjs.Sound.play("monsterSound");
                            config.MONSTER_IS_THERE = false;
                            config.FIRING_FIREBALL = false;
                            config.HAVING_BOW = false;
                            final_Monster.gotoAndPlay("FinalMonsterDieing");

                            //playing monster dieing animation
                            window.setTimeout(function () {
                                game.removeChild(final_Monster);
                                changeState(constants.WIN_STATE);
                                
                             // final_Monster.gotoAndStop("FinalMonsterDieing");
                              
                            }, 1100);
                        }


                    }
                    if ((gameObject.name == "doraemon") && (gameObject2.name == "Fireball")) {
                        scoreboard.dpower -= 2;
                        if (scoreboard.dpower < 0) {
                            changeState(constants.GAME_OVER_STATE);
                        }

                    }

                   
                   
                }
                gameObject.isColliding = true;
                gameObject2.isColliding = true;
                
            }
            else {
                gameObject.isColliding = false;
                gameObject2.isColliding = false;
            }

        }



    }

}  