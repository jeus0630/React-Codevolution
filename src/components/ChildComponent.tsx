import React, { FunctionComponent } from 'react';

interface OwnProps {
    setName: React.Dispatch<React.SetStateAction<string>>;
}

type Props = OwnProps;

const ChildComponent: FunctionComponent<Props> = ({setName}) => {

  return (
      <div>
        <button onClick={(e) => setName('Child')}>Greet Parent</button>
      </div>
  );
};

export default ChildComponent;
