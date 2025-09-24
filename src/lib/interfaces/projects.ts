import BDS_Sketch from '../assets/project_media/Sketch_BDS.jpg';
import Sketch_Shield from '../assets/project_media/Sketch_Shield.jpg';
import Scioly_Map from '../assets/project_media/Scioly_Map.png';
import Vehicle_Final from '../assets/project_media/Vehicle_Final.jpg';
import EV_Model from '../assets/project_media/EV_Model.png';

export const projects: Project[] = [
    {
        name: "Background Display System",
        github: "https://github.com/RibaDiba/Background-Display-System-Arduino",
        tags: ["Arduino", "C++", "ESP32"],
        desc: [
            "Odyssey of the Mind is a competition where teams of 7 create a theatrical play. I helped with the technical props.",
            "Background Display System (BDS) is a small modular display/control system implemented with Arduino-compatible code. We used a master-slave wireless link between a handheld controller and a microcontroller on the system. Each system is capable of housing and displaying 3 backgrounds and was placed internationally at Odyssey of the Mind.",
            "We made a simple-to-use controller using an ESP32 and keyboard switches. The controller allowed us to change both systems while preserving the state of the previous one.",
            "The image to the left is a sketch of our intial idea around 3-4 months before we started building."
        ],
        media: {
            image: BDS_Sketch,
            video: "https://www.youtube.com/embed/QHsplba29P4?si=Fc9mNlaAtRUxpTHp"
        }
    },
    {
        name: "Raspberry Pi Electric Car",
        github: "https://github.com/RibaDiba/pi-electric-car",
        tags: ["Raspberry Pi", "C++", "Makefile", "YOLO", "Python"],
        desc: [
            "Odyssey of the Mind is a competition where teams of 7 create a theatrical play. I helped with the technical props.",
            "For our play, we are required to have a rideable vehicle. We chose to make a rideable vehicle controlled by Bluetooth inputs from a Joy-Con to a Raspberry Pi. We landed on a 4-wheel differential drive with omnidirectional wheels, allowing us to turn in place and perform maneuvers without physical 'steering'.",
            "Initially, we had all of our movements controlled via a Joy-Con, but then decided, for the story of the play, to add a camera and a lightweight YOLOv11 model to provide computer vision inputs.",
            "(The image to the right shows the car with its decorated components for the play)",
            "Using raw byte data from a source that reverse-engineered a Joy-Con, I was able to create a Bluetooth interface in C++ to efficiently translate Bluetooth data into button and joystick inputs. Versions of this translation exist in Python; however, they were too slow for our computer vision approach.",
            "This allowed us to place internationally in the competition."
        ],
        media: {
            image: Vehicle_Final,
            video: "https://www.youtube.com/embed/HSFzfCUV7-w?si=awXUkm6b-oOku6ft"
        }
    },
    {
        name: "Expandable Shield",
        github: "",
        tags: ["Arduino", "C++", "ESP32"],
        desc: [
            "Odyssey of the Mind is a competition where teams of 7 create a theatrical play. I helped with the technical props.",
            "Created an expandable shield to be used in the Odyssey of the Mind competition. Driven by a motor in the center of the shield, the fins rotate to expand the shield from a smaller size. We used a microcontroller to drive the motor with a button for activation.",
            "Each fin would be connected via a fishing line to ensure everything rotates in order.",
            "This allowed us to place internationally in the competition."
        ],
        media: {
            image: Sketch_Shield,
            video: "https://www.youtube.com/embed/pXhrgKOtZv8?si=rfP4kpuZNOHNAtzj"
        }
    },
    {
        name: "Robot Tour",
        github: "https://github.com/RibaDiba/robot-tour",
        tags: ["Arduino", "C++", "ESP32"],
        desc: [
            "This project is for the 'Robot Tour' event in the Science Olympiad competition. The event requires a small robot to traverse a path through a maze, meeting at certain checkpoints along the way. There are a few extra guidelines to this problem.",
            "The robot must achieve checkpoint locations and do so in a specific order (i.e., A->B->C). The robot has to complete the maze in a specified time (e.g., the robot must complete the maze in 72 seconds). Finally, the robot must reach the target point with accuracy.",
            "We achieved precision with our movements through PID control, which was implemented using a quadrature motor encoder on each wheel. We were able to make accurate turns alongside other movement.",
            "I provided a sample map to the left. We placed 3rd at the state-level competition."
        ],
        media: {
            image: Scioly_Map,
            video: "https://www.youtube.com/embed/5f8AOf_gfC4?si=5gtf_suXkIdrHXYc"
        }
    },
    {
        name: "Electric Vehicle",
        github: "",
        tags: ["Arduino", "C++", "ESP32"],
        desc: [
            "This project is for the 'Electric Vehicle' event in the Science Olympiad competition. The event requires a small robot to reach a specified point between 7 and 10 meters in the fastest time (e.g., 8.24 m).",
            "Using PID control, we achieved a high level of accuracy, and through the bevel-gear motor setup we also achieved speed.",
            "All non-electronic parts (other than tire treads) were designed in onshape and 3D printed.",
            "I provided a screenshot of the onshape file for reference.. We placed 8th at the state-level competition.",
        ],
        media: {
            image: EV_Model,
            video: "https://www.youtube.com/embed/4vl85nk9v38?si=awTH7nTj88DN4e3l"
        }
    }
]

export interface Project {
    name: string, 
    github: string,
    tags: string[],
    desc: string[],
    media: Media
}

export interface Media {
    video: string, 
    image: string
}

export interface Content {
    media?: string, 
    text?: string,
}
