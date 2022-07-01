import { useFindAllPostsQuery } from "schema/generated/graphql";
import Navbar from "src/components/Navbar/MainNavbar";

const Posts = () => {

    const { data, loading } = useFindAllPostsQuery();

    if (loading) {
        return (<></>);
    }

    const posts = data?.findAllPosts;

    return (
        <>
        <Navbar />
            <div className="w-1/2 md:w-3/4 mx-auto lg:w-1/2 p-5 md:px-12 lg:24 h-full overflow-x-hidden antialiased">
                <div className="mt-3 flex flex-col">
                    <div className="bg-white mt-3">
                        <img className="border rounded-t-lg shadow-lg " alt="somewhere" src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                        <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Posts;