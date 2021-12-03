<template>
  <div class="main">
    <h1>My account</h1>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-4">
          <img src="@/assets/img/300x200.jpg" class="card-img img-fluid" />
        </div>
        <div class="col-8 text-left">
            <div class="card-body">
                <p>User name: {{claims.name}}</p>
                <p>Email: {{claims.email}}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myaccount",
  data: function() {
    return {
      claims: {}
    };
  },
  created() { this.init(); },
  methods: {
    async init() {
      if (this.authState && this.authState.isAuthenticated) {
        this.claims = await this.$auth.getUser();
      }
    }
  }
};
</script>
