
import React from 'react';
import './Possibility.css';
import possibilityimg  from '../../assets_gpt/possibility.png';
import { Feature } from '../../components';
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityimg} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4> Request Early Access to Get Started</h4>
        <h1 className='gradient__text'> Possibilities are beyond your imagination</h1>
        <p><Feature title="The Boundless Horizons of GPT-3" text="GPT-3 (Generative Pre-trained Transformer 3) is a revolutionary natural language processing model developed by OpenAI, showcasing remarkable capabilities in understanding and generating human-like text. Its versatility spans numerous applications, including content creation, language translation, code assistance, virtual assistance, education, and idea generation. GPT-3 excels in adapting tone and style to various contexts, delivering coherent and contextually relevant outputs. However, it is not without limitations, as it can sometimes produce inaccurate or biased information due to the constraints of its training data. Despite these challenges, GPT-3 represents a monumental step forward in AI development, offering boundless possibilities to transform industries while highlighting the importance of responsible innovation."/> </p>
        <h4>So What is keeping you away from using it ? </h4>

      </div>
    </div>
  )
}

export default Possibility;