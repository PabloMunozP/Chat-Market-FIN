import { Wrapper, Heading, DateText, UsernameText, Container, Button, OfferForm } from "./DetailSectionElements";

const DetailSection = () => {
    return (
        <Wrapper>
            <Container>
                <Heading>Detalles</Heading>
                <DateText>{`Fecha:`}</DateText>
                <UsernameText>{`Solicita:`}</UsernameText>
                <OfferForm>
                    <input placeholder="Fecha"/>
                    <Button>Hacer Oferta</Button>
                </OfferForm>
            </Container>

        </Wrapper>
    )
}

export default DetailSection;