
const menuItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <header>
      <ul>
        {menuItems.map(({ href, text }) => {
          if (href.includes('/movies')) {
            return (
              <li key={href}>
                <button to={href}>{text}</button>
              </li>
            );
          }

          return (
            <li key={href}>
              <button to={href}>
                {text}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};