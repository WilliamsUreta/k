import { Card } from 'react-bootstrap';
import Button from '../atoms/Buttons';
import CardBody from '../molecules/CardsBody';
import { useNavigate } from 'react-router-dom';

function NoticiasCard({ noticias }) {
    const navigate = useNavigate();

    return(
        <Card style={{ width: '18rem', height: '13rem'}} className='m-2 p-1 bg-dark text-white'>
            <Card.Body>
                <CardBody
                    title = {noticias.title}
                    fecha= {noticias.fecha}
                    description = {noticias.description}
                />
                <Button variant = "link">
                    Ver Proyecto
                </Button>
            </Card.Body>
        </Card>
    );
}

export default NoticiasCard;