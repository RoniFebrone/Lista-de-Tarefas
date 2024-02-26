import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";

import './index.scss'

const GoBackBt = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/");
    }


    return (
        <button className="GoBackBt" onClick={handleGoBack}>
            <FaArrowLeft size={28} />
        </button>
    );
}

export default GoBackBt