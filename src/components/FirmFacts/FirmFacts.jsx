import React from 'react';
import styles from './FirmFacts.module.scss';
import FirmFactCard from '../FirmFactCard/FirmFactCard';
import close from '../../assets/close.png';
const FirmFacts = () => {
    return (
        <div className={styles.firmFacts}>
            <img src={close} alt="icon" className={styles.close}/>
            <h1 className={styles.h1}>Firm Facts</h1>           
            <FirmFactCard
                variant="default"
                buttonVariant="icon-text"
                label="This is a two line button that terminates with ellipsis"
                rowCard="top"
            />
            <FirmFactCard
                variant="default"
                buttonVariant="icon-text"
                label="This is a two line button that terminates with ellipsis"
                rowCard="top"
            />
            <FirmFactCard
                variant="default"
                buttonVariant="default"
                label="This is a one line button"
                rowCard="top"
            />
            <FirmFactCard
                variant="default"
                buttonVariant="icon-text"
                label="This is a two line button that terminates with ellipsis"
                rowCard="top"
            />

            <FirmFactCard
                variant="border"
                buttonVariant="icon-text"
                label="This is a two line button that terminates with ellipsis"
                rowCard="bottom"
            />
            <FirmFactCard
                variant="border"
                buttonVariant="icon-text"
                label="This is a two line button that terminates with ellipsis"
                rowCard="bottom"
                disabled={true}
            />
            <FirmFactCard
                variant="border"
                buttonVariant="icon-text"
                label="This is a two line button that terminates with ellipsis"
                rowCard="bottom"
            />
        </div>

    );
};

export default FirmFacts;
