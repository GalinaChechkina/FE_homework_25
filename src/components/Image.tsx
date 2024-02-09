type Props = {
    srcImage: string,
    altImage: string
}

function Image({srcImage, altImage}: Props){
    return (
        <img src={srcImage} alt={altImage} />
    );
}
export default Image;