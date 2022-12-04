import Movies from '../../components/movies';
import { Outlet } from "react-router-dom"

export const  MoviesPage = () => {
      return(
        <div>
         {<Movies/>}
         <Outlet/>
        </div>
    )

}