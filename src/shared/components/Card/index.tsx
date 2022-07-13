interface CardProps {
  title: string;
  content?: string;
  image?: string;
  containerClassname?: string;
}

export const Card = ({
  title,
  content,
  image,
  containerClassname = '',
}: CardProps) => {
  return (
    <div className={`w-full my-5 lg:mx-5 text-center ${containerClassname} `}>
      {image && <img className='max-h-full w-full lg:max-h-48' src={image} />}
      <h3 className={`m-4 text-lg font-bold`}>{title}</h3>
      {content && <p className={'my-4 mx-10'}>{content}</p>}
    </div>
  );
};
