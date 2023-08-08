import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(18)
    const handleClick = () => {
        setName('Leo');
        setAge(9)
    }
    return (
        <div className="home">
            <h2>Home page</h2>
            <p>{name} is {age} years old!</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;