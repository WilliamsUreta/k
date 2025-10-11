import Text from "../atoms/Text";

function CardsBody({ title, fecha ,description}) {
    return (
        <>
            <Text variant="h5">{title}</Text>
            <Text variant="p">{fecha}</Text>
            <Text variant="p">{description}</Text>
        </>
    );
}

export default CardsBody;