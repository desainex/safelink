<template>
 <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">  <NuxtLink to="/" class="text-link">Safelink</NuxtLink></h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
         <NuxtLink to="/" class="nav-link">Home</NuxtLink>
         <NuxtLink to="/tentang" class="nav-link">About</NuxtLink>
         <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
         <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>

        <!-- aria-current="page" :class="{'active': isRouteActive }" exact-active-class="active" -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style>
.text-link{
  color:#fff;
  text-decoration: none;
}
.text-link:hover{
  color:antiquewhite;
}
</style>
