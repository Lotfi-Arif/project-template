import React from "react"


function Message(props: MessageProp): JSX.Element {
    const justify = props.current ? 'justify-end' : 'justify-start'
    return (
        <div className={`w-full flex ${justify} items-start p-2 pr-5 pl-5`}>
            <div className="flex-shrink-0 m-2">
                {!props.current ? <img className="h-12 w-12 rounded-full" src={props.image} alt="user" /> : <div></div>}
            </div>
            <div className={`pt-3 pb-4 pl-3 pr-4  bg-${props.color} rounded-xl shadow-md`}>


                {!props.current ? <div className="text-md font-medium text-black">{props.user}</div> : <div></div>}
                <p className="text-gray-500">{props.message}</p>

            </div>
        </div>
    )
}

interface MessageProp {
    message: string,
    user: string,
    image: string
    color: string,
    current: boolean
}


export default Message

