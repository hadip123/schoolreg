// LoginPage.vue

<template>

  <div  class="form-body">
    <div class="row">
      <div class="form-holder">
        <div class="form-content">
          <div class="form-items">
            <h3 style="text-align: center;">Login </h3>
<br>
            <form >
              <input 
                v-model="email" 
                type="email" 
                class="form-control" 
                placeholder="Username"
                required
              >
<br>
              <input 
                v-model="password"
                type="password" 
                class="form-control" 
                placeholder="Password" 
                required
              >
              
              <div class="form-button">
                <br>
                <button class="ibtn btn btn-primary">Login</button> 
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '' 
    }
  }
}
</script>

<style scoped>

.form-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('./assets/back.jpg');
  background-repeat: no-repeat; 
   background-size: cover;
    background-attachment: fixed;
    -webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
}

.form-holder {   
  width: 550px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0,0,0,0.2); 
}

.form-content {
  padding: 40px;
}

/* Form styles */

</style>