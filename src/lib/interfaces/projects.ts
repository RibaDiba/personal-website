// file contains interfaces for projects and info for projects 

const tags: Tag[] = [
    {
        name: "Python",
        color: "#FFEAD1"
    },
    {
        name: "Pytest",
        color: "#FFEAD1"
    },
    {
        name: "MATLAB",
        color: "#FFEAD1"
    }, 
    {
        name: "Raspberry Pi",
        color: "#FFEAD1"
    },
    {
        name: "C++",
        color: "#FFEAD1"
    },
    {
        name: "YOLOv11",
        color: "#FFEAD1"
    },
    {
        name: "PlatformIO",
        color: "#FFEAD1"
    },
    {
        name: "Arduino",
        color: "#FFEAD1"
    },
    {
        name: "ESP32",
        color: "#FFEAD1"
    },
    {
        name: "Onshape",
        color: "#FFEAD1"
    },
    {
        name: "Sveltekit",
        color: "#FFEAD1"
    }, 
    {
        name: "Vercel",
        color: "#FFEAD1"
    }
]

export const projects: Project[] = [
    {
        title: "Tumor Instance Segmentation",
        link: "https://github.com/RibaDiba/tumor-segmentation",
        tags: tags.slice(0, 3)
    }, 
    {
        title: "Raspberry PI Car",
        link: "https://github.com/RibaDiba/pi-electric-car",
        tags: tags.slice(3, 6)
    },
    {
        title: "Background Display System",
        link: "https://github.com/RibaDiba/Background-Display-System-Arduino",
        tags: [tags[4], ...tags.slice(7, 9)]
    },
    {
        title: "Science Olympiad: Robot Tour",
        link: "https://github.com/RibaDiba/robot-tour",
        tags: [tags[4], ...tags.slice(7,9)]
    },
    {
        title: "Science Olympiad: Electric Vehicle",
        link: "https://github.com/RibaDiba/electric-vehicle",
        tags: [tags[4], ...tags.slice(7, 10)]
    },
    {
        title: "Web Blog: Molecular Insights",
        link: "https://molecularinsights.org/",
        tags: tags.slice(10, 12)
    }

]

export interface Project {
    link: string,
    title: string, 
    tags: Tag[]
}

export interface Tag {
    color: string, 
    name: string
}