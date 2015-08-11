module states {
    //class defining play state
    export class Play_Level_Two {
        //game variables



        constructor() {
            this.main();

        }
        //method updating playing state objects

        public update() {
           
            doraemon.update();
           // doraemonArrow.update();
            if (!config.DORAEMON_DIEING) {
                city.update();
                arrowManager.update();
                ring.update();
                 iron_bow.update();

                obstacle1.update();
                obstacle_down.update();
                collision.check_obstacle();
                 collision.check(iron_bow);
                //  if (config.ARROW_FIRED) {
                // collision_other.check(watermellon, arrow);
                //   }
                watermellon.update();

                collision.check(ring);
                collision.check(obstacle1);
                collision.check(obstacle_down);
                collision.check(watermellon);
                scoreboard.update();
            }
            stage.update();

        }



        main() {

            game = new createjs.Container();

            createjs.Sound.stop();
            createjs.Sound.play("level1Sound", { "loop": -1 });
          
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);

            //arrow = new objects.Arrow();

            // add superman object to stage
            //   superman = new objects.Superman(assets.loader.getResult("superman"));
          

            doraemonArrow = new objects.Doraemon("DomArrow");

         

            // add 3 fireballs objects to stage
            //obstacle1 = new objects.Obstacle(assets.loader.getResult("obstacle1"));
            obstacle1 = new objects.Obstacle("obstacle1");
            game.addChild(obstacle1);

            //obstacle_down = new objects.Obstacle_down(assets.loader.getResult("obstacle_down"));
            obstacle_down = new objects.Obstacle_down("obstacle2");
            game.addChild(obstacle_down);

            //add rings object to stage
            ring = new objects.Ring("ring");
            game.addChild(ring);

            //add bow to the stage
            iron_bow = new objects.Bow("Iron_Bow");
            game.addChild(iron_bow);

            watermellon = new objects.WaterMellon("melon");
            game.addChild(watermellon);

            doraemon = new objects.Doraemon("Dom");
            game.addChild(doraemon);
          
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision managers
            collision = new managers.Collision();
            collision_other = new managers.Collision_other();
            stage.addChild(game);

        }
    }
} 