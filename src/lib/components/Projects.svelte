<script lang="ts">
    // file contains code that will display projects
    import { projects } from "$lib/interfaces/projects";
    import type { Project } from "$lib/interfaces/projects";
</script>

<main class="w-full overflow-scroll h-[450px]"  >
    {#each projects as project: Project } 
    <a href={project.link}>
        <div class="relative mb-5">
            <!-- project title -->
            <div class="relative z-10 bg-[#AAAAAA] w-full h-[70px] flex items-center justify-center rounded-2xl text-[#4B4843] font-bold text-[24px]">
                <div>{project.title}</div>
            </div>

            <!-- tag location -->
            <div class="mt-[-24px] z-0 bg-[#878585] h-[80px] w-full rounded-2xl flex items-center justify-cnter text-center">
                <div class="flex mt-10 ml-2 justify-center mb-4">
                        {#each project.tags as tag} 
                            <div class="bg-[{tag.color}] text-[#4B4843] rounded-xl p-[7px] font-bold gap-5 mr-[10px] text-[14px]">{tag.name}</div>
                        {/each}
                </div>
            </div>
        </div>
    </a>

    {/each}
</main>