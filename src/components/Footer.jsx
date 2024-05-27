import { socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className="footer fixed inset-x-0 bottom-0 footer-center p-4 bg-primary text-primary-content">
      <aside className="hidden pt-16">
        <p className="font-bold ">
          Paradizo Films <br />
          Providing the best for the homies
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {socialLinks.map((link) => {
            const { id, href, rel, target, icon } = link;
            return (
              <a
                key={id}
                href={href}
                rel={rel}
                target={target}
              >
                {icon}
              </a>
            );
          })}{' '}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
