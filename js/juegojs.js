function main() {

    //start crafty
    Crafty.init(512, 512);
    //Crafty.canvas();

    //prepare the spritesheet for game use
    Crafty.sprite(64, "images/crafty.png", {
        player: [0, 0]
    });

    //loading screen that displays while assets are being loaded
    Crafty.scene("loading", function () {
        Crafty.load(["images/crafty.png"], function () {
            Crafty.scene("main");
        });

        //white background with some loading text
        Crafty.background("#FFF");
        Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 150, y: 120 })
                .text("Loading")
                .css({ "text-align": "center" });
    });

    //automatically play the loading scene
    Crafty.scene("loading");

    //
    Crafty.c('Ball', {
        Ball: function() {
                //setup animations
                this.requires("SpriteAnimation")
                .animate("walk_left", 1,0,1)
                .animate("walk_right", 0,0,0)
                .animate("walk_up", 2,0,2)
                .animate("walk_down", 3,0,3)
                //change direction when a direction change event is received
                .bind("NewDirection",
                    function (direction) {
                        if (direction.x < 0) {
                            if (!this.isPlaying("walk_left"))
                                this.stop().animate("walk_left", 10, -1);
                        }
                        if (direction.x > 0) {
                            if (!this.isPlaying("walk_right"))
                                this.stop().animate("walk_right", 10, -1);
                        }
                        if (direction.y < 0) {
                            if (!this.isPlaying("walk_up"))
                                this.stop().animate("walk_up", 10, -1);
                        }
                        if (direction.y > 0) {
                            if (!this.isPlaying("walk_down"))
                                this.stop().animate("walk_down", 10, -1);
                        }
                        if(!direction.x && !direction.y) {
                            this.stop();
                        }
                })
            return this;
        }
    });

    Crafty.c("LeftControls", {
        init: function() {
            this.requires('Multiway');
        },

        leftControls: function(speed) {
            this.multiway(speed, {W: -90, S: 90, D: 0, A: 180})
            return this;
        }

    });

    Crafty.scene("main", function () {
        generateWorld();

        //create our player entity with some premade components
        var player1 = Crafty.e("2D, DOM, Ball, player, LeftControls")
                .attr({ x: 256, y: 256, z: 1 })
                .leftControls(1)
                .Ball();
    });
};
