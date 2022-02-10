import React, {FunctionComponent} from 'react';
import Person from "./Person";

interface OwnProps {
}

type Props = OwnProps;

const NameList: FunctionComponent<Props> = (props) => {

    const names = [{
        id : 1,
        name : 'jewoo',
        subject : 'Angular'
    },{
        id : 2,
        name : 'jewoo',
        subject: 'React'
    },{
        id : 3,
        name : 'jewoo',
        subject : 'Vue'
    }];

    const nameList = names.map(name => <Person key={name.id} person={name}></Person>)

    return (
        <div>
            {nameList}
        </div>
    );
};

export default NameList;
