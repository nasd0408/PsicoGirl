import { Carousel } from '3d-react-carousal';
import {ImageTextCard} from '../components';

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

const diario = {
    title:"Escribe un diario",
    parrafo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure blanditiis reprehenderit aperiam, nostrum laboriosam? Consequuntur molestiae quas iure vero tenetur autem ab blanditiis voluptatibus et asperiores! Molestiae suscipit ducimus, optio possimus perferendis omnis non dignissimos tempore sequi officiis sint.",
    subtitle:"Es parte de hablar contigo mismo",
    img:"https://picsum.photos/800/305/?random",
    buttons:false,
    width:'800px',
    height:'304px'
}
const entrena = {
    title:"Mantente en forma",
    parrafo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure blanditiis reprehenderit aperiam, nostrum laboriosam? Consequuntur molestiae quas iure vero tenetur autem ab blanditiis voluptatibus et asperiores! Molestiae suscipit ducimus, optio possimus perferendis omnis non dignissimos tempore sequi officiis sint.",
    subtitle:"La salud fisica es mas importante de lo que crees",
    img:"/assets/EYES.jpg",
    buttons:false,
    width:'800px',
    height:'304px'
}
const Consejos = () => {

    const slides = slidesData.map((slide) => {
        return  (
        <div className="consejo-slide" >
            <img src={slide.imagen} alt="1" />
            <h1> {slide.titulo}</h1>
            <p>{slide.parrafo}</p>
        </div>
        )
    })
    
    return (
        <div className="consejos">
            <h1>Cuida tu salud mental</h1>
            <p>Es una de las partes mas importantes
            de tu bienestar
            </p>
            <Carousel slides={slides} autoplay={false} />

            <div className="actividades">
                <h1>Donde empezar?</h1>
                <p>Te facilitare una lista de actividades para empezar a tomar las riendas de tu salud mental</p>
                <ImageTextCard payload={diario}/>
                <ImageTextCard payload={entrena}/>
                                
            </div>
        </div>
    )
}

export default Consejos
