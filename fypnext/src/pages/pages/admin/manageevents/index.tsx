import { useEventsQuery } from "schema/generated/graphql";
import EventsTable from "src/components/Tables/EventsTable";
import AdminLayout from "src/layouts/Admin";
import { withApollo } from "utils/hooks/withApollo";

const ManageEvents = () => {

    const { data, loading } = useEventsQuery();

    if (loading) {
        return (<></>);
    }


    return (
        <>
            <AdminLayout>
                <EventsTable events={ data?.findAllEvents} />
            </AdminLayout>
        </>
    );
}

export default withApollo(ManageEvents);