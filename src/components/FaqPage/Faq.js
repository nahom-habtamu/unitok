import React from 'react';

const Faq = ({faq}) => {

    const buildAnswers = () => {
        return faq.answers.map(answer => 
            <p className='faq__text' key={answer}>{answer}</p>
        );
    }

    return (
        <div className='faq'>
            <h3 className='faq__title'>{faq.question}</h3>
            {
                buildAnswers()
            }
        </div>
    );
}

export default Faq;