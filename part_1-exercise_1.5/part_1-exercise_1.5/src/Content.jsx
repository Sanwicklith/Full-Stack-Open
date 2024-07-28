import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts.parts[0]} />
      <Part part={parts.parts[1]} />
      <Part part={parts.parts[2]} />
    </div>
  );
};

export default Content;
