import React, {FunctionComponent} from 'react';
import Person from "./Person";

interface OwnProps {
}

type Props = OwnProps;

const NameList: FunctionComponent<Props> = (props) => {

    const names = ['Burce', 'Clark', 'Diana'];

    const persons = [{
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

    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    const nameList = names.map((name,idx) => <h2 key={idx}>{name}</h2> )
    return (
        <div>
            {/*{personList}*/}
            {nameList}
        </div>
    );
};

export default NameList;
