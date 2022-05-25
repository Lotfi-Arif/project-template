import ApproveUsersTable from "src/components/Tables/ApproveUsersTable";
import AdminLayout from "src/layouts/Admin";

const approveUsers = () => {
    return (
        <>
            <AdminLayout>
                <ApproveUsersTable />
            </AdminLayout>
        </>
    );
}

export default approveUsers;