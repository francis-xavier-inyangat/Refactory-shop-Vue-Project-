<template>
    <div>
        <HomeSection/>
        <ProgramsSection/>
        <CoursesSection/>
        <StaffSection/>
        <AlumniSection/>
    </div>
</template>

<script>
import ProgramsSection from './ProgramsSection.vue'
import CoursesSection from './CoursesSection.vue'
import StaffSection from './StaffSection.vue'
import AlumniSection from './AlumniSection.vue'
import HomeSection from './HomeSection.vue'

export default {
    name : 'BodySection',
    data(){},
    methods:{},
    components:{
        ProgramsSection,
        CoursesSection,
        StaffSection,
        AlumniSection,
        HomeSection
        }
}
</script>

<style>

</style>
