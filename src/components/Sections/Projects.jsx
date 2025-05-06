import { useState } from 'react';
import css from './SCSS/Projects.module.scss';

const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        image: '/images/portfolio.png',
        stack: ['React', 'SCSS', 'EmailJS'],
        description: 'A personal portfolio website to showcase my skills and projects.',
    },
    {
        id: 2,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 3,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 4,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 5,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 6,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 7,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 8,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 9,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 10,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 11,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 12,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 13,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
    {
        id: 14,
        title: 'Task Manager App',
        image: '/images/taskmanager.png',
        stack: ['React', 'Node.js', 'MongoDB'],
        description: 'A full-stack task management application.',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className={css.container}>
            {selectedProject ? (
                <div className={css.projectView}>
                    <button className={css.backBtn} onClick={() => setSelectedProject(null)}>
                        ← Back
                    </button>
                    <img src={selectedProject.image} alt={selectedProject.title} className={css.image} />
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                    <div className={css.stack}>
                        {selectedProject.stack.map((tech, i) => (
                            <span key={i}>{tech}</span>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className={css.projectList}>
                        {projects.map(project => (
                            <div key={project.id} className={css.card} onClick={() => setSelectedProject(project)}>
                                {/* <img src={project.image} alt={project.title} /> */}
                                <h3>{project.title}</h3>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;
