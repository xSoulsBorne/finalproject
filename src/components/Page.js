import Header from "./Header";
import {Outlet} from "react-router-dom";

function Page() {
    return(
        <>
            <Header/>
                <Outlet/>
        </>
    )
}

export default Page