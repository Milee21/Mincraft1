var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL ("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top : player_y,
            left : player_y
        });
        canvas.add(player_object);
    });
}

function block_image(get_image)
{
    fabric.Image.fromURL (get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top : player_y,
            left : player_y
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey && keyPressed == "80")
    {
        console.log(" p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey && keyPressed == "77")
    {
        console.log(" m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == "38")
    {
        up();
        console.log("up");
    }

    if (keyPressed == "40")
    {
        down();
        console.log("down");
    }
    
    if (keyPressed == "37")
    {
        left();
        console.log("left");
    }

    if (keyPressed == "39")
    {
        right();
        console.log("right");
    }

    if (keyPressed == "67")
    {
        block_image("cloud.jpg");
        console.log("Cloud");
    }

    if (keyPressed == "68")
    {
        block_image("dark_green.png");
        console.log("Dark Green");
    }

    if (keyPressed == "71")
    {
        block_image("ground.png");
        console.log("Ground");
    }

    if (keyPressed == "76")
    {
        block_image("light_green.png");
        console.log("Light  Green");
    }

    if (keyPressed == "82")
    {
        block_image("roof.jpg");
        console.log("Roof");
    }

    if (keyPressed == "84")
    {
        block_image("trunk.jpg");
        console.log("Trunk");
    }

    if (keyPressed == "85")
    {
        block_image("unique.png");
        console.log("Unique");
    }

    if (keyPressed == "87")
    {
        block_image("wall.jpg");
        console.log("Wall");
    }

    if (keyPressed == "89")
    {
        block_image("yellow_wall.png");
        console.log("Yellow Wall");
    }
}



