function imageUploader(img){
    return new URL(`../../assets/${img}`, import.meta.url).href
}

export {
    imageUploader
}