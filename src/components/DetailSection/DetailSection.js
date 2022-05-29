import { Wrapper, Heading, DateText, UsernameText, Container, Button, OfferForm,StyledLink } from "./DetailSectionElements";
import {Link} from "react-router-dom"
const DetailSection = () => {
    
    return (
        <Wrapper>
            <Container>
                <Heading>Detalles</Heading>
                <DateText>{`Fecha: 29/05/2022, 02:44 `}</DateText>
                <UsernameText>{`Solicita: pablo `}</UsernameText>
                <OfferForm>
                    <input placeholder="Fecha"/>
                    <Button>
                        <StyledLink to={"/"}>
                        Hacer Oferta
                        </StyledLink>
                        </Button>
                </OfferForm>
            </Container>

        </Wrapper>
    )
}

export default DetailSection;