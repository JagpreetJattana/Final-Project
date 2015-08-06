module objects {
    //Bow Class ++++++++++++++++++++++++++++++++++++++
    export class Bow extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "Bow";

          //  this.soundString = "bow";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fireball has left screen
            if (this.x < -2000) {
                
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 390); // start bow at random location
           // this.y = 100;
            this.x = 860; // start bow off stage
            
          
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= 5; // moves bow from left to right
            this.checkBounds();
            if (config.HAVING_BOW) {
                game.removeChild(iron_bow);
            }
        }
    }
}    