module states {
    //class defining transition state
    export class TransitionState {
        //constructor
        constructor() {
            this.main();

        }
        //update methid that updates the objects in this state
        public update() {
            city.update();
            stage.update();
        }
  

        main() {

            game = new createjs.Container();

   


            //adding city object to stage
            if (config.ACTIVE_STATE == constants.PLAY_STATE) {
                city = new objects.City(assets.loader.getResult("Background"));
                game.addChild(city);
            }

            else if (config.ACTIVE_STATE==constants.PLAY_LEVEL_TWO){

                city = new objects.City(assets.loader.getResult("level2Background"));
                game.addChild(city);
            }

            // adding transition label to stage
            transitionLbl = new createjs.Bitmap(assets.loader.getResult("transition"));
            game.addChild(transitionLbl);

            // adding next level to stage
            nextLevelButton = new objects.Button(assets.loader.getResult("nextLevelButton"), 500, 330);
            game.addChild(nextLevelButton);
            nextLevelButton.on("click", btnMethods.nextLevelButton);
         
            // adding menu button to stage
            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 320, 330);
            game.addChild(menuButton);
            menuButton.on("click", btnMethods.menuButton);

            stage.addChild(game);

        }
    }

}  