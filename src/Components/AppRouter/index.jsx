import Form from "../Form";
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from "../Home";
import PrivateRoutes from "../PrivateRoutes";


const AppRouter = ()=>{
    const token = localStorage.getItem('token')
    console.log('token')
    console.log(token)
    return(
        <Router>
            {/* <PrivateRoutes/> */}
            <Switch>
                <Route path='/' render={()=>{
                    return(
                        token ? <PrivateRoutes/> : <Form/>
                    )
                }}/>
            </Switch>
        </Router>
    )
}
export default AppRouter;