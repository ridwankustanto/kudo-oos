<template>
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-btn
                color="primary"
                href="#"
                @click.prevent="login"
                v-if="!activeUser"
                >
                Login
            </v-btn>
            <v-btn
                color="primary"
                href="#"
                @click.prevent="logout"
                v-else
                >
                Logout
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      activeUser: null
    };
  },
  async created() {
    await this.refreshActiveUser();
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    $route: "refreshActiveUser"
  },
  methods: {
    login() {
      this.$auth.loginRedirect();
    },
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser();
    },
    async logout() {
      await this.$auth.logout();
      await this.refreshActiveUser();
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
