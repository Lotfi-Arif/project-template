import { useCounselorsQuery } from "schema/generated/graphql";
import CounselorCard from "src/components/Cards/CounselorCard";
import StudentLayout from "src/layouts/Student";
import { withApollo } from "utils/hooks/withApollo";

const CounselorsList = () => {

    const { data, loading } = useCounselorsQuery();

    if (loading) {
        return (<></>);
    }

    const counselors = data?.findAllCounselors;


    return (
        <>
            <StudentLayout>
                <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                    <div className="container xl:max-w-6xl mx-auto px-4">
                        <header className="text-center mx-auto mb-12 lg:px-20">
                            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">Available Counselors</h2>
                        </header>

                        <div className="flex flex-wrap space-x-10 mx-auto my-auto">
                            {counselors.map((counselor) => {

                                return (
                                    <>
                                        <CounselorCard key={counselor.id} counselor={counselor} />
                                    </>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </StudentLayout>
        </>
    );
}

export default withApollo(CounselorsList);