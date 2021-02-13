<template>
 <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">  <NuxtLink to="/" class="text-link">Safelink</NuxtLink> <span class="badge bg-secondary small-text">alpha</span> </h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
         <NuxtLink to="/" class="nav-link">Create Link</NuxtLink>
         <NuxtLink to="/tentang" class="nav-link">How it Works?</NuxtLink>
         <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
         <NuxtLink to="/login" class="nav-link outline-btn">Login</NuxtLink>
         <!-- solusi link aktif tapi error di isRouteActive
           aria-current="page" :class="{'active': isRouteActive }" exact-active-class="active"
           -->
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
.outline-btn{
    border: 3px solid #8d8e90 !important;;
    padding-left: 15px !important;
    padding-right: 15px !important;
}

/* .outline-btn:hover{
    border-color: #fff !important;
    color:#fff;
} */

.active{
   border-color: #fff !important;
}

.small-text{
  font-size:10px;
  margin-top:-10px

}
</style>
