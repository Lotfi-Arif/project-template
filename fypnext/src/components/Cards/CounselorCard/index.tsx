import Link from "next/link";

const CounselorCard = (counselor) => {

    console.log(counselor.counselor.Schedule.map((schedule) => {
        return schedule.id
    }))

    return (
        <>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">

                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{counselor.counselor.user.firstName} <span>{counselor.counselor.user.lastName}</span></h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{counselor.counselor.expertise}</span>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                        <div className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Link href={`/pages/student/booking/${counselor.counselor.id}?scheduleId=${counselor.counselor.Schedule.map((schedule) => {
                                return schedule.id
                            })}`} >Book a Session</Link>
                        </div>
                        <div className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                            <Link href="/pages/student/chat">Message</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CounselorCard;