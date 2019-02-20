<template>
    <div>
        <Navbar/>
         <section class="section">
            <div>
               <Content/>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar,
    }
}
</script>
