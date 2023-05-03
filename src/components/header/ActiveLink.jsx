import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#0070f3",
  textDeration: "underline",
};

export const ActiveLink = ({ text, href, icon }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : null}>
        <span className={icon}></span>
        {text}
      </a>
    </Link>
  );
};
