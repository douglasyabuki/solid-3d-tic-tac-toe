import styles from "./navbar.module.css";

function MenuIcon() {
  return (
    <svg
      height={40}
      width={40}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      class={styles.icon}
    >
      <path d="M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z" />
    </svg>
  );
}

export function Navbar() {
  return (
    <header class={styles.navbar}>
      <MenuIcon />
    </header>
  );
}
