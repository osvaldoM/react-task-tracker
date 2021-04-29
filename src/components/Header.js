import Button from "./Button";

const Header = ({title}) => {
    return (
        <header className='flex justify-between items-center py-4'>
            <h1> Task Tracker {title}</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'myprop'
}

export default Header
