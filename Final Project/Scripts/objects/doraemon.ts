module objects {
    // Domraemon Class ++++++++++++++++++++++++++++++++++++++
    export class Doraemon extends objects.GameObject {
      

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            window.onkeydown = this.jump;
            window.onkeyup = this.jumpdown;
            this.name = "doraemon";
            config.HAVING_BOW = true;


            this.dy = 5;
            this.y = 0;

            this.soundString = "supermansound";
            if (config.ACTIVE_STATE == constants.PLAY_LEVEL_THREE) {
                this.x = 100;
            }
            else {
                this.x = 300;
            }
            createjs.Sound.stop();
            createjs.Sound.play(this.soundString, { "loop": -1 });

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y += this.dy;
            this.checkbounds();
            this.performingjump();
            //this.jump();// position superman under mouse
        }

        private checkbounds() {
            if (this.y > 400) {

                this.y = 0;
            }
            else if (this.y < 0) {
                this.y += 7;
                config.JUMP = false;
            }
        }

        private jump(event: KeyboardEvent) {


            switch (event.keyCode) {
                case config.KEY_UP:
                    config.JUMP = true;

                    break;
                case config.KEY_DOWN:
                    config.JUMP = false;
                    break;
                case config.KEY_SPACE:
                    config.FIRING = true;
                    break;


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

        private performingjump() {
            if (config.JUMP) {
                this.y -= 10;

            }
        }
    }
}   