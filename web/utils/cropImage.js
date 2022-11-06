

export const getCrop = (image , size , clipPosition = "center-middle") => {

    const width = size.width;
    const height = size.height;
    const aspectRatio = width / height;

    let newWidth;
    let newHeight;

    const imageRatio = image.width / image.height;

    if (aspectRatio >= imageRatio) {
      newWidth = image.width;
      newHeight = image.width / aspectRatio;
    } else {
      newWidth = image.height * aspectRatio;
      newHeight = image.height;
    }

    let x = 0;
    let y = 0;

    if (clipPosition === 'center-middle') {
        x = (image.width - newWidth) / 2;
        y = (image.height - newHeight) / 2;
    } 

    return {
        cropX: x,
        cropY: y,
        cropWidth: newWidth,
        cropHeight: newHeight,
    };
}