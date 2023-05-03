import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home", link: "/" },
    { label: "About", icon: "pi pi-fw pi-user", link: "/about" },
    { label: "Contact", icon: "pi pi-fw pi-phone", link: "/contact" },
    { label: "Pricing", icon: "pi pi-fw pi-wallet", link: "/pricing" },
  ];
  return (
    <nav className={styles.menuContainer}>
      {items.map(({ label, link, icon }) => (
        <ActiveLink key={label} text={label} href={link} icon={icon} />
      ))}
    </nav>
  );
};
