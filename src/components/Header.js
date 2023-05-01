import Button from './Button'

function Header({title}) {
    const onClick = (e) => {
        console.log(e.target)
    }
  return (
        <header className='header'>
                <h1>{title}</h1>
                 <Button text='Add' color='blue' onClick={onClick}/>
        </header>
    )
}

export default Header