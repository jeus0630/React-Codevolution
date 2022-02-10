import React, { FunctionComponent } from 'react';

interface OwnProps {
    person: {
        id: number;
        name: string;
        subject: string;
    }
}

type Props = OwnProps;

const Person: FunctionComponent<Props> = ({person}) => {

  return (
      <div>
          <h2>{person.name}</h2>
          <h2>{person.subject}</h2>
      </div>
  );
};

export default Person;
