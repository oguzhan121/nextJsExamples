import Head from 'next/head'   
import Link from 'next/link';
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [moviesList, setMovies] = useState([]);


  async function getPopulerMovies() {
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a4ede8ff276cd5e76cd27b41cf8f0b05&language=en-US&page=1`);
    const movies = await request.json();
    setMovies(movies.results);
  }

  useEffect(() => {
    getPopulerMovies()

  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Anasayfa</title>
        <meta name="description" content="Anasayfa" />
      </Head>

      <h1>Populer Filmler</h1>
      <div className="card">
        {
          moviesList.map(item => (
            <Link href={`/movieDetail/${item.id}`} key={item.id}>
              <a className="card-item" >
                <div className="card-img">
                  <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`}></img>
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.overview}</p>
                </div>
              </a>
            </Link>
            
          ))}

      </div>
    </div>
  )
}
