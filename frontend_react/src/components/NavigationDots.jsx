import React from 'react'

//Dots de navegacion por secciones de la pagina wew
const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
    {['Home', 'Quien soy', 'Contacto', 'Trabajo', 'Habilidades', 'Testimonios'].map((item, index) =>(
            <a 
            href={`#${item}`} 
            key={item + index}
            className="app__navigation-dot"
            style={ active === item ? {backgroundColor: '#313BAC'} : { } }
            />
    ))}
    </div>
  )
}

export default NavigationDots