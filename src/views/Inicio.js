import {ImageTextCard} from '../components'

const personal = 
{title: "Lcda. Michelle Chirinos",
subtitle:"Psicologa",
parrafo:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure cumque debitis similique officia earum in quas excepturi quia,cupiditate neque inventore facere quae tenetur eveniet sed a ipsam quod atque!",
img:"/assets/Michelle.jpg",
width:'200px'}

const social = {
    title:"Puedes seguirme en todas las redes sociales",
    parrafo:"Donde podras encontrar mucho contenido relacionado al bienestar mental Ademas donde podras encontrar muchos recursos de utilidad y muchas otras cosas",
    subtitle:"",
    img:"/assets/logo.png",
    buttons:true,
    width:'200px',
    height:'230px'
}

const Inicio = () => {
    
    return (
        <div className="inicio">
            <ImageTextCard payload={personal}/>
            <ImageTextCard payload ={social}/>
            <div className="ubicacion ">
                <h1>Citas en persona</h1>
                <p >Puedes pedir tu cita para tratarte en persona.
                Para pedir tu cita presencial debes notificar con antelacion por cualquiera de los medios de comunicacion ofrecidos. 
                Se deben cumplir las normas de bio seguridad establecidas</p>
                <ul>
                    <li>Llevar tapabocas</li>
                    <li>Desinfectarse las manos antes de entrar a las instalaciones</li>
                    <li>Cumplir el chequeo de temperatura</li>
                </ul>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13213.853553765239!2d-69.36914456911838!3d10.057876335155283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb35e9567cb3cff5!2sC.C%20Sotavento!5e0!3m2!1ses!2sve!4v1620264520898!5m2!1ses!2sve"
                 width="600" 
                 height="300" 
                 allowFullScreen="" 
                 title="Sotavento"
                 loading="lazy"/>
            </div>
        </div>
    )
}

export default Inicio
