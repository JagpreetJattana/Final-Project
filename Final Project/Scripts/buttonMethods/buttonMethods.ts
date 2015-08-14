module buttonMethods {

    export class Button_Methods {

        public menuButton(): void{

            changeState(constants.MENU_STATE);
        }

        public playButton(): void {

            menu.stateTrasition();
        }
        public playButton2(): void {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);

            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            game.removeChild(nextButton);
            game.removeChild(playButton2);
            if (config.ACTIVE_STATE == constants.MENU_STATE) {
                changeState(constants.PLAY_STATE);
            }

            else if (config.ACTIVE_STATE == constants.PLAY_STATE) {
            changeState(constants.PLAY_LEVEL_TWO);
            }
            else if (config.ACTIVE_STATE == constants.PLAY_LEVEL_TWO) {
                changeState(constants.PLAY_LEVEL_THREE);
            }


        }

        public nextLevelButton(): void {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);

            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            game.removeChild(nextButton);
            game.removeChild(playButton2);
            game.removeChild(nextLevelButton);
            game.removeChild(transitionLbl);
            if (config.ACTIVE_STATE == constants.PLAY_STATE) {
              
                game.addChild(level2inst);
                game.addChild(playButton2);
            }
            else if (config.ACTIVE_STATE == constants.PLAY_LEVEL_TWO) {
             
                game.addChild(level3inst);
                game.addChild(playButton2);
            }
        }

        public nextButton(): void {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
    
            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            if (config.MENU_INSTRUCTIONS == 0) {
                game.addChild(level2inst);
                game.addChild(backButton);
                game.addChild(menuButton);
                config.MENU_INSTRUCTIONS = 1;
            }

            else if (config.MENU_INSTRUCTIONS == 1) {
                game.addChild(level3inst);
                game.removeChild(nextButton);
                game.addChild(menuButton);
                game.addChild(backButton);
                config.MENU_INSTRUCTIONS = 2;
            }
            game.addChild(backButton);
           
        }
        public backButton(): void {

            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(playButton);
            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(nextButton);
            game.removeChild(menuButton);
            game.removeChild(backButton);

            if (config.MENU_INSTRUCTIONS == 1) {
                game.addChild(level1inst);
                game.addChild(nextButton);
                game.addChild(menuButton);
                config.MENU_INSTRUCTIONS = 0;
            }
            else if (config.MENU_INSTRUCTIONS == 2) {
                game.addChild(level2inst);
                game.addChild(nextButton);
                game.addChild(menuButton);
                game.addChild(backButton);
                config.MENU_INSTRUCTIONS = 1;

            }

        }

        public instructionsButton(): void {

            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(levelsButton);
            game.addChild(nextButton);
            game.addChild(menuButton);
            
            game.addChild(level1inst);

        }

        public levelsButton(): void {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(levelsButton);

            game.addChild(level1Button);
            game.addChild(level2Button);
            game.addChild(level3Button);
            game.addChild(menuButton);
        }

        public level1Button(): void {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_STATE);
        }

        public level2Button(): void {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_LEVEL_TWO);

        }

        public level3Button(): void {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_LEVEL_THREE);

        }

        public exitButton(): void{
            window.close();
        }




    }




} 