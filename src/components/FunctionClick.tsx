import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const FunctionClick: FunctionComponent<Props> = (props) => {

    const clickHandler = (): void => {
        console.log('Button clicked');
    }

    return (
        <div>
            <button onClick={clickHandler}>Click!</button>
        </div>
    );
};

export default FunctionClick;
