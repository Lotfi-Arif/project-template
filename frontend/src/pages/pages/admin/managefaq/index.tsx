import { useFaqsQuery } from "schema/generated/graphql";
import FAQTable from "src/components/Tables/FAQTable";
import AdminLayout from "src/layouts/Admin";
import { withApollo } from "utils/hooks/withApollo";

const ManageFAQ = () => {

    const { data, loading } = useFaqsQuery();

    if (loading) {
        return (<></>);
    }

    return (
        <AdminLayout>
            <FAQTable faqs={data?.findAllFaqs} />
        </AdminLayout>
    );
}

export default withApollo(ManageFAQ);