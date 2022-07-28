import { Continent } from './components/Continent';
import continents from './../../api/continents.json';
import { ContinentEntity } from '../../models/ContinentEntity';

export const Continents = () => {
  return (
    <>
      <div className='bg-dark-secondary font-souv px-8 pt-14 pb-5'>
        <h1 className='h1 text-center'>All Over The World</h1>
        <h5 className='h5 text-center mt-4'>
          Discover all over the world. Find the best places and amazing
          impressions.
        </h5>
        <div className='flex justify-center mt-1'>
          <img src='../../assets/images/world.jpeg' alt='World map' />
        </div>
      </div>
      <div className='bg-cultured px-10 lg:px-28 py-5'>
        {continents.map((continent: ContinentEntity) => (
          <Continent continent={continent} />
        ))}
      </div>
    </>
  );
};
