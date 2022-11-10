import { Header, Link } from 'components/AppMenu/AppMenuStyled';

export default function AppMenu() {
  return (
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="movies">Movies</Link>
      </nav>
    </Header>
  );
}
