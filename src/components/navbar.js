import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, MenuItem, Menu, Link, Tooltip } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import PhoneIcon from '@material-ui/icons/Phone';
import MoreIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import Resume from '../assets/ErikHuynhResume.pdf'
import AlertDialog from './dialog'



const useStyles = makeStyles((theme) => ({
    box: {
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    button: {
        color: '#fff',
        "&:hover": {
            backgroundColor: "transparent",
            color: '#fff'
        }
    }
}));

export default function NavBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link
                href='https://github.com/E-Huynh'
                target="_blank"
                color={'inherit'}
            >
                <MenuItem>
                    <IconButton
                        aria-label="Repository"
                        disableRipple
                    >
                        <GitHubIcon />
                    </IconButton>
                    <p>Github</p>
                </MenuItem>
            </Link>
            <Link
                href='https://www.linkedin.com/in/erik-huynh-228321196'
                target="_blank"
                color={'inherit'}
            >
                <MenuItem>
                    <IconButton
                        aria-label="Repository"
                        disableRipple
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <p>LinkedIn</p>
                </MenuItem>
            </Link>
            <Link
                target="_blank"
                color={'inherit'}
                href={Resume}
            >
                <MenuItem >
                    <IconButton
                        aria-label="Repository"
                        disableRipple
                    >
                        <InsertDriveFileOutlinedIcon />
                    </IconButton>
                    <p>Resume</p>
                </MenuItem>
            </Link>
            <Link
                href="tel:801-699-3049"
                target="_blank"
                color={'inherit'}
            >
                <MenuItem>
                    <IconButton
                        aria-label="Repository"
                        disableRipple
                    >
                        <PhoneIcon />
                    </IconButton>
                    <p> 801-699-3049</p>
                </MenuItem>
            </Link>
            <Link
                href="mailto:Erik.W.Huynh@gmail.com"
                target="_blank"
                color={'inherit'}
            >
                <MenuItem>
                    <IconButton
                        aria-label="Repository"
                        disableRipple
                    >
                        <MailIcon />
                    </IconButton>
                    <p> Erik.W.Huynh@Gmail.com</p>
                </MenuItem>
            </Link>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar className={classes.nav} position={'fixed'}>
                <Toolbar className={classes.box}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Portfolio-gram
                        </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.sectionDesktop}>
                        <Tooltip title='Github'>
                            <IconButton
                                aria-label="Repository"
                                className={classes.button}
                                disableRipple
                                size='small'
                            >
                                <Link
                                    href='https://github.com/E-Huynh'
                                    target="_blank"
                                    color={'inherit'}
                                >
                                    <GitHubIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='LinkedIn'>
                            <IconButton
                                aria-label="Repository"
                                className={classes.button}
                                disableRipple
                                size='small'
                            >
                                <Link
                                    href='https://www.linkedin.com/in/erik-huynh-228321196'
                                    target="_blank"
                                    color={'inherit'}
                                >
                                    <LinkedInIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Resume'>
                            <IconButton
                                aria-label="Repository"
                                className={classes.button}
                                disableRipple
                                size='small'
                            >
                                <Link
                                    // href={data.linkedin}
                                    target="_blank"
                                    color={'inherit'}
                                    href={Resume}
                                >
                                    <InsertDriveFileOutlinedIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Email'>
                            <IconButton
                                aria-label="Repository"
                                className={classes.button}
                                disableRipple
                                size='small'
                            >
                                <Link
                                    target="_blank"
                                    color={'inherit'}
                                    href='mailto:Erik.W.Huynh@gmail.com'
                                >
                                    <MailIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Contact me">
                            <IconButton
                                aria-label="Repository"
                                className={classes.button}
                                disableRipple
                                size='small'
                            >
                                <Link
                                    // href={data.linkedin}
                                    target="_blank"
                                    color={'inherit'}
                                >
                                    <AlertDialog />
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}
