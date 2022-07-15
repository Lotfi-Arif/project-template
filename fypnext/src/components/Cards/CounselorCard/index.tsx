import Link from "next/link";
import { useCreateChatMutation, useFindOneChatQuery, useUsersQuery } from "schema/generated/graphql";
import { Feedback } from 'src/components/FeedBack';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import StudentLayout from "src/layouts/Student";

const CounselorCard = (counselor) => {

    const [chat] = useCreateChatMutation({
        onCompleted(data?) {
            localStorage.setItem('chatId', JSON.stringify(data.createChat.id));
        },
    }
    );
    const [user, setUser] = useState({} as any);
    const [chatId, setChatId] = useState({} as any);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        setChatId(JSON.parse(localStorage.getItem('chatId')))
    }, [])

    const onSubmit = async (error): Promise<void> => {
        try {
            if (!chatId) {
                await chat({
                    variables: {
                        data: {
                            chatName: "Chat With a Counselor",
                            users: {
                                connect: [
                                    {
                                        id: counselor?.counselor?.id
                                    },
                                    {
                                        id: user?.id
                                    }
                                ]
                            }
                        }
                    }
                })
            }
        } catch (err: any) {
            error.preventDefault()
            if (err) {
                toast(
                    <Feedback
                        title="There's an error!, But we know what it is."
                        subtitle={err.graphQLErrors[0]?.extensions?.exception?.meta?.cause ?? err.graphQLErrors[0]?.message ?? err.message}
                        type="error"
                        disableFeedback={true}
                    />,
                    {
                        progress: undefined,
                        toastId: 1,
                        autoClose: 3000,
                    },
                );
            } else {
                toast(
                    <Feedback
                        title="Something unexpected happened"
                        subtitle={err.graphQLErrors[0]?.extensions?.exception?.meta?.cause ?? err.graphQLErrors[0]?.message ?? err.message}
                        type="error"
                        disableFeedback={true}
                    />,
                    {
                        progress: undefined,
                        toastId: 1,
                        autoClose: 3000,
                    },
                );
            }
        }
    }



    return (
        <>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{counselor.counselor.user.firstName} <span>{counselor.counselor.user.lastName}</span></h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{counselor.counselor.expertise}</span>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                        <div className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Link href={`/pages/user/booking/${counselor.counselor.id}?scheduleId=${counselor.counselor.Schedule.id}`} >Book a Session</Link>
                        </div>
                        <div className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                            <button onClick={(e) => onSubmit(e)}>
                                <Link href={`/chat/${chatId}?counselor_id=${counselor.counselor.id}?user_id=${user?.id}`}>Message</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CounselorCard;