type Props = {
    textButton: string
}

function Button({textButton}: Props){
    return (<button>
        {textButton}
    </button>
    );
}
export default Button;