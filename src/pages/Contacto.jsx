import '../styles/Contacto.css';

function Contacto() {

    return (
        <div className="text-center text-white" id='Contacto'>
            <h2 className="text-center"> Contacto </h2>
            <from>
                <p>Nombre:</p>
                
                <p>Correo:</p>
                
                <p>Mensaje:</p>
                
            <button className="btn btn-primary">Enviar</button>
            
            </from>
        </div>
    );
}

export default Contacto;