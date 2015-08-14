module states {
    //class defining play level two state
    export class Play_Level_Two {
        //game variables



        constructor() {
            this.main();

        }
        //method updating play level two state objects

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
            city = new objects.City(assets.loader.getResult("level2Background"));
            game.addChild(city);

                      
           // adding upper obtacle to stage
            obstacle1 = new objects.Obstacle("obstacle1");
            game.addChild(obstacle1);

          // adding lower obstacle to stage
            obstacle_down = new objects.Obstacle_down("obstacle2");
            game.addChild(obstacle_down);

            //add rings object to stage
            ring = new objects.Ring("ring");
            game.addChild(ring);

            //add bow to the stage
            iron_bow = new objects.Bow("Iron_Bow");
            game.addChild(iron_bow);

            // adding watermellon to stage
            watermellon = new objects.WaterMellon("melon");
            game.addChild(watermellon);

            // adding doraemon to stage
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