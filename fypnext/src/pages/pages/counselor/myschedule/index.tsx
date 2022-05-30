import ScheduleTable from "src/components/Schedule";
import AdminLayout from "src/layouts/Admin";

const mySchedule = () => {
    return (
        <>
            <AdminLayout>
                <ScheduleTable />
            </AdminLayout>
        </>
    );
}

export default mySchedule;