// Simple Responsive JavaScript Image Gallery 

let galleryImg = document.querySelectorAll('.slides'); // Gets all the "div" with class ".slides"
let newImg; // newImg = 0
let windowWidth = window.windowWidth; 

//Image Gallery 

galleryImg.forEach((image, index) => {
    image.onclick = () => {
        newImg = index + 1; // First Image = [1] since JS starts with [0] | 0 [index] + 1 
        // Main Image Gallery Container
        let container = document.body; // return <body>
        let imgWindow = document.createElement('div'); //Creates new <div>
        container.appendChild(imgWindow); //Add newly created imgWindow<div> inside the <body> 
        imgWindow.setAttribute('class', 'img-window'); //Adds new class "img-window" to <div>
        imgWindow.setAttribute('onclick', 'closeImg()'); //Add onclick on <div> for "Close Image Function"

        // Showcase each Images || Gallery
        let newImage = image.firstElementChild.cloneNode(); //Make a copy of first "img" from <img> and return the cloned "img"
        imgWindow.appendChild(newImage); // Add cloned <img> inside imgWindow<div>
        newImage.classList.remove('img-sz'); // Removes the class "img-sz"
        newImage.classList.add('popup-img'); // Add new class "popup-img"
        newImage.setAttribute('id', 'current-img'); // Add new id "current-img"

        // Prev and Next Button
        newImage.onload = () => {
            let nxtBtn = document.createElement('a'); //Creates new "a" anchor link
            nxtBtn.innerHTML = '<i class="fas fa-chevron-right"></i>'; //Make sure to embed "Font Awesome"
            container.appendChild(nxtBtn); // Inserts Next Button inside the Main Container of the Image Gallery
            nxtBtn.setAttribute('class', 'img-btn-next'); // Add New Class for CSS of Next Button
            nxtBtn.setAttribute('onclick', 'changeImg(1)'); // Add onclick function for Next Button | "changeImg(1)" - [1] Integer

            let prvBtn = document.createElement('a'); //Creates new "a" anchor link
            prvBtn.innerHTML = '<i class="fas fa-chevron-left"></i>'; //Make sure to embed "Font Awesome"
            container.appendChild(prvBtn); // Inserts Previous Button inside the Main Container of the Image Gallery
            prvBtn.setAttribute('class', 'img-btn-prev'); // Add New Class for CSS of Previous Button
            prvBtn.setAttribute('onclick', 'changeImg(0)'); // Add onclick function for Previous Button | "changeImg(0)" - [0] Integer
            
            let clsBtn = document.createElement('a'); //Creates new "a" anchor link
            clsBtn.innerHTML = '<i class="fas fa-times-circle"></i> Close'; //Make sure to embed "Font Awesome"
            imgWindow.appendChild(clsBtn); // Inserts Close Button inside the Main Container of the Image Gallery
            clsBtn.setAttribute('class', 'img-btn-close'); // Add New Class for CSS of Close Button
            clsBtn.setAttribute('onclick', 'closeImg()'); // Add onclick function for Close Button | Close Function
        }
    }
})

// Close Function for Image Gallery
closeImg = () => {
    document.querySelector('.img-window').remove(); 
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
}

// Change Image Function

changeImg = (change) => {
    document.querySelector('#current-img').remove();

    let newWindow = document.querySelector('.img-window');
    let newestImg = document.createElement('img');
    newWindow.appendChild(newestImg);
    
    //Change Function
    let numNewImg; // 0
    if(change === 1) { //changeImg(1) - Next Button
        numNewImg = newImg + 1; // 3 + 1 = 4
        if(numNewImg > galleryImg.length){ 
            numNewImg = 1; // If 4 > 3, it will make numNewImg back to "1" to put it back to first image
        }
    }
    else if(change === 0){ //changeImg(0) - Prev Button
        numNewImg = newImg - 1; // 1 - 1 = 0
        if(numNewImg < 1){
            numNewImg = galleryImg.length; // If 0 < 1, it will make numNewImg back to "3" to put it back to last image
        }
    }

    newestImg.setAttribute('src', 'img/img-' + numNewImg + '.jpg'); //To show the images (img/img-[1/2/3 = numNewImg].jpg)
    newestImg.setAttribute('class', 'popup-img'); // Add popup-img class again since we created a new img tag (newestImg)
    newestImg.setAttribute('id', 'current-img'); // Add current-img ID again since we created a new img tag (newestImg)

    newImg = numNewImg; // newImg = numNewImg (New calculated newImg) from if else function
    
}

// Keyboard Event | Left and Right Keyboard Button
document.onkeydown = () => {
    //Left Key
    if (event.keyCode == 37) {
        changeImg(1)
    } else if (event.keyCode == 39) { // Right Key
        changeImg(0)
    }
}



