import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const onClickIncrement = () => {
        setCount(count + 1);
    };

    const onClickDecrement = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1);
    };

    return (
        <div className="App">
            <div>
                <h2>Counter:</h2>
                <h1>{count}</h1>
                <button className="decrement" onClick={onClickDecrement}>- Decrement</button>
                <button className="increment" onClick={onClickIncrement}>Increment +</button>
            </div>
        </div>
    )

};

export default App;
