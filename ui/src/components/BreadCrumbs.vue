<template>
    <div class="q-pa-md">
        <q-breadcrumbs>
        <q-breadcrumbs-el :label="$t('mainContext.home')" icon="home" to="/"/>
        <q-breadcrumbs-el :label="$t(`functionMenu.${param}`)" />
        </q-breadcrumbs>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    name: "BreadCrumbs",
    setup () {
        const param = ref('')
        return {param}
    },
    created() {
        const path = window.location.hash
        console.log("location =", window.location)
        this.param = path.substring(path.lastIndexOf("/") + 1)
        
    }
}
</script>