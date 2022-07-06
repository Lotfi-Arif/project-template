import ScheduleTable from "src/components/Schedule";
import CounselorLayout from "src/layouts/Counselor";

const mySchedule = () => {
    return (
        <>
            <CounselorLayout>
                <ScheduleTable />
            </CounselorLayout>
        </>
    );
}

export default mySchedule;