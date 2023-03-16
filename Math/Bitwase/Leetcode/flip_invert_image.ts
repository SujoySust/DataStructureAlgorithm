/**
 * Flip and Invert Image
 * @param image 
 */
function flipAndInvertImage(image: Array<Array<number>>): Array<Array<number>> {
    console.log(image.length);
    
    for (let i = 0;  i < image.length; i++) {
        for (let j = 0; j < (image[i].length + 1) /2; j++ ) {
            let temp = image[i][j] ^ 1;
            image[i][j] = image[i][image[i].length - j -1] ^ 1;
            image[i][image[i].length - j - 1] = temp;
        }
    }
    console.log(image);
    
    return image;
}

flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])