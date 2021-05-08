import { Carousel } from '3d-react-carousal';
const slidesData = [
    {
        imagen: 'https://picsum.photos/800/300/?random',
        titulo: 'Cuidate',
        parrafo: 'Recuerda que eres la persona mas importante de tu vida',
    },
    {
        imagen: 'https://picsum.photos/800/301/?random',
        titulo: 'Amate',
        parrafo: 'Encontrar el amor propio es principal para el bienestar mental',
    },
    {
        imagen: 'https://picsum.photos/800/302/?random',
        titulo: 'Medita',
        parrafo: 'Habla con la persona mas cercana que tienes, Tú',
    },
    {
        imagen: 'https://picsum.photos/800/303/?random',
        titulo: 'Mantente activo',
        parrafo: 'La actividad fisica juega un rol muy importante en la salud mental',
    },
    {
        imagen: 'https://picsum.photos/800/304/?random',
        titulo: 'Lorem.',
        parrafo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, aliquid?',
    },
]

let slides = [
    <img  src="https://picsum.photos/500/500/?random" alt="1" />,
    <img  src="https://picsum.photos/500/501/?random" alt="2" />  ,
    <img  src="https://picsum.photos/500/503/?random" alt="3" />  ,
    <img  src="https://picsum.photos/500/504/?random" alt="4" />  ,
    <img src="https://picsum.photos/500/505/?random" alt="5" />   ];

    const slidesInsta = slidesData.map((slide) => {
        return  (
        <div className="consejo-slide" >
            <img src={slide.imagen} alt="1" />
            <h1> {slide.titulo}</h1>
            <p>{slide.parrafo}</p>
        </div>
        )
    })
const Galeria = () => {
    return (

        <div>
            <h1>Imagenes para reflexionar</h1>
            <Carousel slides={slides} autoplay={true} interval={3000}/>
            <h1>Imagenes de mis redes sociales</h1>
            <Carousel slides={slidesInsta} autoplay={true} interval={5000}/>
        </div>
    )
}

export default Galeria
