import BDS_Sketch from '$lib/assets/project_media/Sketch_BDS.jpg';
import Sketch_Shield from '$lib/assets/project_media/Sketch_Shield.jpg';
import Scioly_Map from '$lib/assets/project_media/Scioly_Map.png';
import Vehicle_Final from '$lib/assets/project_media/Vehicle_Final.jpg';
import EV_Model from '$lib/assets/project_media/EV_Model.png';

export const projects: Project[] = [
    {
        name: "Background Display System",
        github: "https://github.com/RibaDiba/Background-Display-System-Arduino",
        tags: ["Arduino", "C++", "ESP32"],
        desc: [
            "Odyssey of the Mind is a competition where teams of 7 create a theatrical play. I helped with the technical props.",
            "Background Display System (BDS) is a small modular display/control system implemented with Arduino-compatible code. We used a master-slave wireless link between a handheld controller and a microcontroller on the system. Each system is capable of housing and displaying 3 backgrounds and was placed internationally at Odyssey of the Mind.",
            "We made a simple-to-use controller using an ESP32 and keyboard switches. The controller allowed us to change both systems while preserving the state of the previous one.",
            "The image to the left is a sketch of our initial idea around 3-4 months before we started building.",
        ],
        problem: ["We faced two main challenges with this project: aesthetics and reliability.", "Our initial design used four-sided panels, which allowed for more backgrounds but created ugly gaps between them.", "We also used four motors, one for each panel, which increased the chances of something breaking. It was also difficult to get all the panels to turn in sync."],
        solution: ["We simplified our design to prioritize the visual appeal and reliability of the display.", 
            "We switched to three-sided panels, which eliminated the gaps and created a seamless image.",
            "We also used a single motor with a sprocket and chain to turn all the panels at once. This made the system much more reliable and ensured that all the panels turned in sync.", 
            "The takeaway was that sometimes the simplest solution is the best one, and that it's important to consider the overall look and feel of a project, not just its technical features.",
            "Additonally, learning and gaining perspectives from different members of our team allowed us to make a better build. These perspectives, contrary to what we thought, came from artists, and not engineers. "
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
        problem: ["Our car had two main issues: it couldn't turn properly, and the remote control was unreliable.", "We were using a technique called \"differential drive\", where you turn by spinning the wheels on each side at different speeds. But we were using regular rubber wheels, which are not designed for this kind of turning.", "The remote control was also a problem. We were using a wireless chip called an ESP32, but it had a weak connection and would often disconnect from our joycon."],
        solution: ["We learned that we needed to do more research before jumping into a project.", "We found that differential drive requires special wheels called \"omnidirectional\" wheels, which have rollers that allow them to slide sideways. Once we switched to these wheels, the car could turn perfectly.", "We also replaced the ESP32 with a Raspberry Pi, which is a more powerful computer with a much more reliable Bluetooth connection.", "The lesson here was take a step back from building and to actually learn from experts, from people who have solved these problems before rather than brute force an issue."],
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
        problem: ["The main challenge with the shield was making it easy to use.", "The actor using it in the play was not involved in building it, so we had to make sure it was simple and intuitive to operate.", "Our initial design was too complex and required a lot of force to open, which was not practical for a theatrical performance."],
        solution: ["We went back to the drawing board and focused on user-friendliness.", "We redesigned the mechanism to be much smoother and easier to operate, using a simple button to activate the motor.", "This experience taught us the importance of designing for the end user. It's not enough for something to work; it has to be easy and intuitive for the person who will be using it."],
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
        problem: ["The main challenge with these robots was getting them to drive straight.", "Just like a car with misaligned wheels, our robots would drift to one side.", "We knew that a technique called \"PID control\" could solve this problem, but we didn't know how to use it. PID control is a way of using feedback from sensors to make small corrections to the robot's movement, but it involves a complex formula."],
        solution: ["We found the PID formula online and learned how to use it to control our robots.", "This was a lightbulb moment for us. We realized that we didn't have to reinvent the wheel.", "There are a lot of smart people out there who have already solved the problems we were facing.", "The takeaway was that it's important to seek out expert knowledge and to not be afraid to use the work of others."],
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
            "All non-electronic parts (other than tire treads) were designed in Onshape and 3D printed.",
            "I provided a screenshot of the Onshape file for reference. We placed 8th at the state-level competition.",
        ],
        problem: ["The main challenge with this project was cost. We needed to build a vehicle, but the kits were very expensive.", "Our initial plan was to buy a pre-made kit, but we quickly realized that this would be too expensive for our budget.", "This forced us to look for a more creative and cost-effective solution."],
        solution: ["We found our solution by talking to someone with experience in 3D printing.", "They showed us how we could use a 3D printer to create our own parts, which would be much cheaper than buying a kit.", "We used a program called Onshape to design the chassis of the vehicle, and then we 3D printed it ourselves.", "The takeaway was that sometimes the best solution is to think outside the box and to not be afraid to ask for help from people with different areas of expertise."],        media: {
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
    problem: string[],
    solution: string[]
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
