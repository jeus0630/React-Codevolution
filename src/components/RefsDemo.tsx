import React, {FunctionComponent, useRef, useEffect} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const RefsDemo: FunctionComponent<Props> = (props) => {
    
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {

        inputRef.current.focus();

        return () => {

        }
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
};

export default RefsDemo;
