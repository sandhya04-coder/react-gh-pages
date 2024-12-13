
import React from 'react';
import './WhatGPT3.css';
import {Feature} from '../../components';
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
     <div className='gpt3__whatgpt3-feature'>
     <Feature title="What is GPT-3" 
     text="GPT-3, developed by OpenAI, is a state-of-the-art language model built on the Transformer architecture. With 175 billion parameters, it is one of the largest AI models of its time, trained on a vast dataset of text from the internet. It can perform a wide range of natural language processing tasks, including text generation, translation, summarization, and answering questions. Its ability to understand and produce human-like text makes it a powerful tool for various applications, from content creation to coding assistance." />
     </div>
     <div className='gpt3__whatgpt3-heading'>
      <h1 className='gradient__text'>
        The possibilities are beyond your imagination
      </h1>
      <p className='gradient__text'>Explore The Library</p>
     </div>
     <div className='gpt3__whatgpt3-container'>
     <Feature title="Chatbots" text="GPT-3 has revolutionized chatbot technology by enabling more natural and engaging conversations. Its ability to understand context and generate coherent, human-like responses enhances customer service, virtual assistants, and user interactions. Unlike traditional chatbots with pre-programmed responses, GPT-3 adapts to a wide range of queries, making conversations feel personalized and intuitive." />
      <Feature title="Knowledge-base" text="As a knowledge base, GPT-3 excels at providing accurate and detailed information across various subjects. Its extensive training data allows it to answer questions, explain complex concepts, and assist in research. This makes it a valuable tool for users seeking quick and reliable information, whether for professional tasks or personal curiosity." />
      <Feature title="Education" text=" In education, GPT-3 acts as a virtual tutor, offering explanations, problem-solving assistance, and tailored learning experiences. It generates study materials, simplifies complex topics, and adapts to individual learning styles. This makes education more accessible, fostering self-paced learning and supporting students and educators alike." />
     </div>
    </div>
  )
}

export default WhatGPT3;