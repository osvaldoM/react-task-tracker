const Header = ({title}) => {
    return (
        <header className='flex justify-between items-center p-4'>
            <h1> Task Tracker {title}</h1>
            <button className='bg-black rounded-md text-white px-3 py-1'> Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'myprop'
}

export default Header
