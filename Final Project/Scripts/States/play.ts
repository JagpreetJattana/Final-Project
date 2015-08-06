module states {
    //class defining play state
    export class Play {
        //game variables



        constructor() {
            this.main();

        }
        //method updating playing state objects

        public update() {
            city.update();
            doraemon.update();
            arrowManager.update();
            ring.update();
            

            obstacle1.update();
            obstacle_down.update();
         
            collision.check(ring);
            collision.check(obstacle1);
            collision.check(obstacle_down);
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