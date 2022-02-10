import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const EventBind: FunctionComponent<Props> = (props) => {
    let [message, setMessage] = useState('hello');
    const clickHandler = (): void => {
        setMessage(prev => message = 'good bye');
    }

    return (
        <>
            {message}
            <button onClick={clickHandler}>Click</button>
        </>
    );
};

export default EventBind;
