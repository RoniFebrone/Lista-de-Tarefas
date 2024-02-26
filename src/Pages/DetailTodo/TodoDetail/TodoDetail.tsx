import { ReactNode } from 'react'
import './index.scss';


export interface TaskDetailType {
    label: string;
    value: ReactNode;
    type: string;
    onChange?: () => void;
}

const TodoDetail = ({ label, value, type, } : TaskDetailType) => {
    const id = `input${label}`;

    return (
        <div className="TodoDetail">
            <label htmlFor={id}>{label}: </label>
            {type === "custom" ? (
                <div className="custom-icon-container">{value}</div>
            ) : (
                <input type={type} id={id} value={value as string}  readOnly />
            )}
        </div>
    );
}

export default TodoDetail;
