export interface Project {
    projectTitle: string, 
    projectFrontImage: string, 
    projectDescription?: string, 
    projectImages?: string[]
}

export const projects: Project[] = [
    {
        projectTitle: "Raspberry Pi Rideable Car",
        projectFrontImage: "/ProjectImages/Pi_Car_Cover.png"
    },
    {
        projectTitle: "Leastudo",
        projectFrontImage: "/ProjectImages/Leastudo_Cover.png"
    },
    {
        projectTitle: "Background Display System",
        projectFrontImage: "/ProjectImages/BDS_Cover.png"
    },
    {
        projectTitle: "Expandable Shield",
        projectFrontImage: "/ProjectImages/Shield_Cover.png"
    },
    {
        projectTitle: "Robot Tour",
        projectFrontImage: "ProjectImages/Robot_Tour_Cover.png"
    },
    {
        projectTitle: "Electric Vehicle",
        projectFrontImage: "/ProjectImages/EV Model.png"
    }
];