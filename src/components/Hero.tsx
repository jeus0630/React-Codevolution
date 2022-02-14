import React, {FunctionComponent} from 'react';

interface OwnProps {
    heroName: string;
}

type Props = OwnProps;

const Hero: FunctionComponent<Props> = ({heroName}) => {

    if (heroName === 'joker') {
        throw new Error('Not a hero!');
    }

    return (
        <div>
            {heroName}
        </div>
    );
};

export default Hero;
