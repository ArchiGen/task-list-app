import Button from "./Button";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>Tasks List</h1>
      <Button
        color={showAddTask ? "#EB6FC3" : "black"}
        text={showAddTask ? "Close" : "Add Task"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
