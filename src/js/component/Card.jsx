import React from "react";
const Card = () => {
  return (
    <>
      <div className="row">
        <div className="card col-3" style={{ width: "18rem;" }}>
          <img src="https://picsum.photos/500/325?random=2" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          <div className="card-body">
            <button class="btn btn-primary btn-outline">Encuentra mas</button>

          </div>
        </div>
        <div className="card col-3" style={{ width: "18rem;" }}>
          <img src="https://picsum.photos/500/325?random=1" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          <div className="card-body">
            <button class="btn btn-primary btn-outline">Encuentra mas</button>

          </div>
        </div>
        <div className="card col-3" style={{ width: "18rem;" }}>
          <img src="https://picsum.photos/500/325?random=3" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          <div className="card-body">
            <button class="btn btn-primary btn-outline">Encuentra mas</button>

          </div>

        </div>

        <div className="card col-3" style={{ width: "18rem;" }}>
          <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          <div className="card-body">
            <button class="btn btn-primary btn-outline">Encuentra mas</button>

          </div>
        </div>

      </div>
    </>
  )
}


export default Card;