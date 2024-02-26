import React from 'react'
import './index.scss';

const TodoDetail = ({ label, value, type, onChange }) => {
    const id = `input${label}`;

    return (
        <div className="TodoDetail">
            <label htmlFor={id}>{label}: </label>
            {type === "custom" ? (
                <div className="custom-icon-container">{value}</div>
            ) : (
                <input type={type} id={id} value={value} readOnly />
            )}
        </div>
    );
}

export default TodoDetail;
