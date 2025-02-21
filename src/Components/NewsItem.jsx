import tempimg from "../assets/tempimg.jpg";
const NewsItem=({title,description,image,url})=>{
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3  px-2 py-2" style={{maxWidth:"360px", textAlign:"center"}}>
            <img src={image?image:tempimg} style={{height:"180px" , width:"340px"}}  className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}...</h5>
                <p className="card-text">{description?description.slice(0,90):""}...</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}


export default NewsItem;