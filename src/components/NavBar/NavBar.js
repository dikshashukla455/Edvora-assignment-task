import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import { useStore } from '../../Context/Store';


export const NavBar = () => {

    // style classes
    const { logo, avatar, name, row, main_nav } = styles;
    const { user } = useStore();
    
    return (
        <nav className = { main_nav } >
            <div className = "container">
                <div className = { row }>
                    
                    <div className = { logo } >
                        <img src = { Logo } alt = "logo" />
                    </div>


                    {
                        <div className = { row }>
                            <p className = { name } >{ user.name }</p>

                            <div className = { avatar } >
                                <img src = { user.profile_key } alt = "avatar" />
                            </div>
                        </div>
                    }


                </div>
            </div>
        </nav>
    );
};