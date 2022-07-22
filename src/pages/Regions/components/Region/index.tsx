import { RegionEntity } from '../../../../models/RegionEntity';

interface RegionProps {
  region: RegionEntity;
}
export const Region = ({ region }: RegionProps) => {
  return (
    <div className='px-4 py-7 my-10 font-souv bg-dark-secondary'>
      <p className='text-2xl px-10'>{region.name}</p>
    </div>
  );
};
