interface ButtonProps {
  label: string;
  type?: 'primary' | 'secondary';
}
export const Button = ({ label, type = 'primary' }: ButtonProps) => {
  return (
    <button className={`underline font-bold ${`text-` + type}`}>{label}</button>
  );
};
