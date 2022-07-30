// import {Section,Div,Title} from './styled'

// export default function NewMovies({datas}){
//     return(
//         <>
//         <Title>Em cartaz</Title>
//         <Section>
//             {datas.map((data)=>{
//                 console.log(data)
//                 var url = `https://image.tmdb.org/t/p/original/${data.poster_path}`
//                 return (
//                     <Div  key={data.id}>
//                             <img src={url}></img>
//                             <div>
//                                 <p>{data.original_title} </p>
//                                 <p>{data.release_date}</p>
//                             </div>
//                         </Div>
//                 )
//             })}
//         </Section>
        
//         </>
//     )
// }