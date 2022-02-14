import React, {FunctionComponent} from 'react';

interface OwnProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

type Props = OwnProps;

const CounterEx: FunctionComponent<Props> = ({count, setCount}) => {

    const clickHandler = () => {
        setCount(prev => prev+1);
    }

    return (
        <div>
            <button onClick={clickHandler}>{count}</button>
        </div>
    );
};

export default CounterEx;
