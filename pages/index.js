import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LikeButton from './blog/LikeButton'
import Link from 'next/link'
import fs from 'fs'
const Home = ({ slugs }) => {

  return (
    <div className={styles.container}>
      <LikeButton />
      <div>
        {slugs.map(slug => (
          <div key={slug}>
            <Link href={"/blog/" + slug}>
              <a>
                Go to {"/blog" + slug}
              </a>
            </Link>
          </div>
        ))}
        <Link href={"/blog/Todos"}>
          <a> Go to Todos</a>
        </Link>
      </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  }
}
export default Home;



