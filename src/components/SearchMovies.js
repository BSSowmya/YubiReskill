import Table from "./Table";
import props from 'react'

function SearchMovies(props){
   
    const movies =[
        {
           id :"mod1",
           name :"The Shawshank Redemption",
           img:"https://tse1.mm.bing.net/th?id=OIP.bD7k_EwWxdx5TzzDiaQqswHaHd&pid=Api&P=0",
           genre :"drama",
           IMDB_rating :"9.3/10",
           star:0,
           info:{dir:"Frank Darabont",rel_year:"1994"}
        },
        {
           id :"mod-2",
           name :"The Dark Knight",
           img:"https://tse3.mm.bing.net/th?id=OIP.zU8P45LlyXn-F874TJtR-QHaFj&pid=Api&P=0",
           genre :"action",
           IMDB_rating :"9.0/10",
           star:0,
           info:{dir:"Christopher Nolan",rel_year:"2008"}
        },
        {
           id :"mod-3",
           name :"The Town",
           img:"https://tse1.mm.bing.net/th?id=OIP.o6mieKb_y1QUK2UtQt9ibgHaK8&pid=Api&P=0",
           genre :"thriller",
           IMDB_rating :"7.5/10",
           star:0,
           info:{dir:"Ben Affleck",rel_year:"2010"}
        },
        {
           id :"mod-4",
           name :"The Conjuring",
           img:"https://tse3.mm.bing.net/th?id=OIP.bFB2qG3tkU4Z-tG_XFdO1wHaLH&pid=Api&P=0",
           genre :"horror",
           IMDB_rating :"7.5/10",
           star:0,
           info:{dir:"James Wan",rel_year:"2013"}
        },
        {
           id :"mod-5",
           name :"Shutter Island",
           img:"https://tse4.mm.bing.net/th?id=OIP.Ky1HeyIOMfgcyOHtvTMZpAHaEK&pid=Api&P=0",
           genre :"horror",
           IMDB_rating :"8.8/10",
           star:0,
           info:{dir:"Martin Scorsese",rel_year:"2010"}
        },
        {
           id :"mod-6",
           name :"Inception",
           img:"https://tse1.mm.bing.net/th?id=OIP.EI-h6SO0PdExgxUN51ozmQHaEK&pid=Api&P=0",
           genre :"action",
           IMDB_rating :"8.0/10",
           star:0,
           info:{dir:"Christopher Nolan",rel_year:"2010"}
        },
        
        {
           id :"mod-7",
           name :"Black Swan",
           img:"https://tse3.mm.bing.net/th?id=OIP.gUnAm7iXdWC78OUHvYavtgHaEt&pid=Api&P=0",
           genre :"drama",
           IMDB_rating :"8.2/10",
           star:0,
           info:{dir:"Darren Aronofsky",rel_year:"2010"}
        },
        
        {
           id :"mod-8",
           name :"Roma",
           img:"https://tse2.mm.bing.net/th?id=OIP.oKkoi16Dk9Na-VH4iEnJcwHaEK&pid=Api&P=0",
           genre :"drama",
           IMDB_rating :"7.7/10",
           star:0,
           info:{dir:"Alfonso Cuarón",rel_year:"2018"}
        },
        {
           id :"mod-9",
           name :"The 40-Year-Old Virgin",
           img:"https://tse4.explicit.bing.net/th?id=OIP.YTvj724WayNkUdQsFB12ygHaLH&pid=Api&P=0",
           genre :"comedy",
           IMDB_rating :"7.1/10",
           star:0,
           info:{dir:"Judd Apatow",rel_year:"2005"}
        }]
        let n = props.m_name;
        let i= movies.findIndex((movies)=>(movies.name === n))
        console.log(n)
        console.log (i)
    
return(
<>

<Table id={movies[i].id} name ={movies[i].name} img={movies[i].img} genre={movies[i].genre} imbd={movies[i].IMDB_rating} dir={movies[i].info.dir} year={movies[i].info.rel_year}></Table>



</>


)


}
export default SearchMovies;