function Button({text,color,onClick}) {
  
  return <button   
                onClick={onClick}
                className='btn'
                 style={{background:color}}
                 >{text}{/*bad align*/}
        </button>
}

export default Button