module states {
    //class defining win state
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
     

        main() {

            game = new createjs.Container();

            btnMethods = new buttonMethods.Button_Methods();

            //adding city object to stage
            city = new objects.City(assets.loader.getResult("level3Background"));
            game.addChild(city);

            //adding game win label
            winlbl = new createjs.Bitmap(assets.loader.getResult("winlbl"));
            game.addChild(winlbl);

       
            // adding menu button to stage
            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 320, 330);
            game.addChild(menuButton);
            menuButton.on("click", btnMethods.menuButton);

            stage.addChild(game);

        }
    }

} 