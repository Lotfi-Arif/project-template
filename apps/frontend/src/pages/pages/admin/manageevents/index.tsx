import { useEventsQuery } from "schema/generated/graphql";
import EventsTable from "src/components/Tables/EventsTable";
import AdminLayout from "src/layouts/Admin";
import { withApollo } from "utils/hooks/withApollo";
import Link from 'next/link'

const ManageEvents = () => {

    const { data, loading } = useEventsQuery();

    if (loading) {
        return (<></>);
    }


    return (
        <>
            <AdminLayout>
                <div className="pt-20 flex flex-col">
                    <div className="self-end pr-20">
                        <button className="text-white p-2 m-2 items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 text-center ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4 bg-sky-500">
                            <Link href={'/pages/admin/manageevents/createEvent'}>
                                Create An event
                            </Link>
                        </button>
                    </div>
                    <div className="flex-col">
                        <EventsTable events={data?.findAllEvents} />
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

export default withApollo(ManageEvents);