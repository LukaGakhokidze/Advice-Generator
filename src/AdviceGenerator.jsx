import { useEffect, useState } from 'react';

function AdviceGenerator() {
  const [advice, setAdvice] = useState('');
  const [adviceNum, setAdviceNum] = useState('0');
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();

      setAdvice(result.slip.advice);
      setAdviceNum(result.slip.id);
    } catch (error) {
      setError('An error occurred while fetching data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdviceGeneration = () => {
    setError(null);
    fetchData();
  };
  return (
    <div className='bg-Dark-Greyish-Blue px-6 py-10 flex flex-col justify-center items-center rounded-lg desktop:aspect-video aspect-square desktop:w-[540px] relative'>
      <h1 className='text-[11px] tracking-[3.46px] text-Neon-Green uppercase mb-6  shadow-custom '>
        {' '}
        advice #{adviceNum}
      </h1>
      <p className='tracking-[-0.26px] text-Light-Cyan mb-6 desktop:mb-10 text-center'>
        {error ? error : advice}
      </p>
      <img
        src='assets/images/pattern-divider-mobile.svg'
        alt=''
        className='desktop:hidden'
      />
      <img
        src='assets/images/pattern-divider-desktop.svg'
        alt=''
        className='desktop:block hidden'
      />
      <button
        onClick={handleAdviceGeneration}
        className='absolute bottom-[-32px] left-[138px] desktop:left-[238px] rounded-full bg-Neon-Green flex items-center justify-center w-16 aspect-square hover:shadow-btn'
      >
        <img src='assets/images/icon-dice.svg ' alt='' />
      </button>
    </div>
  );
}

export default AdviceGenerator;
