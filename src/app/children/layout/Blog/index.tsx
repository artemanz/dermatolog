import c from "./style.module.scss";
import articleImage from "./assets/blog.png";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const articles = [
  {
    id: 1,
    title: "Базальноклеточный рак кожи под медицинской маской",
    image: articleImage,
    href: "#",
  },
  {
    id: 2,
    title: "Базальноклеточный рак кожи под медицинской маской",
    image: articleImage,
    href: "#",
  },
];

const Blog = (props: Props) => {
  return (
    <section>
      <div className={c.content}>
        <h2 className={c.title}>Статьи</h2>

        <ul className={c.articles}>
          {articles.map((article) => (
            <li key={article.id}>
              <Link className={c.article} href={article.href}>
                <Image
                  className={c.articleImage}
                  src={article.image}
                  alt={article.title}
                />
                <p className={c.articleTitle}>{article.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Blog };
