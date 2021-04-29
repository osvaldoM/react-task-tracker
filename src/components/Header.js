import Button from "./Button";
import { useLocation} from "react-router-dom";


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation();

    return (
        <header className='flex justify-between items-center py-4'>
            <h1> Task Tracker {title}</h1>
            {
                location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'myprop'
}

export default Header
