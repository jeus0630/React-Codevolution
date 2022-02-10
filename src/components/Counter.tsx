import React, {FunctionComponent,useState,useEffect} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Counter: FunctionComponent<Props> = (props) => {

    let [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState)=>{
            count = prevState + 1;
            return count;
        });
    }

    return (
        <div>
            {count}
            <button onClick={()=>increment()}>Increment</button>
        </div>
    );
};

export default Counter;
