import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NotFound = ({ redirectToCustom } : { redirectToCustom? : string }) => {
    const nav = useNavigate();
    useEffect(() => {
        if(redirectToCustom && redirectToCustom.trim().length !== 0 ){
            nav(`${redirectToCustom}`)
        }
    }, [ nav, redirectToCustom ]);

    return(
        <div className="min-h-[100vh] flex flex-col justify-center items-center gap-y-2">
            <h1 className="text-xl">¡Page not found! error 404</h1>
        </div>
    )
}
export default NotFound;