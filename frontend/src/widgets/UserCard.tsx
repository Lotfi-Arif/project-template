import React from "react"


function UserCard(props: UserCardProp): JSX.Element {
    return (
        <React.Fragment>
            <div onClick={() => props.onClick()} className={`hover:bg-customBlue-dark rounded-l-full ${props.selected ? 'bg-customBlue-dark' : ''}  cursor-pointer p-6 w-full  flex items-center space-x-4 `}>
                <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-lg" src={props.image} alt="user" />
                </div>
                <div>
                    <div className="text-xl font-medium text-gray-50">{props.username}</div>
                    <p className="text-gray-100">{props.email}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

interface UserCardProp {
    username: string,
    email: string,
    selected: boolean
    onClick: Function

    id: string
    image: string

}


export default UserCard

