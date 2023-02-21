import { useRouter } from "next/router";
import { useState } from "react";
import { useCreateEventMutation, useEventsQuery } from "schema/generated/graphql";
import AdminLayout from "src/layouts/Admin";
import { withApollo } from "utils/hooks/withApollo";
import { useToast } from "@chakra-ui/react";
import { useResultCallback } from "utils/hooks/useResultCallback";

const CreateEvent = () => {

    const [createEventMutation, eventCreated] = useCreateEventMutation();
    const { error } = useEventsQuery();
    const [title, setTitle] = useState('');
    const [eventDetails, setEventDetails] = useState('');
    const [eventImage, setEventImage] = useState('');
    const toast = useToast();
    useResultCallback(eventCreated, event => {
        toast({
            title: `Event ${event.title} has been created`,
            status: 'success',
        });
        router.push(`.`);
    }, error => {
        toast({
            title: 'Failed to create Event',
            description: error.graphQLErrors[0]?.extensions?.exception?.meta?.cause ?? error.graphQLErrors[0]?.message ?? error.message,
            status: 'error',
        });
    });

    const router = useRouter()

    const onSubmit = async (): Promise<void> => {
        try {
            await createEventMutation({
                variables: {
                    data: {
                        title: title,
                        eventDetails: eventDetails,
                        eventImageURL: eventImage
                    }
                }
            })
            router.back();
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
                                Edit Event Form!
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
                        </div>
                        <form className="mt-8 space-y-3" action="#" method="POST">
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">Event Title</label>
                                <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="text" placeholder="Event Title" name={title} onChange={(e) => { setTitle(e.target.value) }} required/>
                            </div>
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">Event Details</label>
                                <textarea className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Event Details" name={eventDetails} onChange={(e) => { setEventDetails(e.target.value) }} required/>
                            </div>
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold text-gray-500 tracking-wide">Event Image</label>
                                <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="text" placeholder="Event Image URL" name={eventImage} onChange={(e) => { setEventImage(e.target.value) }} required/>
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

export default withApollo(CreateEvent);