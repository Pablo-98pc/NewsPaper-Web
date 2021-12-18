 
import React,{useState,useEffect} from 'react';
import New from './New.js';
import axios from 'axios';

function News () {
/*class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {news:[],keyword:''}
        this.handleSearch = this.handleSearch.bind(this)
        
        
    }*/
  const[news,setNews] = useState([])
  const [keyword,setKeyword] = useState('españa')
  const [date,setDate] = useState('2021-12-16')
  const [language,setLanguage] = useState('es')
  const apiUrl = `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&to=${date}&sortBy=publishedAt&language=${language}&apiKey=ead552d4f5b44a7abb89cf38ee1f667d`

  useEffect(()=>{

         
        const consultAPY = async () => {
          const res =await axios.get(apiUrl); 
          
          const data = res.data;
          const info = data.articles;
          setNews(info);
          
        }
        consultAPY();
       
      
    
    
  },[keyword,apiUrl]);
  
  function handleSearch (event) {
    if(event.charCode === 13) {
   setKeyword(event.target.value)
      console.log(keyword)
    }
    

};
    
    function handleDate(event) {
        setDate(event.target.value)
    }

    function handleLanguage(){
        let i = 0
        for(i=0 ; i < document.languageContainer.language.length ; i++) {
            if(document.languageContainer.language[i].checked) {
                break;
            }
        }
        setLanguage(document.languageContainer.language[i].value)
    }
    /*collectData = async() =>{
        const res =await axios.get(`https://newsapi.org/v2/everything?q=${this.state.keyword}&from=2021-11-14&sortBy=publishedAt&apiKey=ead552d4f5b44a7abb89cf38ee1f667d`);
        const data = res.data;
        const info = data.articles;
        const infoFinished = info.slice(10,info.length)    
        this.setState({news : infoFinished});
        }
    handleSearch(event){
        if(event.charCode === 13){
            this.setState({keyword:event.target.value})
            
        }
        
    }*/

    

        let groupOfNews = news.map((item)=><><New item = {item}/></>
        )
            
            
       return <><div className='input'><form name='languageContainer'><input type="Radio" name="language" value="es" /> español
       
       <input type="Radio" name="language" value="en"/> ingles
        <input type="Button" value="change language" onClick={handleLanguage}/> 
       </form> 
       < input  type="date" onChange={handleDate}></input><input type="text" placeholder='search news' onKeyPress={handleSearch}></input><br></br></div><div className="newsContainer">{groupOfNews}</div></>
    
}
export default News


/*function Newss() {
    const[news,setNews] = useState([])
    useEffect
}

function collectNews({keyword='españa'}= {}) {
    const apy = `https://newsapi.org/v2/everything?q=${keyword}&from=2021-11-14&sortBy=publishedAt&apiKey=409b9ba2be5047a7bb99233454af1981`

    return async() =>{
        const res =await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2021-11-14&sortBy=publishedAt&apiKey=409b9ba2be5047a7bb99233454af1981`);
        const data = res.data;
        const info = data.articles;
        const news = info.map(image=>{
            const {title,author,urlToImage} = image
            return {title,author,urlToImage}
        })
        return news
        }
}*/