const Navbar = (props) => {
  const { username } = props;
  return (
    <div>
      Navbar <p>{username}</p>
    </div>
  );
};

export default Navbar;
