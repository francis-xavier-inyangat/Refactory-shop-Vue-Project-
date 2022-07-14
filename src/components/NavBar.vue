<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!--use the global router-link to create clickable links  -->
          <router-link to='/'>
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/programs'>
            <a class="nav-link" href="#">Programs</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/courses'>
            <a class="nav-link" href="#">Courses</a>
          </router-link>
        </li>
         <li class="nav-item">
          <router-link to='/alumni'>
            <a class="nav-link" href="#">Alumni</a>
          </router-link>
        </li>
         <li class="nav-item">
          <router-link to='/staff'>
            <a class="nav-link" href="#">Staff</a>
          </router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    data(){},
    
    name:"NavBar"
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>