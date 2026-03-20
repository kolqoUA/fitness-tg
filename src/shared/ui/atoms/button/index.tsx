import "./styles.css";
import "./buttonStyles.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = (props: Props) => {
  return (
    <button className={`button ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;