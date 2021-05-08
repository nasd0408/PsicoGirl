
const ImageTextCard = ({ payload }) => {
    return (
        <div>

            <div className="card">
                <img src={payload.img} alt="" className="card-img"
                    style={{ width: payload.width, height: payload.height }} />
                <div className="card-text">
                    <h1>{payload.title}</h1>
                    <h3>{payload.subtitle} </h3>
                    <p>{payload.parrafo}</p>
                    
                </div>
                {payload.buttons ? <div className="social-buttons">
                        <a className="btn-social" href="https://whatsapp.me" targer="__blank">
                            <i className="fa fa-instagram " ></i></a>
                        <a className="btn-social" href="https://whatsapp.me" targer="__blank">
                            <i className="fa fa-whatsapp " ></i></a>
                        <a className="btn-social" href="https://facebook.me" targer="__blank">
                            <i className="fa fa-facebook " ></i></a>
                        <a className="btn-social" href="https://twitter.me" targer="__blank">
                            <i className="fa fa-twitter " ></i></a>
                    </div>
                        : <p className="social-buttons">{payload.extra}</p>}
            </div>
        </div>
    )
}

export default ImageTextCard
