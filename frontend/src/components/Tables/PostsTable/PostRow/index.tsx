import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDeleteEventMutation, useDeletePostMutation } from "schema/generated/graphql";


const PostRow = (posts) => {

console.log('Here is posts', posts)


    const [deletePost] = useDeletePostMutation();
    const router = useRouter();

    const onDelete = async (id: string) => {
        try {
            await deletePost({
                variables: {
                    where: { id }
                }
            })
        } catch (error) {
            console.log(error);

        }
    }

    console.log(posts)

    return (
        <>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="mr-2">
                            {/* <img className="h-6 w-6" src={posts.post.image} alt="Event Image" /> */}
                        </div>
                        <span className="font-medium">{posts.post.title}</span>
                    </div>
                </td>
                <span className="text-gray-700 py-1 px-3 items-center table-caption">
                    {posts.post.body}
                </span>
                <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <Link href={`/pages/admin/manageposts/viewPost/${posts.post.id}`} passHref>
                                <EyeIcon />
                            </Link>
                        </button>
                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <Link href={`/pages/admin/manageposts/editPost/${posts.post.id}`} passHref>
                                <PencilIcon />
                            </Link>
                        </button>
                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => {
                            onDelete(posts.post.id)
                        }}>
                            <TrashIcon />
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default PostRow;