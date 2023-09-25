// var myBackground;

// function startGame() {
//     myBackground = new component(700, 350, "Image/background2.png", 0, 0, "background");
//     myGameArea.start();
// }

// // Arrière plan du jeu

// var myGameArea = {
//     canvas : document.createElement("canvas"),

//     start : function() {
//         this.canvas.width = 800;
//         this.canvas.height = 300;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
        
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     },
//     stop : function() {
//         clearInterval(this.interval);
//     }

// }
// function component(width, height, color, x, y, type) {
//     this.type = type;
//     if (type == "image" || type == "background") {
//         this.image = new Image();
//         this.image.src = color;
//     }
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;    
//     this.x = x;
//     this.y = y;    
//     this.update = function() {
//         ctx = myGameArea.context;
//         if (type == "image" || type == "background") {
//             ctx.drawImage(this.image, 
//                 this.x, 
//                 this.y,
//                 this.width, this.height);
//         if (type == "background") {
//             ctx.drawImage(this.image, 
//                 this.x + this.width, 
//                 this.y,
//                 this.width, this.height);
//         }
//         } else {
//             ctx.fillStyle = color;
//             ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         if (this.type == "background") {
//             if (this.x == -(this.width)) {
//                 this.x = 0;
//             }
//         }
//     }    
// }    
// // dessiner l'arrière plan

// function updateGameArea() {
//     myGameArea.clear();
//     myBackground.speedX = -1;
//     myBackground.newPos();    
//     myBackground.update();

// }


var myBackground;

function startGame() {
    myBackground = new Background(700, 350, 0, 0, "background");
    myGameArea.start();
}

// Arrière plan du jeu

var myGameArea = {
    canvas : document.createElement("canvas"),

    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.getElementById("game_screen").insertBefore(this.canvas, document.getElementById("game_screen").childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }

}
function Background(width, height, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src =  "assets/background2.png";
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = this.image.src;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }  
}    
// dessiner l'arrière plan

function updateGameArea() {
    myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();

}