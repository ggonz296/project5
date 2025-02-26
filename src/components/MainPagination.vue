<template>
    <!--This will create buttons at the bottom of the page-->
    <div class="flex justify-center gap-4 p-8">
        <button @click="prevPage" :disable="activePage === 1" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md">PREVIOUS</button>

        <button v-for="page in pages" :key="page" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md" :class="page === activePage ? 'bg-yellow-700': '' ">{{ page }}</button>

        <button @click="nextPage" :disable="activePage === pages" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md">NEXT</button>
    </div>
</template>
<script setup>
    //This is the java logic to navigate between pages
    import { ref } from 'vue'
    const pages = ref(3)
    const activePage = ref(2)

    const prevPage = () => {
        if (activePage.value > 1) {
            activePage.value--
        }
    }

    const nextPage = () => {
        if (activePage.value < pages.value) {
            activePage.value++
        }
        console.log(activePage.value)
    }


</script>