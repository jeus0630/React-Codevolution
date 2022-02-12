import React, {FunctionComponent, useEffect, useState} from 'react';

import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

interface OwnProps {
}

type Props = OwnProps;

const ParentComp: FunctionComponent<Props> = (props) => {

    let [name, setName] = useState(0);

    useEffect(() => {

        const counter = setInterval(() => {
            setName(prev => prev+1);
        }, 1000);

        return () => {
            clearInterval(counter);
        };
    }, []);

    console.log('parent component');

    return (
        <div>
            {name}
            <MemoComp></MemoComp>
        </div>
    );
};

export default ParentComp;
