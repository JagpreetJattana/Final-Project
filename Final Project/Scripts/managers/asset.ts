module managers {
    export class Assets {
        //public properties
        public textureAtlas: createjs.SpriteSheet;
        public loader: createjs.LoadQueue;


        //private properties
        private manifest = [
            { id: "Background", src: "assets/images/Background.png" },
            { id: "superman", src: "assets/images/superman.png" },
            { id: "ring", src: "assets/images/ring.png" },
            { id: "menu", src: "assets/images/menu.png" },
            { id: "gameoverlbl", src: "assets/images/gameover.png" },
            { id: "playagainbutton", src: "assets/images/playagain.png" },
            { id: "startbutton", src: "assets/images/startbutton.png" },
            { id: "obstacle1", src: "assets/images/obstacle1.png" },
            { id: "obstacle_down", src: "assets/images/obstacle2.png" },
            { id: "ringing", src: "assets/audio/pickupcoin.wav" },
            { id: "fireballs", src: "assets/audio/destroy.wav" },
            { id: "supermansound", src: "assets/audio/supermansound.ogg" },
            { id: "colliding", src: "assets/images/colliding.png" },
            { id: "bullet", src: "assets/images/bullet.png" },
        ];
        //constructor

        private data = {
            "images": [
                "assets/images/MyJason.png"
            ],

            "frames": [
                [2, 2, 54, 65, 0, 0, 0],
                [2, 69, 48, 300, 0, 0, 0],
                [2, 371, 48, 300, 0, 0, 0],
                [2, 673, 35, 44, 0, 0, 0],
                [39, 673, 6, 6, 0, 0, 0],
                [2, 719, 35, 44, 0, 0, 0],
                [2, 765, 35, 44, 0, 0, 0],
                [2, 811, 35, 44, 0, 0, 0]
            ],

            "animations": {
                "ring": [0],
                "obstacle1": [1],
                "obstacle2": [2],
                
                "bullet": [4],
               

                "Dom": {
                    frames: [3, 5, 6, 7],
                    speed: 0.5
                }
                
            },



        }
        constructor() {
            this.preload();

        }

        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            
          
            this.textureAtlas = new createjs.SpriteSheet(this.data);
        }

    }
}