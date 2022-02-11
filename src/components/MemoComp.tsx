import React, { FunctionComponent } from 'react';

interface OwnProps {

}

type Props = OwnProps;

const MemoComp: FunctionComponent<Props> = () => {
  console.log('child component');
  return (
      <div>
        Hello World!
      </div>
  );
};

export default React.memo(MemoComp);