import { useEventsQuery, useMeLazyQuery, useMeQuery } from "schema/generated/graphql";
import EventsCard from "src/components/Cards/EventsCard";
import Navbar from "src/components/Navbar/MainNavbar";
import { withApollo } from "utils/hooks/withApollo";

const Events = () => {

    const { data, loading } = useEventsQuery();


    if (loading) {
        return (<></>);
    }

    const events = data?.findAllEvents;

    return (
        <>
            <Navbar />
            <div className="flex justify-center mx-auto my-auto space-x-12 px-10 py-10">
                
                {events.map((event) => {
                    return <EventsCard key={event.id} event={event} />
                })}
            </div>
        </>
    );
}

export default withApollo(Events);