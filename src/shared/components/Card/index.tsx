import './styles.scss';

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
    <div className={`card_container text-center ${containerClassname} `}>
      {image && <img className={`card_image`} src={image} />}
      <h3 className={`card_title`}>{title}</h3>
      {content && <p className={'card_content'}>{content}</p>}
    </div>
  );
};
