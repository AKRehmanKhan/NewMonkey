import React, { Component } from 'react'
import NewsItems from './newsItems'

export default class news extends Component {
   constructor()
    {
        super();
        this.state=
        {
            articles:[],
            page:1,
            results:0,
            loading:false
        }
    }
    async componentDidMount()
    {
         let promis=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
         let data= await promis.json();
         this.setState({articles:data.articles,
                       page:1,
                       results:data.totalResults,
                       loading:true})
         
    }
    handlePre= async()=>
    {
        
         let promis=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`);
         let data= await promis.json();
         this.setState({articles:data.articles,
                       page:this.state.page-1,
                       loading:true})
    }
    handleNex= async()=>
    {
        
         let promis=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`);
         let data= await promis.json();
         this.setState({articles:data.articles,
                        page:this.state.page+1,
                        loading:true})
    }


  render() {


    return (
      <div >
        <h2 style={{textAlign:"center", marginTop:'5px'}}>NewsMonkey - Top Headlines</h2>
        <img  style={{position:'relative', top:'40%',left:'30%'}}src="./loading.gif" alt="loading" />
        {/* <div className='row' style={{marginLeft:'90px',marginTop:'-15px'}}>
         {  this.state.articles.map((elem)=>{
                                             return(
                                                    <div className='col-md-3'  key={elem.url}> 
                                                      <NewsItems title={`${elem.title.slice(0,45)}...`} src={elem.urlToImage} des={`${(elem.description===null)?"": elem.description.slice(0,75)}... ` }url={elem.url}/>
                                                    </div>
                                                
                                                    )
                                            }
                                   )
          }
       </div> */}

       <button disabled={this.state.page<=1} onClick={this.handlePre} style={{marginLeft:'8%', marginTop:'20px'}}>Previous</button>
       <button disabled={this.state.page*20>=this.state.results}onClick={this.handleNex} style={{position:'relative', left:'73%', marginBottom:"30px", width:"70px"}}>Next</button>
      </div>
    )
  }
}
