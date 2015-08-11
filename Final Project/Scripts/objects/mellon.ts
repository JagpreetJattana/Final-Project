module objects {
    // water mellon Class ++++++++++++++++++++++++++++++++++++++
    export class WaterMellon extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "watermellon";

            this.soundString = "watermelonSound";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fireball has left screen
            if (this.x < 0) {
              
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 390); // start watermellon at random location
            // this.y =142;
            this.x = 660; // start watermellon off stage
            
          
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            if (!config.MELLON_IS_THERE) {
                game.addChild(watermellon);
                this.reset();
                config.MELLON_IS_THERE = true;
            } else {
                if (!config.MELLON_DIEING) {
                    this.x -= 4; // moves water mellons from right to left
                    this.checkBounds();
                }
            }
            
           
        }
    }
}    