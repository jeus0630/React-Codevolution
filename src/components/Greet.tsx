import React, { FunctionComponent } from 'react';

interface OwnProps {
  name: string;
  heroName: string;
}

type Props = OwnProps;

const Greet: FunctionComponent<Props> = ({name, heroName}) => {

  return (
      <div>{name} a.k.a {heroName}</div>
  );
};

export default Greet;
