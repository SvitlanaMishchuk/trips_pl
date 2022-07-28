import { ContinentEntity } from '../../../../models/ContinentEntity';
import { SubregionEntity } from '../../../../models/SubregionEntity';
import { Button } from '../../../../shared/components/Button';

interface ContinentProps {
  continent: ContinentEntity;
}

export const Continent = ({ continent }: ContinentProps) => {
  return (
    <>
      <div className='px-4 py-7 my-10  bg-dark-secondary flex'>
        <p className='text-2xl px-10 font-souv'>{continent.name}</p>
        <Button label='View Region' type='primary'></Button>
      </div>
      <ul className='grid gap-8 grid-cols-3'>
        {continent.subregions.map(({ id, name }: SubregionEntity) => (
          <Button key={id} label={name} type='secondary' />
        ))}
      </ul>
    </>
  );
};
