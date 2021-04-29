import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='flex justify-between items-center py-4'>
            <h1> Task Tracker {title}</h1>
             <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'myprop'
}

export default Header
