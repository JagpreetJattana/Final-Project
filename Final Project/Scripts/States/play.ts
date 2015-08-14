module states {
    //class defining play state
    export class Play {
        //game variables



        constructor() {
            this.main();

        }
        //method updating playing state objects

        public update() {
         
            doraemon.update();
            if (!config.DORAEMON_DIEING) {
                city.update();
                // arrowManager.update();
                ring.update();


                obstacle1.update();
                obstacle_down.update();

                collision.check(ring);
                collision.check_obstacle();
                scoreboard.update();
            }
            stage.update();

        }

        public stateTransition() {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);

            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            game.removeChild(nextButton);
            game.removeChild(playButton2); 
           
            game.addChild(level2inst);

        }


        main() {
            createjs.Sound.stop();
            createjs.Sound.play("level1Sound", { "loop": -1 });
            
            game = new createjs.Container();
          
        //adding city object to stage
        city = new objects.City(assets.loader.getResult("Background"));
        game.addChild(city);

       

        // add superman object to stage
     //   superman = new objects.Superman(assets.loader.getResult("superman"));
 
      
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

        doraemon = new objects.Doraemon("Dom");
        game.addChild(doraemon);


      
      //  for (var ball = 0; ball < 3; ball++) {
        //    fireballs[ball] = new objects.Fireball(assets.loader.getResult("fireball"));
            //game.addChild(fireballs[ball]);
       // }
        //add scoreboard
        scoreboard = new objects.ScoreBoard();
        //add collision manager
        collision = new managers.Collision();
        collision_other = new managers.Collision_other();
        stage.addChild(game);

    }
    }
} 