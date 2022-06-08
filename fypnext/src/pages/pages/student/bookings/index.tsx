import CounselorCard from "src/components/Cards/CounselorCard";
import StudentLayout from "src/layouts/Student";

const myBookings = () => {
    return (
        <>
            <StudentLayout>
                <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                    <div className="container xl:max-w-6xl mx-auto px-4">
                        <header className="text-center mx-auto mb-12 lg:px-20">
                            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">Ongoing Sessions</h2>
                        </header>

                        <div className="flex flex-wrap space-x-10 mx-auto my-auto">
                            <CounselorCard />
                            <CounselorCard />
                            <CounselorCard />
                        </div>
                        
                    </div>
                </div>
            </StudentLayout>
        </>
    );
}

export default myBookings;