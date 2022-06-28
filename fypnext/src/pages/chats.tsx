import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FindChatMessagesQueryVariables, useCreateChatMutation, useFindChatMessagesQuery, useUsersQuery } from "schema/generated/graphql";
import ChatCard from "../widgets/ChatCard";
import SearchField from "../widgets/SearchField";
import UserCard from "../widgets/UserCard";

export interface ChatsProps {
    chats: FindChatMessagesQueryVariables[]
    
    // onClick: Function;
    currentUser: string
    currentChat: string
}

export interface Chats {
    isCreatingChat: boolean


}


const Chats: React.FC<ChatsProps> = (props: ChatsProps) => {
    const [isCreatingChat, setisCreatingChat] = useState(false)
    const [search, setsearch] = useState('')
    const [users, setusers] = useState<string[]>([props.currentUser])
    const [newChat, setNewChat] = useState('')
    const { data, loading, error } = useUsersQuery();
    const [createChat] = useCreateChatMutation()
    const createChatUser = () => {
        createChat({
            variables: {
                data: {
                    ChatName: newChat,
                    users: users
                }
            }
        })

        setisCreatingChat(false)


    }

    useEffect(() => {
        setsearch('')
    }, [isCreatingChat])

    const renderChats = () => {
        const result = props.chats.filter((chat) => chat.chatName.contains.includes(search));
        
return result.map((chat) => {
            const selected = chat.id === props.currentChat.toString
            
return <ChatCard selected={selected} key={chat.id} onClick={props.onClick} id={chat.id} chat={chat.ChatName} description={chat.description} image={"https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"} />;
        });
    }
    const renderUsers = () => {
        const result = data ? data.users.filter((user) => (user.email.includes(search) || users.includes(user.id)) && user.id !== props.currentUser) : [];
        
return result.map((user) => {
            const selected = users.find((selectedUser) => selectedUser === user.id) ? true : false;


            return <UserCard selected={selected} onClick={() => {
                users.find((selectedUser) => selectedUser === user.id) ?
                    setusers(users.filter((selectedUser) => selectedUser !== user.id)) : setusers([...users, user.id])
            }} key={user.id} id={user.id} username={user.username} email={user.email} image={"https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"} />;
        })
    }

    const renderOptions = () => {
        if (isCreatingChat) {
            return <div className='bg-customBlue-light h-full pl-5 rounded-l-3xl overflow-auto w-full relative'>
                <div className='flex justify-between'>
                    <button className='text-white' onClick={() => setisCreatingChat(false)}>Back</button>
                    <SearchField placeholder='enter email of user' search={search} onChange={setsearch} />
                </div>


                {renderUsers()}
                <div className='absolute bottom-0  left-0 right-0 h-14 p-2 flex justify-between justify-items-center w-full bg-customGreen'>
                    <input
                        className=" outline-none font-sans flex-grow py-2 px-2 rounded-full border border-gray-300 bg-gray-50"
                        name='newChat'
                        placeholder="New Chat Name"

                        onChange={(e) => setNewChat(e.target.value)}

                    />
                    <button className="text-white p-2" onClick={() => createChatUser()}  >
                        Add
                    </button>
                </div>
            </div>
        } else {
            return (<div className='bg-customBlue-light h-full pl-5 rounded-l-3xl overflow-auto w-full relative'>
                <div className='flex justify-between '>
                    <div onClick={() => setisCreatingChat(true)} className='cursor-pointer rounded-full  h-12 w-12 bg-customBlue-dark text-white my-auto pt-3'>
                        <svg className='block mx-auto my-auto text-white' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path fill="currentColor" d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
                    </div>
                    <SearchField placeholder='enter chat name' search={search} onChange={setsearch} />
                </div>

                {renderChats()}

            </div>);
        }
    }




    return <React.Fragment>
        {renderOptions()}
    </React.Fragment>;

}

export default Chats;