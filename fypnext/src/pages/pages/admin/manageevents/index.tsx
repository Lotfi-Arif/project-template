import CRUDTable from "src/components/Tables/CRUDTable";
import AdminLayout from "src/layouts/Admin";

const manageEvents = () => {
    return (
        <AdminLayout>
            <CRUDTable />
        </AdminLayout>
    );
}

export default manageEvents;