import { Card } from 'react-bootstrap';
import Image from '../atoms/Images';
import Button from '../atoms/Buttons';
import CardBody from '../molecules/CardsBody';
import { useNavigate } from 'react-router-dom';

function ProyectCard({ proyectos }) {
    const navigate = useNavigate();

    return(
        <Card style={{ width: '18rem' }} className='m-2'>
            <Image src={proyectos.image} alt={proyectos.name} className="card-img-top" />
            <Card.Body>
                <CardBody
                    title = {proyectos.name}
                    description = {proyectos.description}
                />
                <Button variant = "primary" onClick = {() => navigate('#')}>
                    Ver Proyecto
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProyectCard;