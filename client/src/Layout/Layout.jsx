
import { SidebarLayout } from "./SidebarLayout"

export const Layout = ({ children }) => {

    return (
        <>
            <SidebarLayout />
            {children}
        </>
    )
}