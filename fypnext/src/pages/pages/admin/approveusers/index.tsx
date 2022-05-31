import { useUsersQuery } from "schema/generated/graphql";
import ApproveUsersTable from "src/components/Tables/ApproveUsersTable";
import AdminLayout from "src/layouts/Admin";
import { withApollo } from "utils/hooks/withApollo";

const ApproveUsers = () => {

    const { data, loading } = useUsersQuery();
    
    if (loading) {
        return (<></>);
    }

    return (
        <>
            <AdminLayout>
                <ApproveUsersTable users={data?.findAllUsers} />
            </AdminLayout>
        </>
    );
}

export default withApollo(ApproveUsers);