module objects {
    // obstacle Class. This class defines downside obstacle
    export class Obstacle_down extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "obstacle_down";

            this.soundString = "fireballs";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if obstacle has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = obstacle1.y+400; // start obstacle at random location
            this.x = 660; // start obstacle off stage
            
          
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= 3; // moves obstacle up and down the stage
            
            this.checkBounds();
        }
    }
}   