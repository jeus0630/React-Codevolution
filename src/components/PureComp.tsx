import React, { FunctionComponent } from 'react';

interface OwnProps {
    name: string;
}

type Props = OwnProps;

const PureComp: FunctionComponent<Props> = (props) => {

  return (
      <div>
        Pure Compo
      </div>
  );
};

export default PureComp;
