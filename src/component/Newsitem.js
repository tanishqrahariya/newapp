import React from 'react'

const  Newsitem =(props)=> {
  
    let { title, description, imageurl, newsurl, author, date, source } = props;
    
    return (
        <div>
            <div className="card" style={{ width: "27rem" }}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
                <img src={!imageurl ? "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0717%2Fr1359634_1296x729_16%2D9.jpg" : imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">by {!author ? "unknown" : author} on {date}</small></p>
                    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more!</a>
                </div>
            </div>
        </div>
    );
}


export default Newsitem
