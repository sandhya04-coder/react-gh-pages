
import React from 'react';
import './Features.css';
import { Feature } from '../../components';
const Features = () => {
  return (
    <div className='gpt3__features section__padding ' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The future is now and you just need to realise it.Step into future today and make it happen !!
        </h1>
        <p className='gradient__text'>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        <Feature title="Large-Scale Language Model" text="GPT-3 is one of the largest language models ever built, with 175 billion parameters. Its vast size enables it to understand and generate human-like text with high accuracy and fluency."/>
        <Feature title="Few-Shot and Zero-Shot Learning" text="GPT-3 can perform tasks with minimal or no task-specific training data. By providing a few examples (few-shot) or simply describing the task (zero-shot), GPT-3 adapts its output to meet user requirements."/>
        <Feature title="Wide Range of Applications" text="GPT-3 supports diverse applications like writing, coding, translation, question answering, summarization, and more, making it a versatile tool across various domains."/>
        <Feature title="Context Awareness" text="GPT-3 excels at maintaining context in conversations or long-form text generation, producing coherent and contextually relevant responses. This capability enhances its use in chatbots and virtual assistants."/>
      </div>
    </div>
  )
}

export default Features;