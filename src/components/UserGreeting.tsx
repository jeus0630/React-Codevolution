import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const UserGreeting: FunctionComponent<Props> = (props) => {

    const [isLoggin, setIsLoggin] = useState(true);

    // if(isLoggin){
    //     return (
    //         <div>Welcome Jewoo</div>
    //     )
    // }else{
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // let m1 = <div>Welcome Jewoo</div>;
    // let m2 = <div>Welcome Guest</div>;
    return (
        <div>
            {
                isLoggin ? <div>Welcome Jewoo</div> : <div>Welcome Guest</div>
            }
            {
                isLoggin && <div>You Logged In</div>
            }
        </div>
    );
};

export default UserGreeting;
