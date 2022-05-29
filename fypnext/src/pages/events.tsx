import EventsCard from "src/components/Cards/EventsCard";
import Navbar from "src/components/Navbar/MainNavbar";

const Events = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-row mx-auto my-auto space-x-12 px-10">
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </div>
            <div className="flex flex-row mx-auto my-auto space-x-12 px-10">
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </div>
        </>
    );
}

export default Events;