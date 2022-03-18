import Navbar from "../components/Navbar";

const Landing = () => {

    return (
        <>
            <Navbar />
            <div className='grid place-items-center h-screen mb-40'>
                <img src='./assets/logo.png' alt='GDSC UTM' className='h-60 w-60 mx-auto' />
                <article className='m-auto p-6 mx-auto text-justify'>
                    <h1 className='text-6xl font-bold text-center text-gray-900'>
                        GDSC - <span>UTM</span>
                    </h1>
                    <div className='mt-16 mx-auto prose'>
                        <h3>Welcome to the Google Developer Student Clubs at the Universiti Teknologi Malaysia!</h3>
                        <h5>
                            What are the Google Developer Student Clubs (GDSC)?
                        </h5>
                        <p>
                            Google Developer Student Clubs (GDSC) are university-based community groups powered by Google Developers for students interested in Technology. The aim is to help students bridge the gap between theory and practice.
                        </p>


                        <h5>Why join Google Developer Student Club @UTM?</h5>

                        <p>
                            The Google Developer Student Club at Universiti Teknologi Malaysia strives to enhance the educational, professional, social, and a peer-to-peer learning environment of UTM by being including any and every student at UTM, by transferring knowledge to students, by preparing them for what they might need in job market, and by helping them find their passion in something that they love doing in tech. And we aspire to create a safe space where students with diverse majors and  can connect, learn new technical and leadership skills, and grow both as individuals and as a community!
                        </p>
                        <p>
                            Be sure you click the "Join" button on this page to subscribe to keep track of our future events! Also, feel free to join our Discord server to get all the latest updates, connect with us, and to get to know your fellow GDSC UTM members: <a href='https://discord.gg/CPvC4n2ZkY'>Discord Server</a>
                        </p>
                    </div>
                </article>
            </div>

        </>
    );
}

export default Landing