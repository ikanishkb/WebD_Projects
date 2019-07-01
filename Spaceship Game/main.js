$(document).ready(function(){
    var spaceship = $("#spaceship");
    var bullet = $("#bullet");
    var wall = $("#wall");
    let keyLeft = 37;
    let keyTop = 38;
    let keyRight = 39;
    let keyDown = 40;
    let spaceBar = 32;
    let bulletState = "available";
    let spaceshipSpeed = 10;
    let moveTop = false;
    let moveDown = false;
    let moveLeft = false;
    let moveRight = false;
    let spaceClicked = false;
    let isHit = 0;

    spaceship.css({
        position:"absolute",
        top:50,
        left:100
    })

    bullet.css({
        position:"absolute",
        display:"none"
    })

    wall.css({
        position:"absolute",
        left:1150,
    })

    $(document).on("keydown", function(e){
        e.preventDefault();
        if(e.keyCode == keyLeft){
            moveLeft = true;
        }
        if(e.keyCode == keyRight){
            moveRight = true;
        }
        if(e.keyCode == keyTop){
            moveTop = true;
        }
        if(e.keyCode == keyDown){
            moveDown=true;
        }
        if(e.keyCode == spaceBar){
            spaceClicked = true;
        }
        move();
    })

    $(document).on("keyup", function(e){
        e.preventDefault();
        if(e.keyCode == keyLeft){
            moveLeft = false;
        }
        if(e.keyCode == keyRight){
            moveRight = false;
        }
        if(e.keyCode == keyTop){
            moveTop = false;
        }
        if(e.keyCode == keyDown){
            moveDown=false;
        }
        if(e.keyCode == spaceBar){
            spaceClicked = false;
        }
    })

    function move(){
        if(spaceship.position().left>250){
            moveRight=false;
        }
        if(spaceship.position().top==0){
            moveTop=false;
        }
        if(spaceship.position().left==0){
            moveLeft=false;
        }
        if(spaceship.position().top==410){
            moveDown=false;
        }

        if(moveLeft){
            spaceship.css({
                left: spaceship.position().left-spaceshipSpeed+"px"
            })
        }
        if(moveRight){
            spaceship.css({
                left: spaceship.position().left+spaceshipSpeed+"px"
            })
        }
        if(moveTop){
            spaceship.css({
                top: spaceship.position().top-spaceshipSpeed+"px"
            })
        }
        if(moveDown){
            spaceship.css({
                top: spaceship.position().top+spaceshipSpeed+"px"
            })
        } 

        if(spaceClicked){
            if(bulletState == "available"){
                    bulletState = "unavailable"
                    bullet.css({
                        display:"block",
                        left:spaceship.position().left+150+"px",
                        top:spaceship.position().top+50+"px",
                    }).animate({left:1150},1000,function(){
                        bulletState = "available";
                        console.log(bullet.position());
                        console.log(wall.position());
                        bullet.css({
                            display:"none"})
                    })
                    hit();
                }
            }
    } 

    function moveWall(){
        if(wall.position().top == 410){
        wall.animate({top:0},500)
        }
        else{
            wall.animate({top:410},500)
        }
    }

    function hit(){
        if(bullet.position().top === wall.position().top){  
            isHit ++;
            console.log(isHit);
            $("#displayScore").html(isHit);
        }
    }

    function over(){
        clearInterval(moveRef);
        clearInterval(moveObstacleRef);
        // clearInterval(scorecard);
        alert("Game Over!!");
    }

    var moveRef = setInterval(move,10);
    var moveObstacleRef = setInterval(moveWall,500);
    // var scorecard = setInterval(hit,500);
    setTimeout(over,30000);
})