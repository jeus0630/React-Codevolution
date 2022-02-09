import React, {FunctionComponent} from 'react';

interface OwnProps {
    name: string;
    heroName: string;
    children?: React.ReactElement;
}

type Props = OwnProps;

const Greet: FunctionComponent<Props> = ({name, heroName, children}) => {

    return (
        <>
            <div>{name} a.k.a {heroName}</div>
            {children}
        </>
    );
};

export default Greet;
