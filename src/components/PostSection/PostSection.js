import {Wrapper, Heading, PostForm, Button} from "./PostSectionElements"

const PostSection = () => {
    return <Wrapper>
        <Heading>Pedir Cambio</Heading>
            <PostForm>
                <input placeholder="Fecha"/>
                <Button>Solicitar Cambio</Button>
            </PostForm>
            <Button></Button>
            
    </Wrapper>
}

export default PostSection;