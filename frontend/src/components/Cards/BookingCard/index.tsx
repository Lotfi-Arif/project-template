import Link from "next/link";

const BookingCard = (session) => {

    console.log(session.session)

    return (
        <>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">

                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://us.123rf.com/450wm/mamormo/mamormo1904/mamormo190400034/123633175-psychotherapy-counseling-concept-psychologist-man-and-young-woman-patient-in-therapy-session-treatme.jpg?ver=6" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Counselor: {session.session.counselor.user.firstName} <span>{session.session.counselor.user.lastName}</span></h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Counsellig reason: {session.session.counsellingReason}</span>
                </div>
            </div>
        </>
    );
}

export default BookingCard;