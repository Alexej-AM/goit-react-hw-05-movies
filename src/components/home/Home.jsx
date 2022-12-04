import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMoviesTrending } from 'components/fetch/Fetch';
import { ListMovie, Title, ListItem, ListBox } from './HomeStyled';
import { Loading } from "components/loading/Loading"


export const Home = () => {
  const location = useLocation();
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMoviesTrending().then(setPopular)
    setLoading(false)
}, []);

  return (
   

    <ListBox>
        {loading && <Loading/>}
      <ListMovie>
        {popular.length > 0 &&
          popular.map(({ id, title, poster_path }) => {
            return (
              <ListItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={
                  poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}`: `https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}  width={260}
                  height={350} />
                  <Title>{title}</Title>
                </Link>
              </ListItem>
            );
          })}
      </ListMovie>
    </ListBox>
    );
};
