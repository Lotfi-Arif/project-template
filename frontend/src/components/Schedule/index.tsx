import moment from "moment";
import { useEffect, useState } from "react";
import { useScheduleQuery } from "schema/generated/graphql";

const ScheduleTable = () => {


    const [user, setUser] = useState({} as any);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    console.log('here is current user', user?.counselor?.Schedule.id)

    const { data, loading } = useScheduleQuery({
        variables: {
            where: {
                id: user?.counselor?.Schedule?.id
            }
        }
    })

    const userData = data?.findOneSchedule

    if (loading) {
        return (<></>);
    }

    return (
        <>
            <div className="flex justify-start p-24">
                <div className="bg-white rounded-2xl w-3/4 lg:w-1/2 p-4 shadow-lg">
                    {userData?.CounselorSession.map((session) => {
                        return (
                            <>
                                <div>
                                    <span className="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">{moment(session?.counsellingDate).format("MM-DD")}</span>
                                    <div className="flex mb-2">
                                        {
                                            console.log(moment(session?.timeFrom).format("HH:MM"), session?.timeFrom)
                                        }
                                        <div className="w-2/12">
                                            <span className="text-sm text-gray-600 block">{moment(session?.timeFrom).format("HH:MM")}</span>
                                            <span className="text-sm text-gray-600 block">{moment(session?.timeTo).format("HH:MM")}</span>
                                        </div>
                                        <div className="w-1/12">
                                            <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                                        </div>
                                        <div className="w-9/12">
                                            <span className="text-sm font-semibold block">Counselling with {session?.user?.firstName} <span>{session?.user?.lastName}</span></span>
                                            <span className="text-sm">Zoom ID: 1134 11 1134</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                    }
                </div>
            </div></>
    );
}

export default ScheduleTable;