import { useState } from 'react';
import {
    IconGauge,
    IconHome2,
    IconLogout,
    IconSettings,
    IconSwitchHorizontal,
    IconUser,
} from '@tabler/icons-react';
import { Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import {useAuth} from "@/GlobalComponents/AuthProvider.jsx";

function NavbarLink({ icon: Icon, label, active, onClick, clickOnIcon }) {

    return (
       <div className={` ${(active === true || clickOnIcon?.toLowerCase() === label.toLowerCase() )? 'text-blue-500 dark:text-blue-500' : 'text-black dark:text-white'}`}>
           <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} >
               <UnstyledButton
                   onClick={onClick}
                   className={`w-[50px] h-[50px] rounded-md flex items-center justify-center 
                      ${
                           active
                               ? 'bg-blue-100 text-blue-600 '
                               : 'text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                       }`}
                   >
                   <Icon size={20} stroke={1.5} />
               </UnstyledButton>
           </Tooltip>
       </div>
    );
}


const mockdata = [
    { icon: IconHome2, label: 'Home'},
    { icon: IconGauge, label: 'Dashboard' },
    { icon: IconSwitchHorizontal, label: 'Transfer'},
    { icon: IconSettings, label: 'Settings'},
];


export default function SidebarDashboard({clickOnIcon, setClickOnIcon}) {
    const [active, setActive] = useState(false);
    const {logout} = useAuth();

    const links = mockdata.map((link, index) => (
        <NavbarLink
            key={link.label}
            icon={link.icon}
            label={link.label}
            active={index === active}
            onClick={() => {
                setActive(index);
                setClickOnIcon(link.label);
            }}
            clickOnIcon={clickOnIcon}
        />
    ));

    return (
        <nav className="w-[80px] h-screen p-4 flex flex-col border-r border-gray-300
        dark:border-gray-700 ">
            <Center>
                <MantineLogo type="mark" size={30} />
            </Center>

            <div className="flex-1 mt-12 text-white">
                <Stack justify="center " gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="cente text-white" gap={0}>
                <NavbarLink
                    icon={IconUser}
                    label="Account"
                    active={false}
                    clickOnIcon={clickOnIcon} onClick={() => {
                        setActive(false);
                        setClickOnIcon("Account");
                    }} />
                <NavbarLink
                    icon={IconLogout}
                    label="Logout" active={false}
                    clickOnIcon={clickOnIcon} onClick={() => {
                        logout();
                    }}
                />
            </Stack>
        </nav>
    );
}
