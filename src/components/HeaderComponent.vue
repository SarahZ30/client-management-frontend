<template>
  <div>
    <v-app-bar color="primary">
      <div class="pl-2">
        <span>Client Management</span>
      </div>

      <v-spacer></v-spacer>

      <!-- navigation buttons -->
      <v-btn style="text-transform: capitalize" to="/clients">
        All Clients
      </v-btn>

      <v-btn style="text-transform: capitalize" to="/add_clients">
        Add Client
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>