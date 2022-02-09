import React, {FunctionComponent, useState} from 'react';

interface OwnProps {

}

type Props = OwnProps;

const Message: FunctionComponent<Props> = (props) => {
    const [state, setState] = useState('Welcome Visitor');

    const clickHandler = () => {
        setState('Thank you for subscribe');
    }
    return (
        <>
            <h1>
                {state}
            </h1>
            <button onClick={clickHandler}>Subscribe!</button>
        </>
    );
};

export default Message;
