import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Hello: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <h1>Hello Jewoo</h1>
        </div>
    );
};

export default Hello;
