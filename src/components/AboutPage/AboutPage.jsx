import { useState } from 'react';
import css from './AboutPage.module.scss';
import Projects from '../Sections/Projects';
import MyStack from '../Sections/MyStack';
import Certificates from '../Sections/Certificates';
import { IoMdInformationCircle } from 'react-icons/io';

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState('Projects');

    const renderSection = () => {
        switch (activeSection) {
            case 'Projects':
                return <Projects />;
            case 'MyStack':
                return <MyStack />;
            case 'Certificates':
                return <Certificates />;
            default:
                return null;
        }
    };

    return (
        <div className={css.screen}>
            <h2>Information</h2>
            <h3 className={css.decTxt}>
                <IoMdInformationCircle className={css.reactIcon} />
                Here you can find out more about me
                <IoMdInformationCircle className={css.reactIcon} />
            </h3>
            <div className={css.block}>
                <div className={css.navBar}>
                    {['Projects', 'MyStack', 'Certificates'].map(section => (
                        <div
                            key={section}
                            className={`${css.child} ${activeSection === section ? css.active : ''}`}
                            onClick={() => setActiveSection(section)}
                        >
                            {section.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                    ))}
                </div>
                <div className={css.sectionContent}>{renderSection()}</div>
            </div>
        </div>
    );
};

export default AboutPage;
