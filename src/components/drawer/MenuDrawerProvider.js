import Menu from "../menu/Menu";

const MenuDrawerProvider = ({ content }) => {
  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{content}</div>
      <Menu />
    </div>
  );
};

export default MenuDrawerProvider;
