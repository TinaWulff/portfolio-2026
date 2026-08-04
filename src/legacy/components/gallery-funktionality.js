

export function galleryFunktionality(imgArray, imgElm, leftBtn, rightBtn, currentIndex) {
    
    const updateImage = () => {
        imgElm.src = imgArray[currentIndex];
    };

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
        updateImage();
    });

    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imgArray.length;
        updateImage();
    });

    updateImage(); 
    return currentIndex;
}