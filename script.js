function getRandomEasyImage() {  
    //declare an array to store the images  
    var randomImage = new Array();  
      
    //insert the URL of images in array  
    randomImage[0] = "images/1.png";   
    randomImage[1] = "images/2.png";  
    randomImage[2] = "images/3.png";  
    randomImage[3] = "images/4.png";
    randomImage[4] = "images/5.png";
    randomImage[5] = "images/6.png";
    randomImage[6] = "images/7.png";
    randomImage[7] = "images/8.png";
    randomImage[8] = "images/9.png";
    randomImage[9] = "images/10.png";
    randomImage[10] = "images/11.png";
    randomImage[11] = "images/12.png";
    randomImage[12] = "images/13.png";
    randomImage[13] = "images/14.png";
    randomImage[14] = "images/15.png";
    randomImage[15] = "images/16.png";
    randomImage[16] = "images/17.png";
    randomImage[17] = "images/18.png";
    randomImage[18] = "images/19.png";
    randomImage[19] = "images/20.png";
    randomImage[20] = "images/baby.png";
      
    //generate a number and provide to the image to generate randomly  
    var number = Math.floor(Math.random()*randomImage.length);  
      
    //return the images generated by a random number  
    return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
    }  

    function getRandomHardImage() {  
        //declare an array to store the images  
        var randomImage = new Array();  
          
        //insert the URL of images in array  
        randomImage[0] = "images/Hard/1h.png";   
        randomImage[1] = "images/Hard/2h.png";  
        randomImage[2] = "images/Hard/3h.png";  
        randomImage[3] = "images/Hard/4h.png";
        randomImage[4] = "images/Hard/5h.png";
        randomImage[5] = "images/Hard/6h.png";
        randomImage[6] = "images/Hard/7h.png";
        randomImage[7] = "images/Hard/8h.png";
        randomImage[8] = "images/Hard/9h.png";
        randomImage[9] = "images/Hard/10h.png";
        randomImage[10] = "images/Hard/11h.png";
        randomImage[11] = "images/Hard/12h.png";
        randomImage[12] = "images/Hard/13h.png";
        randomImage[13] = "images/Hard/14h.png";
        randomImage[14] = "images/Hard/15h.png";
        randomImage[15] = "images/Hard/16h.png";
        randomImage[16] = "images/Hard/17h.png";
        randomImage[17] = "images/Hard/18h.png";
        randomImage[18] = "images/Hard/19h.png";
        randomImage[19] = "images/Hard/20h.png";
          
        //generate a number and provide to the image to generate randomly  
        var number = Math.floor(Math.random()*randomImage.length);  
          
        //return the images generated by a random number  
        return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
        }  
    

    
