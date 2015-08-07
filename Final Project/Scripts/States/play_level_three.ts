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
            doraemon.update();
            arrowManager.update();
            finalMonster.update();
            fireballManager.update();
           
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

            finalMonster = new objects.FinalMonster("FinalMonster");
            game.addChild(finalMonster);
          
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            stage.addChild(game);

        }
    }
} 