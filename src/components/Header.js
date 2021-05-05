import Button from "./Button";
import { useLocation} from "react-router-dom";


const Header = ({onAdd, showAdd}) => {
    const location = useLocation();

    return (
        <header className='flex justify-between items-center py-4'>
            <h1> Task Tracker </h1>
            {
                location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)
            }
        </header>
    )
}

export default Header
