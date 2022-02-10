import React, {FunctionComponent, useState} from 'react';
import ChildComponent from "./ChildComponent";

interface OwnProps {
}

type Props = OwnProps;

const ParentComponent: FunctionComponent<Props> = (props) => {
    const [name, setName] = useState('Parent');

    return (
        <div>
            {name}
            <ChildComponent setName={setName}></ChildComponent>
        </div>
    );
};

export default ParentComponent;
