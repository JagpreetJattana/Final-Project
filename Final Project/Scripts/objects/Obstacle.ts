module objects {
    // obstacle class. This is class defines upper obstacle
    export class Obstacle extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "obstacle1";
            
            this.soundString = "fireballs";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if obstackle has left screen
            if (this.x < 0) {
                config.RINGSTRIKE = false;
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 142); // start obstacle at random location
           // this.y =142;
            this.x = 660; // start obstacle off stage
            
          
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            
            this.x-= 3; // moves obstacle from right to left
            
            this.checkBounds();
        }
    }
}   