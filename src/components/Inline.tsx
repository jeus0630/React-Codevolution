import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const heading = {
    fontSize : '76px',
    color : 'red'
}

const Inline: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <h1 style={heading}>styling</h1>
        </div>
    );
};

export default Inline;
