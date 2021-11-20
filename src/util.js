//MEDIA RESIZE BASED ON API URL

export const smallImage = (imagePath, size) => {
    //if imagepath matches replace with either screenshots or game header image urls
    //and assign image to the new URL location
    const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
    )
    : imagePath.replace(
        "media/games/", 
        `media/resize/${size}/-/games/`
    )
    return image;
}