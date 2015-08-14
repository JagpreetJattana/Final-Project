
module states {
    //class defining menu state
    export class Menu {
        constructor() {
            this.main();

        }
        //updating objects in menu state
        public update() {
            city.update();
          
            stage.update();
        }

        //method for moving game from menu to play state
        public stateTrasition() {

            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(levelsButton);
            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            game.removeChild(nextButton);
            game.addChild(level1inst);
            game.addChild(playButton2);
            

        }

        main() {
            
            game = new createjs.Container();
            createjs.Sound.stop();
            createjs.Sound.play("menuSound", { "loop": -1 });
            btnMethods = new buttonMethods.Button_Methods();

            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);
    
          
            //adding play button
            playButton = new objects.Button(assets.loader.getResult("playButton"), 275, 100);
            game.addChild(playButton);
            playButton.on("click", btnMethods.playButton);

            //adding another play button
            playButton2 = new objects.Button(assets.loader.getResult("playButton"), 500, 330);
            playButton2.on("click", btnMethods.playButton2);

            //adding instructinos button
            instructionsButton = new objects.Button(assets.loader.getResult("instructionsButton"), 275, 150);
            game.addChild(instructionsButton);
            instructionsButton.on("click", btnMethods.instructionsButton);

            //adding levels button
            levelsButton = new objects.Button(assets.loader.getResult("levelsButton"), 275, 200);
            game.addChild(levelsButton);
            levelsButton.on("click", btnMethods.levelsButton);

            //adding exit button
            exitButton = new objects.Button(assets.loader.getResult("exitButton"), 275, 250);
            game.addChild(exitButton);
            exitButton.on("click", btnMethods.exitButton);

            //adding level1 button
            level1Button = new objects.Button(assets.loader.getResult("level1Button"), 300, 100);
            level1Button.on("click", btnMethods.level1Button);

            //adding exit button
            level2Button = new objects.Button(assets.loader.getResult("level2Button"), 300, 185);
            level2Button.on("click", btnMethods.level2Button);

            //adding exit button
            level3Button = new objects.Button(assets.loader.getResult("level3Button"), 300, 270);
            level3Button.on("click", btnMethods.level3Button);

            //adding next and back buttons
            nextButton = new objects.Button(assets.loader.getResult("nextButton"), 500, 330);
            nextButton.on("click", btnMethods.nextButton);
            backButton = new objects.Button(assets.loader.getResult("backButton"), 150, 330);
            backButton.on("click", btnMethods.backButton);
            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 300, 330);
            menuButton.on("click", btnMethods.menuButton);

            
            //initializing instructions lable
            level1inst = new createjs.Bitmap(assets.loader.getResult("l1instlbl"));
            level2inst = new createjs.Bitmap(assets.loader.getResult("l2instlbl"));
            level3inst = new createjs.Bitmap(assets.loader.getResult("l3instlbl"));
            

            //adding game container to stage
            stage.addChild(game);

        }
    }


} 