import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import css from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={css.screen}>
            <div className={css.screenBox}>
                <div className={css.mainWebContainer}>
                    <div className={css.navBar}>
                        <div className={css.txtName}>Bohdan Khrul</div>
                        <div className={css.menuIcon}>
                            <IoMenu />
                        </div>
                        <div>
                            <nav className={css.navLinks}>
                                <a className={css.navLink} href="">
                                    About Me
                                </a>
                                <a className={css.navLink} href="">
                                    Projects
                                </a>
                                <a className={css.navLink} href="">
                                    Skills
                                </a>
                                <a className={css.navLink} href="">
                                    Contacts
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={css.mainInfoBlock}>
                    <h1 className={css.txtFirInfo}>
                        Hi, I'm a <span>Full Stack Web Developer.</span>
                    </h1>
                    <h3 className={css.txtSecInfo}>
                        Experienced Full-Stack Web Developer, developing innovative projects using cutting-edge
                        technologies. Constantly improving skills to achieve outstanding results. Open to new
                        acquaintances and promising opportunities.
                    </h3>
                    <div className={css.btnBox}>
                        <button className={css.firstBtn}>
                            Projects
                            <span>
                                <FaArrowRightFromBracket className={css.btnIcon} />
                            </span>
                        </button>
                        <button>Contacts</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

