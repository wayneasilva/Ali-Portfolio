import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-dom';
import MainIcon from '../images/user.svg';
import VideoIcon from '../images/video-camera.svg';
import PhotoIcon from '../images/photo-camera.svg';
import EditingIcon from '../images/premiere.svg';
import ContactIcon from '../images/contact.svg';

const navbar = () => {

    const style = {
        navbar: {
            zIndex: '100',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
            width: '75px',
            backgroundColor: '#3e2c75',
            boxShadow: '2px 0px 2px 1px rgba(0, 0, 0, 0.2)',
        },

        iconDiv: {
            width: '100%'
        },

        icon: {
            width: '100%'
        },

        navItemCluster: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },

        navItem: {
            height: '75px',
            listStyle: 'none',
        },

        navItemIcon: {
            width: '50%'
        },

        endItemDiv: {
            width: '100%',
            height: '75px' //change later
        },

        endItem: {
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
        }
    }

    return (
        <nav style={style.navbar}>
            <div style={style.iconDiv}>
                <Link to="/"><img style={style.icon} src={MainIcon}></img></Link>
            </div>
            <ul style={style.navItemCluster}>
                <Link to="/videography"><li style={style.navItem}><img style={style.navItemIcon} src={VideoIcon}></img></li></Link>
                <Link to="/photography"><li style={style.navItem}><img style={style.navItemIcon} src={PhotoIcon}></img></li></Link>
                <Link to="/editing"><li style={style.navItem}><img style={style.navItemIcon} src={EditingIcon}></img></li></Link>
                <Link to="/contact"><li style={style.navItem}><img style={style.navItemIcon} src={ContactIcon}></img></li></Link>
            </ul>
            <div style={style.endItemDiv}>
                <div style={style.endItem}></div>
            </div>
        </nav>
    )
}

export default Radium(navbar);