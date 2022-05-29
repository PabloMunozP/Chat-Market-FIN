import {Bar,ItemsWrapper, SidebarItem, userContainer, userImage, DateText, UsernameText} from "./SidebarElements"


export const Sidebar = () => {
    return (
    <Bar>
        <userContainer>
        <UsernameText>Fintual User</UsernameText>
            
        </userContainer>
        
        <SidebarItem to={"/"}>Tickets</SidebarItem>
        <SidebarItem to={"/swap"}>Cambiar</SidebarItem>
        <SidebarItem to={"/mytickets"}>Mis Tickets</SidebarItem>
        
    </Bar>
    )
}




