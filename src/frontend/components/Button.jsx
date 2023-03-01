import "./button.css";

export default function Button({ title, type }) {
  return (
    <button className="button" type={type}>
      {title}
    </button>
  );
}
