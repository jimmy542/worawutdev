<template>
<Nav/>
<br>
  <div class="container mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
    <div class="row">
      <div class="bg-white py-4 sm:py-16">
        <div class="mx-auto max-w-5xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl">
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Exciting activities are coming soon! Worawut is currently working on rewriting them to make them more inspiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: "Activitys",
  components:{
    Nav
  },
  data() {
    return {
     
    }
  },
  
}
</script>

<style>
</style>