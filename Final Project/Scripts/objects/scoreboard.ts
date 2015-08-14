module objects {
    export class ScoreBoard {
        //Public properties
        public score: number = 0;
        public lives: number = 5;
        public dpower: number = 100;
        public mpower: number = 100;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;
        private doraemon_power: createjs.Text;
        private monster_power: createjs.Text;
        //constructor++++++
        constructor() {
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.doraemon_power = new createjs.Text("Doraemon:", "40px Consolas", "#FFFF00");
            this.monster_power = new createjs.Text("Monster:", "40px Consolas", "#FFFF00");;
            this.scoreLabel.x = 350;
            this.monster_power.x = 350;
            
            //To shoe the scoreboard according to the active state
            if (config.ACTIVE_STATE == constants.PLAY_LEVEL_THREE) {
                game.removeChild(this.scoreLabel);
                game.removeChild(this.livesLabel);
                game.addChild(this.doraemon_power);
                game.addChild(this.monster_power);
            }
            else {
                game.removeChild(this.doraemon_power);
                game.removeChild(this.monster_power);
                game.addChild(this.livesLabel);
                game.addChild(this.scoreLabel);
            }   

        }

        //Public methods
        public update() {

            if (config.ACTIVE_STATE == constants.PLAY_LEVEL_THREE) {
                this.doraemon_power.text = "Doraemon:" + this.dpower;
                this.monster_power.text = "Monster:" + this.mpower;
            } else {
                this.livesLabel.text = "Lives: " + this.lives;
                this.scoreLabel.text = "Score: " + this.score;
            }
            
        }
    }



} 