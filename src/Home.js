import { useState } from "react";

const Home = () => {
    //useState Hook
    //const [something(name of const), setSomething(name of function) = useState(initial value)]
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge('30');
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home
