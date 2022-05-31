import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'Sobre mi', 'Trabajo', 'Habilidades', 'Testimonios', 'Contacto'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#5DD88A' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;