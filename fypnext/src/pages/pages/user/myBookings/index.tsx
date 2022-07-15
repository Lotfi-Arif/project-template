import { useSessionsQuery } from "schema/generated/graphql";
import BookingCard from "src/components/Cards/BookingCard";
import StudentLayout from "src/layouts/Student";
import { withApollo } from "utils/hooks/withApollo";

const MyBookings = () => {

    const { data, loading } = useSessionsQuery();

    if (loading) {
        return (<></>);
    }

    const counselorSessions = data?.findAllCounselorSessions;


    return (
        <>
            <StudentLayout>
                <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                    <div className="container xl:max-w-6xl mx-auto px-4">
                        <header className="text-center mx-auto mb-12 lg:px-20">
                            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">My Bookings</h2>
                        </header>

                        <div className="flex flex-wrap m-4 mx-auto my-auto">
                            {counselorSessions.map((session) => {

                                return (
                                    <>
                                        <BookingCard key={session.id} session={session} />
                                    </>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </StudentLayout>
        </>
    );
}

export default withApollo(MyBookings);