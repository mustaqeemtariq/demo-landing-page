import { NavLink } from "react-router-dom"
import { FolderIcon, PlusIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"

import styles from "./sidebar.module.scss"

interface SidebarProps {
    children: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const navigation = [
        {name: "New", icon: PlusIcon, href: '/'},
        {name: "My timelines", icon: FolderIcon, href: '/timeline'}
    ]
  return (
    <div>
        <div className={clsx(styles.sidebar)}>
        <nav className={clsx(styles.navigation)}>
            {navigation.map(item => 
            <div key={item.name}>
                <NavLink to={item.href} className={({isActive}) => clsx(styles.items, isActive && styles["active"])} >
                {({isActive}) => (
                    <>
                    <item.icon className={clsx(styles.icon, isActive && styles["active"])} />
                    {item.name}
                    </>
                )}
                </NavLink>
            </div>)}
        </nav>
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}
