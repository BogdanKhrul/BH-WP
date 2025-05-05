import css from './AboutMePage.module.scss';
import { TbBrandReact } from 'react-icons/tb';
import { GrProjects } from 'react-icons/gr';

const AboutMePage = () => {
    return (
        <div className={css.screen}>
            <div className={css.decBox}>
                <h2>About Me</h2>
                <h3 className={css.decTxt}>
                    <TbBrandReact className={css.reactIcon} />
                    Transforming ideas into projects
                    <TbBrandReact className={css.reactIcon} />
                </h3>
            </div>
            <div className={css.mainBlock}>
                <div className={css.blockTwo}>
                    <div className={css.wrapper}></div>
                </div>
                <div className={css.blockOne}>
                    <p className={css.nameTxt}>Hello, I'm Bohdan Khrul</p>
                    <p className={css.aboutTxt}>
                        I am a <span>Full-Stack Web Developer</span> who has been developing for two years and I turn
                        ideas into working solutions. I work on both <span>Frontend</span> and <span>Backend</span>,
                        creating simple and effective applications. My approach is quality code, attention to detail and
                        striving for perfection in every project. I don’t just write code, I solve problems. If you are
                        looking for a developer who is not afraid of new challenges - I am your man.
                    </p>
                    <div className={css.btnBox}>
                        <a className={css.btnOne} href="">
                            Download CV
                        </a>
                        <a className={css.btnTwo} href="">
                            <GrProjects className={css.projectsIcon} />
                            My Projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;
