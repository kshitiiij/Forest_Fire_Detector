import {useRoutes} from 'raviger'
import Home from '../pages/Home';


const routes = {
    '/': ()=><Home />,
}

export default function AppRouter() {

    let routeResult = useRoutes(routes);
    return routeResult;
}