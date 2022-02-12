import React, {FunctionComponent} from 'react';
import {createPortal} from "react-dom";

interface OwnProps {
}

type Props = OwnProps;

const PortalDemo: FunctionComponent<Props> = (props) => {

    const portalRoot: HTMLElement | null= document.getElementById('portal-root');

    if(portalRoot)
    return createPortal(
        <h1>
            Portals Demo
        </h1>,
        portalRoot
    )

    return <div>Hello</div>

};

export default PortalDemo;
