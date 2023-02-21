import FAQRow from "./FAQRow";

const FAQTable = ({ faqs }) => {

    console.log(faqs);

    return (
        <>
            <div className="overflow-x-auto">
                <div className="min-w-screen max-h-screen flex items-center justify-center font-sans overflow-auto">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-snug">
                                        <th className="py-3 px-6 text-left">Image/title</th>
                                        <th className="py-3 px-6 text-left">Details</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {faqs.map((event) => {
                                        return <FAQRow key={event.id} event={event} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQTable;