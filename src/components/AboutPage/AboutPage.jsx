import css from './AboutPage.module.scss';

const AboutPage = () => {
    return (
        <div className={css.screen}>
            <div className={css.block}>
                <div className={css.navBar}>
                    <div className={css.child}>About Me</div>
                    <div className={css.child}>Skills</div>
                    <div className={css.child}>Contacts</div>
                    <div className={css.child}>Web Sites</div>
                    <div className={css.child}>Others</div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
