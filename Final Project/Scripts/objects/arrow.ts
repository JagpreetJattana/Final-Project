module objects {

    // Arrow Class
    export class Arrow extends objects.GameObject {
        constructor() {
            super("Arrow");
            this.init();
            game.addChild(this);
        }

        // PUBLIC METHODS
        public init() {
            
           
          
            this.x = doraemon.x;
           this.y = doraemon.y;
        }

        update() {
            this.x += 10;
           
        }
    }
}  