module states {
    //class defining play state
    export class Play_Level_Three {
        //game variables



        constructor() {
            this.main();

        }
        //method updating playing state objects

        public update() {
            city.update();
            fireballManager.update();
            doraemon.update();
            final_Monster.update();
            arrowManager.update();
            config.FRAME_COUNTER += 1;
            if (config.FRAME_COUNTER == 300) {
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
          
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);

         

            // add superman object to stage
            //   superman = new objects.Superman(assets.loader.getResult("superman"));
            doraemon = new objects.Doraemon("Dom");
            game.addChild(doraemon);

            //add colliding to the stage
            colliding = new objects.Colliding(assets.loader.getResult("colliding"));

            final_Monster = new objects.FinalMonster("FinalMonster");
            game.addChild(final_Monster);
          
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            collision_other = new managers.Collision_other();
            stage.addChild(game);

        }
    }
} 