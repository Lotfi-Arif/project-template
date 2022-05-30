import ChatContainer from "src/components/ChatContainer";
import AdminLayout from "src/layouts/Admin";

const chat = () => {
    return (
        <>
            <AdminLayout>
                <ChatContainer />
            </AdminLayout>
        </>
    );
}

export default chat