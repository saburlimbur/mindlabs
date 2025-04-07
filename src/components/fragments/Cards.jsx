import PropTypes from "prop-types";

const CardProps = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
  src: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
};

function Card({ className = "", children, onClick }) {
  return (
    <article className={className} onClick={onClick}>
      {children}
    </article>
  );
}

function Header({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Image({ className = "", src = "", alt }) {
  return (
    <div className={className}>
      <img src={src} className={className} alt={alt} />
    </div>
  );
}

function Body({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
function Badge({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Footer({ className = "", children }) {
  return <footer className={className}>{children}</footer>;
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
  src: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
};
Header.propTypes = CardProps;
Image.propTypes = CardProps;
Body.propTypes = CardProps;
Badge.propTypes = CardProps;
Footer.propTypes = CardProps;

Card.Header = Header;
Card.Image = Image;
Card.Body = Body;
Card.Footer = Footer;
Card.Badge = Badge;

export default Card;
