import {Bar, SidebarItem, userContainer, userImage, DateText} from "./SidebarElements"


export const Sidebar = () => {
    return (
    <Bar>
        <userContainer>
        <DateText>User</DateText>
            
        </userContainer>
        <SidebarItem to={"/"}>Tickets</SidebarItem>
        <SidebarItem to={"/swap"}>Cambiar</SidebarItem>
        <SidebarItem to={"/mytickets"}>Mis Tickets</SidebarItem>
    </Bar>
    )
}




