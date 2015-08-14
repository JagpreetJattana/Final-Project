module states {
    //class defining play level three state
    export class Play_Level_Three {
        //game variables



        constructor() {
            this.main();

        }
        //method updating play level three state objects

        public update() {
            city.update();
            fireballManager.update();
            doraemon.update();
            final_Monster.update();
            arrowManager.update();
            config.FRAME_COUNTER += 1;
            if ((config.FRAME_COUNTER == 300)&&(config.MONSTER_IS_THERE)) {
                config.FIRING_FIREBALL = true;
            }
            else if (config.FRAME_COUNTER == 360) {
                config.FRAME_COUNTER = 0;
                config.FIRING_FIREBALL = false;
            }
          
           
            scoreboard.update();
            stage.update();

        }



        main() {

            game = new createjs.Container();
            createjs.Sound.stop();
            createjs.Sound.play("level3Sound", { "loop": -1 });
          
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("level3Background"));
            game.addChild(city);

                  

           
            // adding final monster to stage
            final_Monster = new objects.FinalMonster("FinalMonster");
            game.addChild(final_Monster);

            // adding doraemon to stage
            doraemon = new objects.Doraemon("Dom");
            game.addChild(doraemon);

            //making sure that doraemon has bow
            config.HAVING_BOW = true;
          
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            collision_other = new managers.Collision_other();
            stage.addChild(game);

        }
    }
} 