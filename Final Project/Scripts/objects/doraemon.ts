module objects {
    // Domraemon Class ++++++++++++++++++++++++++++++++++++++
    export class Doraemon extends objects.GameObject {
      

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            window.onkeydown = this.jump;
            window.onkeyup = this.jumpdown;
            this.name = "doraemon";
      
          

            this.dy = 3;
            this.y = 0;

         
            if (config.ACTIVE_STATE == constants.PLAY_LEVEL_THREE) {
                this.x = 100;
            }
            else {
                this.x = 250;
            }
         

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            if (!config.DORAEMON_DIEING) {
                this.y += this.dy;
                this.checkbounds();
                this.performingjump();
            }
          
        }
        public dieing(): void {
            createjs.Sound.play("monsterFiring");
            scoreboard.lives -= 1;
            if (scoreboard.lives < 0) {

                changeState(constants.GAME_OVER_STATE);
            }


            config.DORAEMON_DIEING = true;
            config.HAVING_CONTROLS = false;
            
            doraemon.gotoAndPlay("Dora_die");
            

            window.setTimeout(function () {
                doraemon.y = -900;
                doraemon.gotoAndPlay("Dom");
                       
            }, 1800);
            
            window.setTimeout(function () {
              
               config.DORAEMON_DIEING = false;
               config.HAVING_CONTROLS = true;     
               
            }, 2850);

        }
        private checkbounds() {
            if (this.y > 400) {
                this.dieing();
            }
            else if (this.y < 0) {
                
                this.y += 7;
                config.JUMP = false;
           }
        }

        //performing jump events

        private jump(event: KeyboardEvent) {

            if(config.HAVING_CONTROLS){
                switch (event.keyCode) {
                    case config.KEY_UP:
                        config.JUMP = true;
                        createjs.Sound.play("jumpSound");

                        break;
                    case config.KEY_DOWN:
                        config.JUMP = false;
                        break;
                    case config.KEY_SPACE:
                        config.FIRING = true;
                        break;
                }

            }
        }

        private jumpdown(event: KeyboardEvent) {

            
                switch (event.keyCode) {
                    case config.KEY_UP:
                        config.JUMP = false;
                        // this.y -= 100;
                        break;
                    case config.KEY_DOWN:
                        config.JUMP = false;
                        break;

                    case config.KEY_SPACE:
                        config.FIRING = false;
                        break;
                }
           
        }
        
        //method to perform jump acutally
        private performingjump() {
            if (config.JUMP) {               
                this.y -= 7;
            }
        }
    }
}   