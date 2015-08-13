module states {
    //class defining game over state
    export class Win {
        //constructor
        constructor() {
            this.main();

        }
        //update methid that updates the objects in this state
        public update() {
            city.update();
            stage.update();
        }
        //fauntion that is called when clicked playagain button
        private playagainbuttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_STATE);

        }

        main() {

            game = new createjs.Container();

            btnMethods = new buttonMethods.Button_Methods();

            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);

            //adding game over label
            winlbl = new createjs.Bitmap(assets.loader.getResult("winlbl"));
            game.addChild(winlbl);

            //adding play again button
            //  playagainbutton = new objects.Button(assets.loader.getResult("playagainbutton"), 320, 330);
            ///   game.addChild(playagainbutton);
            //   playagainbutton.on("click", this.playagainbuttonclicked);

            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 320, 330);
            game.addChild(menuButton);
            menuButton.on("click", btnMethods.menuButton);

            stage.addChild(game);

        }
    }

} 