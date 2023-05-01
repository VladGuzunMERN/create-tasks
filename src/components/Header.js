import Button from './Button'

function Header({title,onAdd,showAddTask}) {
    
  return (
        <header className='header'>
                <h1>{title}</h1>
                 <Button text={showAddTask ? 'close' : 'Add'} 
                         color={showAddTask ? 'red' : 'green'}
                         onClick={onAdd} />
        </header>
    )
}

export default Header