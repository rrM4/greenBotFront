const MessageComponent = ({text, belongsTo} : {text: string, belongsTo : boolean}) => {
    return(
        <div className={`w-full flex flex-col ${belongsTo ? 'items-end' : 'justify-start'}`}>
            <div className={`${belongsTo ? 'mainBg justify-end' : 'bg-[#F5F5F5] justify-start'} p-5 rounded-xl w-[80%]`}>
                <p className={`text-[15px] ${belongsTo ? 'text-white' : 'text-black'}`}>{text}</p>
            </div>
        </div>

    )
}

export default MessageComponent;