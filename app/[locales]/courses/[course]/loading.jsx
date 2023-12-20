const Loading = () => {
    
    return(

        <div className="skeleton-container">
        <article style={{
            marginTop:"5rem"
        }} key={0} className="skeleton-card">
        <div className="skeleton skeleton-card-img">
        </div>
        <div className="skeleton-card-text">
          <h2 className="skeleton skeleton-card-title"></h2>
          <h4 className="skeleton skeleton-card-brand"></h4>
          <p className="skeleton skeleton-card-description"></p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px 0" }}>
            <p className="skeleton skeleton-card-price"></p>
            <p className="skeleton skeleton-card-rating"></p>
          </div>
        </div>
      </article>
      </div>

    )
}

export default Loading;