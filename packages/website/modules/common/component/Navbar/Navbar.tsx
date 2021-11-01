import Link from "next/link";

interface Props {
  activePage: string;
}

const Navbar: React.FC<Props> = ({ activePage }: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__title">
          <Link href="/">Percy</Link>
        </span>
      </div>
      <div className="navbar__right">
        <div className="menu">
          <div className="menu__item">
            {activePage === "Home" ? (
              <Link href="/documentation"> Documentacion </Link>
            ) : (
              <Link href="/"> Inicio </Link>
            )}
          </div>
          <div className="menu__item">
            <Link href="google.com"> Github </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
