import {useRoutes} from 'raviger'
import Forest from '../pages/Forest';
import Home from '../pages/Home';


const routes = {
    '/': ()=><Home />,
    '/forest/:id': ({id}:{id:string}) => <Forest id={Number(id)}/>
}

export default function AppRouter() {

    let routeResult = useRoutes(routes);
    return routeResult;
}