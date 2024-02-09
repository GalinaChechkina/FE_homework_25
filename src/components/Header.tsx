type Props = {
    textHeader: string
}

function Header({textHeader}: Props){
    return(
        <h1>{textHeader}</h1>
    );
}
export default Header;