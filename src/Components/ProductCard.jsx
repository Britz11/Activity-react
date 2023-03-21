function ProductCard (post){

    
    return(
        <a href={"/products/" + post.post.id} className="card">
              <img src={post.post.images[0]}></img>
              <h2>{post.post.title}</h2>
              <h3>Price: {post.post.Price}</h3>

              <span className="discount">
                -%{post.post.discountPercentage} OFF!
              </span>
              
              <hr />
              <p>
                {post.post.description}</p>

             
                
            
        </a>
        
    )
}

export default ProductCard