import "./styles.css";

const Section = (props: any) => {
  return (
    <div className="section">
      <div className="section-header">
        {props.icon}
        <p>{props.header}</p>
      </div>
      <div className="section-children">
        {props.children}
      </div>
    </div>
  );
};

export default Section;