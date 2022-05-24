import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  {title: 'Web Development', descripction: 'Me especializo en el desarrollo web.', imgUrl: images.about01},
  {title: 'JavaScript', descripction: 'Desarrollador junior JavaScript con de framework React y node.js, frontend/backend', imgUrl: images.about02},
  {title: 'Java', descripction: 'Desarrollador junior Java y manejo de Spring y OracleSQL, frontend/backend', imgUrl: images.about03},
  {title: 'UI/UX, Web animations', descripction: 'Conocimientos empricos', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
       Se que el <span> Buen Trabajo</span><br /> Significa <span> Buen negocio</span></h2>

      <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
        whileInView={{ opacity: 1}}
        whileHover={{ scale: 1.1}}
        transition={{ duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title}/>
          <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop: 10}}>{about.descripction}</p>
        </motion.div>
      ))}
      </div>
    </>
  )
}

export default About