import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { signGoogle } = useContext(AuthContext)
    const navicate = useNavigate()
    const location = useLocation()

    const form = location.form?.state?.pathname || '/'

    const handleGoogle = () => {
        signGoogle()
        navicate(form, { replace: true })
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="mb-5">
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;