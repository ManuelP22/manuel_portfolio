import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.linkedin.com/in/manuel-perez-9b0391238/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
        
        <div>
          <a href="https://github.com/ManuelP22" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia