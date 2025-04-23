import css from './SCSS/Projects.module.scss';

const Projects = () => {
    return (
        <div className={css.box}>
            <h2 className={css.mainTxt}>Hi, I'm Bohdan Khrul.</h2>
            <p className={css.aboutTxt}>
                I am a <span className={css.span}>Full-Stack Web Developer</span> who turns ideas into working
                solutions. I work on both frontend and backend, creating simple and effective applications. My approach
                is quality code, attention to detail and striving for perfection in every project. I don’t just write
                code, I solve problems. If you are looking for a developer who is not afraid of new challenges - I am
                your man.
            </p>
            <h2 className={css.stackTxt}>My Stack:</h2>
            <div className={css.iconBox}></div>
        </div>
    );
};

export default Projects;
