import {useState} from 'react'
import Button from '@mui/material/Button';


function Form (){

    const [Mname,setMname]     = useState("") 
    const [poster,setPoster]   = useState ("")
    const [summary,setSummary] = useState("")
    const [rating,setRating]   = useState("")

    const  currentMovie  = [{ Mname:Mname,poster,summary,rating }]

    const [movieList, setmovieList] = useState([
        {
          Mname: "Ironman",
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69mnaz2z3AeZitFmqCWJFUeujGjGPJzKfkw&usqp=CAU",
          summary:
            "Marvel's Iron Man 3 - pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy hands, he embarks on a harrowing quest to find those responsible",
            rating: 9.3
        },
        {
          Mname: "Spiderman",
          poster:
            "https://www.denofgeek.com/wp-content/uploads/2019/07/spider-man-far-from-home-ending-explained.jpg?fit=1920%2C1080",
          summary:
            "Spider-Man is a Marvel commic story, When a human bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
            rating: 8.2
        },
        {
          Mname: "KungfuPanda",
          poster:
            "https://images.thequint.com/thequint%2F2016-04%2Fd5577dd1-44b1-4527-9cb4-30907717b5b5%2Fkkf3.jpg?rect=0%2C0%2C1820%2C1024",
          summary:
            "Kung Fu Panda is a children movie that has many mature themes. None of them involves what most mature movies do today. These themes are about family, faith and true greatness. One of the keys to the movie is the issue of Shifu lack of belief, both in Oogway and in Po.",
            rating: 8.8
        },
        {
          Mname: "Life of Pi",
          poster:
            "https://fanart.tv/fanart/movies/87827/movieposter/life-of-pi-522408b24f7aa.jpg",
          summary:
            "After the freighter they're on sinks in a storm, a teenager (Suraj Sharma) and a Bengal tiger wind up on a small lifeboat and must learn to trust each other to survive and the life of story very well describe the soul contet throught its narration. ",
            rating: 7.9
        }
      ])

    




    return (

             <div className="container">

                    
                    {/* <h1 >Movie Data Base</h1> */}
               
                    <input  placeholder="Enter Movie name"       onChange  ={(x)=> setMname(x.target.value)}  />   {Mname}
                    <input  placeholder="Paste your image link"  onChange  ={(y)=> setPoster(y.target.value)} />                  
                    <input  placeholder="Movie summary "         onChange  ={(z)=>  setSummary(z.target.value)} />  
                    <input  placeholder="Ratings"                onChange  ={(e)=>  setRating(e.target.value)} />  
                   
                   

                   <Button variant="contained" type="submit" onClick= { () => setmovieList([...movieList, ...currentMovie])} >Add Movie</Button>
                    
                    <div className="movielist">
                    {movieList.map ((x)=>(<Movie Mname = {x.Mname}    poster= {x.poster} 
                                                summary= {x.summary}  Ratings= {x.rating}
                                            />))}

                    </div>
                    

             </div>    

    )
}

function Movie({ Mname, poster, summary, Ratings }) {

const [show, setshow] = useState(true)
const styles  = { display: show ? "block": "none"};

    return (

      <div className="movieContainer">
          
          <div  >
                <img  src={poster} alt="Movie Image" />   
                <h3>{Mname}</h3>              
                <button onClick = {()=> setshow (!show)}>  {show ? "Hide": "show"} Description</button>
                <p style ={styles} >  {summary} </p>
                <h5> ⭐ { Ratings}</h5>
                <Counter/>

          
          </div>
    
      </div>
      
    );
    }

    function Counter () {

        const [ like, setlike] = useState(0)
        const [ Dislike, setDislike] = useState(0)

        return(
            <div>
                <button onClick= { () => setlike(like + 1)}   > 👍{like}</button>

                <button onClick= { () => setDislike(Dislike + 1)}   > 👎{Dislike}</button>
            </div>
        )

    }



    

    export default Form;