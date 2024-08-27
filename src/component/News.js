import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export class News extends Component {
 static defaultProps = {
   country:'in',
   pagesize:6,
   category:'general'

};


  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string

  }
  
  
  constructor(props){
    super(props);
    console.log("hello i am a constructor from news component");
    
    this.state={
      articles:[],
      page:1,
      
    }
    document.title=`${this.props.category}-NewsMonkey`;
  }

  async componentDidMount(){
    console.log("cdn");
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f2507703bfbf4d1cb91afd387ed70a2a&page=1&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parseddata= await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles  })

 
  }

  
  handlepreviousclick=async()=>{
     console.log("pevious");
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f2507703bfbf4d1cb91afd387ed70a2a&page=${this.state.page -1}&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parseddata= await data.json();
    console.log(parseddata); 
    this.setState({articles:parseddata.articles})

    this.setState({
      
      page: this.state.page -1,
      articles:parseddata.articles

  })
  }

  handlenextclick=async()=>{
    console.log("next");
    

    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f2507703bfbf4d1cb91afd387ed70a2a&page=${this.state.page +1}&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parseddata= await data.json();
    console.log(parseddata); 
    this.setState({articles:parseddata.articles})

    this.setState({
      

      page: this.state.page + 1,
      articles:parseddata.articles

  })
}


  render() {
   
    return (
      <>
      <div className="conatiner my-3">
        <h1 className="text-center" style={{margin:'90px 0px 25px 0px'}}>News monkey - top headlines</h1>

        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              < Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
          })}
        </div>
       
       

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" classNamez="btn btn-dark " onClick={this.handlepreviousclick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>  &rarr; Next</button>
        </div>
        

        

      </div>
      
     
      </>
    )
  }
}

export default News
