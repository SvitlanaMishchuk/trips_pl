export const Foreword = () => {
  return (
    <div className='flex py-16 px-4 bg-dark-secondary lg:py-20 lg:px-8'>
      <img
        src='./../../../assets/foreword_1.png'
        className='hidden lg:my-6 lg:-scale-x-100 lg:scale-y-100 lg:block lg:max-h-48'
        alt='Cabin'
      />
      <div className='mx-12 text-center text-text'>
        <h2 className='font-souv font-semibold mb-4 text-3xl lg:text-5xl '>
          You Have Whole A World
        </h2>
        <h4 className='font-souv font-bold text-lg leading-8 lg:text-xl lg:leading-10'>
          Travel has become a big part of everyday life. We plan our vacation in
          different countries and continents. We try to search something new all
          the time. We believe, that travelling must be diverse and inspiring.
          Let's discover the world with us!
        </h4>
      </div>
      <img
        src='./../../../assets/foreword_2.png'
        className='hidden lg:scale-150 lg:block lg:max-h-48'
        alt='Trees'
      />
    </div>
  );
};
