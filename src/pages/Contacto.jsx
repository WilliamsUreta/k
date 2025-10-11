import '../styles/Contacto.css';
import { Validacion } from '../components/molecules/Validacion';

function Contacto() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, email, message });
    };

    return (
        <div className="text-center text-white" id='Contacto'>
            <h2 className="text-center"> Contacto </h2>
            <from>
                <p>Nombre:</p>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <p>Correo:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>Mensaje:</p>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="btn btn-primary">Enviar</button>
            <Validacion />
            </from>
        </div>
    );
}

export default Contacto;