import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        // Don't use setTimeout() for real projects, added for the learning purposes
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);  // hide the message after pedding stage is comleted
                    setBlogs(data);
                })
        }, 1000);
    }, [])

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs:' />}
        </div>
    );
}

export default Home;