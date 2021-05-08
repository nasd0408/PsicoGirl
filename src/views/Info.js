import {ImageTextCard} from '../components'

const infoArray =[
    {
        title:"Libros de auto desarrollo",
        parrafo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure blanditiis reprehenderit aperiam, nostrum laboriosam? Consequuntur molestiae quas iure vero tenetur autem ab blanditiis voluptatibus et asperiores! Molestiae suscipit ducimus, optio possimus perferendis omnis non dignissimos tempore sequi officiis sint.",
        subtitle:"Hay infinidades de libros disponibles acerca del tema",
        img:"https://picsum.photos/800/306/?random",
        buttons:false,
        width:'800px',
        height:'304px',
        extra:'Puedo recomendarte libros como "El Psicoanalista", "Sangre en el divan", "Flores para Algernon"'
    },
    {
        title:"Buscar ayuda profesional",
        parrafo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure blanditiis reprehenderit aperiam, nostrum laboriosam? Consequuntur molestiae quas iure vero tenetur autem ab blanditiis voluptatibus et asperiores! Molestiae suscipit ducimus, optio possimus perferendis omnis non dignissimos tempore sequi officiis sint.",
        subtitle:"Programar una cita con un psicologo es la mejor manera de informarte de tu salud mental",
        img:"https://picsum.photos/800/308/?random",
        buttons:false,
        width:'800px',
        height:'304px'
    },
    {
        title:"Mis redes sociales",
        parrafo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure blanditiis reprehenderit aperiam, nostrum laboriosam? Consequuntur molestiae quas iure vero tenetur autem ab blanditiis voluptatibus et asperiores! Molestiae suscipit ducimus, optio possimus perferendis omnis non dignissimos tempore sequi officiis sint.",
        subtitle:"Aqui tendras siempre muchos recursos para leer y motivaciones diarias",
        img:"/assets/EYES.jpg",
        buttons:true,
        width:'800px',
        height:'304px'
    },
    
]


const Info = () => {
    return (
        <div className="info">

            <h1>Recursos de informacion sobre psicologia</h1>
            <div className="recursos">
                {infoArray.map((info)=>{
                    return  <ImageTextCard payload={info} key={info.title}/>
                })}
            </div>
        </div>
    )
}

export default Info
