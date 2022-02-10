import React, {FunctionComponent} from 'react';
import './myStyles.css';
import styles from './appStyles.module.css';

interface OwnProps {
}

type Props = OwnProps;

const Stylesheet: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <h1 className={"primary"}>Stylesheets</h1>
            <h1 className={styles.success}>Success</h1>
        </div>
    );
};

export default Stylesheet;
