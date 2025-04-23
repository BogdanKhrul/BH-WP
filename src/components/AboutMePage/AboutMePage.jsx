import css from './AboutMePage.module.scss';

const AboutMePage = () => {
    return (
        <div className={css.screen}>
            <h2>About Me</h2>
            <h3>Transforming ideas into projects</h3>
            <div className={css.blockOne}>
                <p>Hello, I'm Bohdan Khrul</p>
                <p>
                    I am a Full-Stack Web Developer who has been developing for two years and I turn ideas into working
                    solutions. I work on both Frontend and Backend, creating simple and effective applications. My
                    approach is quality code, attention to detail and striving for perfection in every project. I don’t
                    just write code, I solve problems. If you are looking for a developer who is not afraid of new
                    challenges - I am your man.
                </p>
                <div>
                    <a href="">Download CV</a>
                    <a href="">My Projects</a>
                </div>
            </div>
            <div className={css.blockTwo}></div>
        </div>
    );
};

export default AboutMePage;
