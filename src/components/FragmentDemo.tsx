import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const FragmentDemo: FunctionComponent<Props> = (props) => {

    return (
        <>
            <h1>
                Fragment Demo
            </h1>
            <p>This describes the Fragment Demo Component</p>
        </>
    );
};

export default FragmentDemo;
