import React from "react"



export interface IProject {
    name: string,
    description: string,
    details?: any,
    frameworks: Array<string>,
    link?: string,
}


const projects: Array<IProject> = [
    {
        name: "School Managment System",
        description: "Built a comprehensive school management system to simplify academic, financial, and administrative processes within educational institutions.",
        details: <> As a Full-Stack Developer, I contributed to the development of a school management system by implementing core modules for student records, attendance, grading, and financial management. I played a crucial role in developing the front-end using React, ensuring the UI was intuitive and efficient for administrators, teachers, and students. On the back-end, I worked on integrating database solutions for secure data storage and created APIs for efficient data retrieval. This system enhanced operational efficiency by centralizing school administration and academic processes.
        </>,
       
        frameworks: [ 'React js' ],
       
    },
    {
        name: "Student University Placement Platform",
        description: "reated a platform for student university placements, streamlining the selection process and providing detailed placement options.",
        details: <>In the role of Front-End Developer, I developed and maintained the interface for a student university placement platform. My responsibilities included designing user-friendly pages for university and department selection, implementing features to track placement outcomes, and optimizing the UI to improve user engagement. I also coordinated with stakeholders to refine the placement algorithm, ensuring students could make informed academic choices. The platform significantly simplified university placement by centralizing relevant information and streamlining the application process.</>,
        link: 'https://github.com/samritas/student-University-Placement-.git',
        frameworks: [ 'React js', 'Node js', 'Express' ],
       
    },
    {
        name: "Sign Language Translator Application", 
        description: " Developed a mobile application that translates sign language gestures into text and speech in real time, promoting accessibility for the Deaf community.",
        details: <>As the Lead Front-End Developer, I designed and implemented the user interface and experience for an AI-powered mobile app that translates sign language into text and voice output. My role involved integrating computer vision algorithms, creating a responsive and intuitive UI, and implementing multi-language support. I collaborated closely with the back-end team to ensure seamless real-time gesture recognition and developed educational modules for learning basic sign language, enhancing accessibility and inclusivity.
                    </>,
        frameworks: [ 'React Native' ]
    },
    {
        name: "Financial Services",
        description: "Developed a secure platform for financial services, offering users streamlined access to financial transactions",
        details: <>As a Full-Stack Developer, I built a secure platform for financial services focused on loan management. My role included creating a responsive user interface, implementing features for loan applications and tracking, and integrating secure APIs for data handling, ensuring seamless and secure user interactions with the loan services.</>,
        frameworks: [ 'React js', 'Bootstrap', 'Node js','Express' ]
    },
    

]

export default projects