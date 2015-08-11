
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
        //method that is called when play button is clicked
        private playbuttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();
            
            changeState(constants.PLAY_STATE);

        }

        //method that is called when instructions button is clicked
        private instructionsbuttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_STATE);

        }

        //method that is called when levels button is clicked
        private levelsbuttonclicked(event: createjs.MouseEvent) {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(levelsButton);
            
            game.addChild(level1Button);
            game.addChild(level2Button);
            game.addChild(level3Button);

        }
        //method that is called when exit button is clicked
        private exitbuttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_STATE);

        }

        //method that is called when level1 button is clicked
        private level1buttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_STATE);

        }

        //method that is called when level2 button is clicked
        private level2buttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_LEVEL_TWO);

        }

        //method that is called when level3 button is clicked
        private level3buttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_LEVEL_THREE);

        }

        main() {
            
            game = new createjs.Container();
            createjs.Sound.stop();
            createjs.Sound.play("menuSound", { "loop": -1 });

            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);
    
          
            //adding play button
            playButton = new objects.Button(assets.loader.getResult("playButton"), 275, 100);
            game.addChild(playButton);
            playButton.on("click", this.playbuttonclicked);
           

            //adding instructinos button
            instructionsButton = new objects.Button(assets.loader.getResult("instructionsButton"), 275, 150);
            game.addChild(instructionsButton);
            instructionsButton.on("click", this.instructionsbuttonclicked);

            //adding levels button
            levelsButton = new objects.Button(assets.loader.getResult("levelsButton"), 275, 200);
            game.addChild(levelsButton);
            levelsButton.on("click", this.levelsbuttonclicked);

            //adding exit button
            exitButton = new objects.Button(assets.loader.getResult("exitButton"), 275, 250);
            game.addChild(exitButton);
            exitButton.on("click", this.exitbuttonclicked);

            //adding level1 button
            level1Button = new objects.Button(assets.loader.getResult("level1Button"), 275, 100);
           
            level1Button.on("click", this.level1buttonclicked);

            //adding exit button
            level2Button = new objects.Button(assets.loader.getResult("level2Button"), 275, 200);
            
            level2Button.on("click", this.level2buttonclicked);

            //adding exit button
            level3Button = new objects.Button(assets.loader.getResult("level3Button"), 275, 300);
            
            level3Button.on("click", this.level3buttonclicked);

            //adding game container to stage
            stage.addChild(game);

        }
    }


} 