import { useState } from "react";

function Validacion() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.includes('@')) {
            setError('Por favor, ingresa un correo válido.');
        } else {
            setError('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => 
                setEmail(e.target.value)} placeholder="Ingresa tu correo" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Validar</button>
        </form>
    )
}