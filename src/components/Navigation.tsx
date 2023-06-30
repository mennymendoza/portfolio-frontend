import InfoIcon from '@mui/icons-material/Info';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import BiotechIcon from '@mui/icons-material/Biotech';
import TemporaryDrawer from './Drawer';
import HandymanIcon from '@mui/icons-material/Handyman';
import { DrawerLink } from './Drawer';

const navLinks: DrawerLink[] = [
    {
        text: "About Me",
        icon: <InfoIcon />,
        url: "/about-me"
    },
    {
        text: "Experience",
        icon: <MoreTimeIcon />,
        url: "/experience"
    },
    {
        text: "Research",
        icon: <BiotechIcon />,
        url: "/research"
    },
    {
        text: "Projects",
        icon: <HandymanIcon />,
        url: "/projects"
    }
];

export default function Navigation () {

    return (
        <TemporaryDrawer
                links={navLinks}
            />
    );
}