import './styles.scss';
const footerTabs: Array<string> = [
  'About',
  'FAQ',
  'Terms',
  'Privacy Policy',
  'Cookie Policy',
];

export const Footer = () => {
  return (
    <footer className={'flex justify-end footer_container'}>
      {footerTabs.map((tab) => (
        <div className={'footer_tab'}>{tab}</div>
      ))}
    </footer>
  );
};
