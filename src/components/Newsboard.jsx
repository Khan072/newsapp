import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const Newsboard = () => {
    const [articles,setArticles]=useState(null);
    const [search,setSearch]=useState(null);
    // let [page,setPage]=useState(1);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/everything?q=all&sortBy=publishedAt&apiKey=7fa05e2466784f6996cad48772aaf84b`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
        
    },[])
    const searchNews=()=>{
      if(search.trim()===""){
        alert("Enter something")
        return;
      }
      let url=`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=7fa05e2466784f6996cad48772aaf84b`;
      fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));

    }
    if(!articles){
        return(
            <h1>Loading.......</h1>
        )
    }
    else{
  return (
    <div>
        
        <h2 style={{ textAlign:" center" }}>Latest <span className="badge bg-danger">News</span></h2>
        <div style={{ textAlign:"center" }}><input style={{ width:"300px" }} placeholder="Search" type="text" className="ps-2" onChange={(e)=>setSearch(e.target.value)} /><button className="ms-2" onClick={searchNews}>Search</button></div>
        
        <div style={{ display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",gap:"10px" }}>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>

        })}
      </div>
        {/* <button disabled={page==1} onClick={()=>setPage(--page)}>Previous</button>
      <button onClick={()=>setPage(++page)}>Next</button> */}
    </div>
  )
}
}

export default Newsboard
