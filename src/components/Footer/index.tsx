const footerTabs: Array<string> = [
  'About',
  'FAQ',
  'Terms',
  'Privacy Policy',
  'Cookie Policy',
];

export const Footer = () => {
  return (
    <footer
      className={
        'flex justify-center lg:justify-end flex-wrap py-5 px-8 bg-charcoal text-white font-medium'
      }
    >
      {footerTabs.map((tab) => (
        <div className={'mx-5 my-1 lg:my-0'} key={tab}>
          {tab}
        </div>
      ))}
    </footer>
  );
};
