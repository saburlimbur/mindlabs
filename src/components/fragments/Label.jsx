import { PropTypes } from "prop-types";

function Label(props) {
  const { className, htmlFor, children } = props;

  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;
