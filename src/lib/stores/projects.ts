// this is a writable file that stores a global boolean
import { writable } from "svelte/store";


const isProjects = writable(false);

function createIsProjects() { 
    const { subscribe, set, update } = writable<boolean>(false);

    function toggleProject() {
        update(val => val = !val);
    }

    return {subscribe, set, update, toggleProject}
}

export default createIsProjects;