import { useNavigate } from "react-router-dom";

function Enlaces() {
    const navigate = useNavigate();
    
    const handleGit = () => {
        navigate('https://github.com/WilliamsUreta');
    }

    
};

export default Enlaces;