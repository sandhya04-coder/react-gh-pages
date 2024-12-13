
import React from 'react';
import './Header.css';
import people from '../../assets_gpt/people.png';
import ai from '../../assets_gpt/ai.png';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI </h1>
        <p>Got problems? AI has the answers!
         From simplifying your tasks to solving complex challenges, AI is here to revolutionize
         the way you work and create. Whether you need content, 
         code, or clever solutions, our AI-powered platform delivers precision and innovation at lightning speed.
         Let AI turn your ideas into reality effortlessly!
         </p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="AI" />
      </div>
      
    </div>
  )
}

export default Header;