import UserRow from "./UserRow";

const ApproveUsersTable = ({ users }) => {

    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen max-h-screen flex items-center justify-center font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">User</th>
                                    <th className="py-3 px-6 text-left">Role</th>
                                    <th className="py-3 px-6 text-center">Status</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {users.map((user) => {
                                    return <UserRow key={user.id} user={user} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApproveUsersTable;