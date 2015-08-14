module states {
    //class defining game over state
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
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);

            transitionLbl = new createjs.Bitmap(assets.loader.getResult("transition"));
            game.addChild(transitionLbl);


            nextLevelButton = new objects.Button(assets.loader.getResult("nextLevelButton"), 500, 330);
            game.addChild(nextLevelButton);
            nextLevelButton.on("click", btnMethods.nextLevelButton);
         
            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 320, 330);
            game.addChild(menuButton);
            menuButton.on("click", btnMethods.menuButton);

            stage.addChild(game);

        }
    }

}  