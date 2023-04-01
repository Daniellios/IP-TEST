import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import error_page_styles from "../styles/ErrorPage.module.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  });

  return (
    <div className={error_page_styles.containter}>
      <h1 className={error_page_styles.title}>Ой...</h1>
      <h2 className={error_page_styles.description}>Страница не найдена :P</h2>
      <p>
        Возращаемся на гравную страницу
        <Link href="/" className={error_page_styles.link}>
          Homepage{" "}
        </Link>
        через 3 секунды...
      </p>
    </div>
  );
};

export default NotFound;
