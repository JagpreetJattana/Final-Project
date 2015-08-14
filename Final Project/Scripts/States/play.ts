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

    


        main() {
            createjs.Sound.stop();
            createjs.Sound.play("level1Sound", { "loop": -1 });
            
            game = new createjs.Container();
          
        //adding city object to stage
        city = new objects.City(assets.loader.getResult("Background"));
        game.addChild(city);

       

        
 
      
       // adding upper obstacle to stage
        obstacle1 = new objects.Obstacle("obstacle1");
        game.addChild(obstacle1);

    // adding lower obstacle to stage
        obstacle_down = new objects.Obstacle_down("obstacle2");
        game.addChild(obstacle_down);

        //add rings object to stage
        ring = new objects.Ring("ring");
        game.addChild(ring);

// adding doraemon to stage
        doraemon = new objects.Doraemon("Dom");
        game.addChild(doraemon);


      
         //add scoreboard
        scoreboard = new objects.ScoreBoard();
        //add collision manager
        collision = new managers.Collision();
        collision_other = new managers.Collision_other();
        stage.addChild(game);

    }
    }
} 