import React, { FunctionComponent } from 'react';

interface OwnProps {
  name: string;
}

type Props = OwnProps;

const RegComp: FunctionComponent<Props> = (props) => {

  return (
      <div>
        Regular Component
      </div>
  );
};

export default RegComp;
