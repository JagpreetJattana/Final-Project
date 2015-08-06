module objects {
    // Ring Class ++++++++++++++++++++++++++++++++++++++
    export class Ring extends objects.GameObject {
       

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "ring";
            this.soundString = "ringing";
            this.dx = 5;


            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if ring has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        public reset(): void {
           
            if (!config.RINGSTRIKE) {
                this.y = Math.floor(Math.random() * 390); // start ring at random location
                this.x = obstacle1.x + 300;
            } else {

                this.x = 1000;
                this.y = 10;

           }// start ring off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves ring right the stage
            this.checkBounds();
        }
    }
}  