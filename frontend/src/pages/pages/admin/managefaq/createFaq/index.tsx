import { useRouter } from "next/router";
import { useState } from "react";
import { useCreateFaqMutation, useFaqsQuery } from "schema/generated/graphql";
import AdminLayout from "src/layouts/Admin";

const CreateFaq = () => {

    const [createFaqMutation] = useCreateFaqMutation();
    const { error } = useFaqsQuery();
    const [title, setTitle] = useState('');
    const [answer, setAnswer] = useState('');
    const [icon, setIcon] = useState('');

    const router = useRouter()

    const onSubmit = async (): Promise<void> => {
        try {
            await createFaqMutation({
                variables: {
                    data: {
                        title: title,
                        answer: answer,
                        icon: icon
                    }
                }
            })
            router.back;
        } catch (e: any) {
            console.log(error);
        }
    }


    return (
        <AdminLayout>
            <>
                <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat">
                    <div className="sm:max-w-lg w-full p-10 bg-white shadow-2xl rounded-xl z-10">
                        <div className="text-center">
                            <h2 className="mt-5 text-3xl font-bold text-gray-900">
                                Edit FAQ Form!
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
                        </div>
                        <form className="mt-8 space-y-3" action="#" method="POST">
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">FAQ Title</label>
                                <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="text" placeholder="Event Title" name={title} onChange={(e) => { setTitle(e.target.value) }} />
                            </div>
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">Answer</label>
                                <textarea className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Event Details" name={answer} onChange={(e) => { setAnswer(e.target.value) }} />
                            </div>
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">FAQ Icon</label>
                                <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="text" placeholder="Event Image URL" name={icon} onChange={(e) => { setIcon(e.target.value) }} />
                            </div>
                            <p className="text-sm text-gray-300">
                                <span>File type: types of images</span>
                            </p>
                            <div>
                                <button type="submit" onClick={() => onSubmit()} className="my-5 w-full flex justify-center bg-sky-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-sky-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </AdminLayout>
    );
}

export default CreateFaq;