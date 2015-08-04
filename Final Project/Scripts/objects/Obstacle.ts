module objects {
    // fireball Class ++++++++++++++++++++++++++++++++++++++
    export class Obstacle extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "obastacle1";
            
            this.soundString = "fireballs";
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
            this.y = Math.floor(Math.random() * 142); // start fireballs at random location
           // this.y =142;
            this.x = 660; // start fireball off stage
            
          
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            
            this.x-= 5; // moves fireball up and down the stage
             // drifts fireballs left
            this.checkBounds();
        }
    }
}   