/**
 * Flip and Invert Image
 * @param image 
 */
function flipAndInvertImage(image: Array<Array<number>>): Array<Array<number>> {
    for (let i = 0;  i < image.length; i++) {
        for (let j = 0; j < (image[i].length + 1) /2; j++ ) {
            let temp = image[i][j];
            image[i][j] = image[i][j][image[i].length - j -1];
            image[i][j][image[i].length - j -1] = temp;
        }
    }
    return [[]];
}