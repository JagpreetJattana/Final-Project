module buttonMethods {

    export class Button_Methods {

        public menuButton(): void{

            changeState(constants.MENU_STATE);
        }

        public playButton(): void {

            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();

            changeState(constants.PLAY_STATE);}

        public instructionsButton(): void { }

        public levelsButton(): void {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(levelsButton);

            game.addChild(level1Button);
            game.addChild(level2Button);
            game.addChild(level3Button);
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