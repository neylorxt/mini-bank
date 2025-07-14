import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className={" border-grey-300 border-t-2 bg-white dark:bg-gray-900"}>
            <Container className={"flex justify-between items-center py-5"}>
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/B-logo-1.png" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mini-Bank</span>
                </Link>
                <Group gap={0} className={""} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter size={18} stroke={1.5} className={"hover:text-blue-500"} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube size={18} stroke={1.5} className={"hover:text-red-500"} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram size={18} stroke={1.5} className={"hover:text-red-500"} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}