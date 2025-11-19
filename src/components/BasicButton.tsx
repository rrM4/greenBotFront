const BasicButton = ({ text } : { text: string }) => {
    return(
        <button className="w-full h-full bg-amber-400 rounded-3xl">{text}</button>
    )
}

export default BasicButton;