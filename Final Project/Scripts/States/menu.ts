
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
           

            //adding instructinos button
            instructionsButton = new objects.Button(assets.loader.getResult("instructionsButton"), 275, 150);
            game.addChild(instructionsButton);
          //  instructionsButton.on("click", this.instructionsbuttonclicked);

            //adding levels button
            levelsButton = new objects.Button(assets.loader.getResult("levelsButton"), 275, 200);
            game.addChild(levelsButton);
            levelsButton.on("click", btnMethods.levelsButton);

            //adding exit button
            exitButton = new objects.Button(assets.loader.getResult("exitButton"), 275, 250);
            game.addChild(exitButton);
            exitButton.on("click", btnMethods.exitButton);

            //adding level1 button
            level1Button = new objects.Button(assets.loader.getResult("level1Button"), 275, 100);
           
            level1Button.on("click", btnMethods.level1Button);

            //adding exit button
            level2Button = new objects.Button(assets.loader.getResult("level2Button"), 275, 200);
            
            level2Button.on("click", btnMethods.level2Button);

            //adding exit button
            level3Button = new objects.Button(assets.loader.getResult("level3Button"), 275, 300);
            
            level3Button.on("click", btnMethods.level3Button);

            //adding game container to stage
            stage.addChild(game);

        }
    }


} 