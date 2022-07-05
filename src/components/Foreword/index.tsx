import './styles.scss';

export const Foreword = () => {
  return (
    <div className='flex foreword_container'>
      <img
        src='./../../../assets/foreword_1.png'
        className='foreword_image foreword_image_cabin'
        alt='Cabin'
      />
      <div className='foreword_text_container text-center'>
        <h2 className='foreword_text foreword_title'>You Have Whole A World</h2>
        <h4 className='foreword_text foreword_caption'>
          Travel has become a big part of everyday life. We plan our vacation in
          different countries and continents. We try to search something new all
          the time. We believe, that travelling must be diverse and inspiring.
          Let's discover the world with us!
        </h4>
      </div>

      <img
        src='./../../../assets/foreword_2.png'
        className='foreword_image foreword_image_trees'
        alt='Trees'
      />
    </div>
  );
};
