import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

export const Alert = () => {

    const context = useContext(AlertContext);

    const { alert } = context;

    return (
        alert !== null && <div className={`alert alert-${alert.alert}`}>
            <i className="fas fa-info-circle" /> {alert.msg}
        </div>
    );
}

export default Alert;
