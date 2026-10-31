<template>
  <div class="table_component">
    <v-container>
      <!-- page heading -->
      <div class="page_heading pt-6 pb-4">
        <h2>All Clients</h2>
        <div class="heading_note">
          Service charge, discount and final value are calculated automatically
        </div>
      </div>

      <!-- search by phone number -->
      <v-row>
        <v-col lg="4" md="6" cols="12">
          <v-text-field
            placeholder="Search by Phone Number"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-magnify"
            v-model="search_phone"
            @input="searchClients()"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- client table -->
      <v-skeleton-loader
        :loading="loading"
        type="table-heading, list-item-two-line, table-tfoot"
      >
        <v-card elevation="2" rounded="lg">
          <v-data-table :items="items" :headers="headers">
            <template
              v-for="header in headers"
              :key="header.key"
              v-slot:[`item.${header.key}`]="props"
            >
              <!-- name -->
              <div v-if="header.key === 'name'">
                {{ props.item.name }}
              </div>

              <!-- email -->
              <div v-if="header.key === 'email'">
                {{ props.item.email }}
              </div>

              <!-- phone -->
              <div v-if="header.key === 'phone'">
                {{ props.item.phone }}
              </div>

              <!-- company -->
              <div v-if="header.key === 'company'">
                {{ props.item.company }}
              </div>

              <!-- address -->
              <div v-if="header.key === 'address'">
                {{ props.item.address }}
              </div>

              <!-- project budget -->
              <div v-if="header.key === 'project_budget'">
                {{ props.item.project_budget }}
              </div>

              <!-- service charge -->
              <div v-if="header.key === 'service_charge'">
                {{ props.item.service_charge }}
              </div>

              <!-- discount value -->
              <div v-if="header.key === 'discount_value'">
                {{ props.item.discount_value }}
              </div>

              <!-- final project value -->
              <div v-if="header.key === 'final_project_value'">
                {{ props.item.final_project_value }}
              </div>

              <!-- action -->
              <div v-if="header.key === 'action'" class="action_buttons">
                <v-btn
                  style="text-transform: capitalize"
                  color="success"
                  size="small"
                  class="mr-2"
                  @click="
                    show = true;
                    selectedItem = props.item;
                  "
                >
                  Edit
                </v-btn>

                <v-btn
                  style="text-transform: capitalize"
                  color="error"
                  size="small"
                  @click="deleteClient(props.item.id)"
                >
                  Delete
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-skeleton-loader>
    </v-container>

    <!-- update dialog box -->
    <v-dialog v-model="show" max-width="600px" persistent scrollable="true">
      <v-card rounded="lg">
        <v-card-item>
          <Update :item="selectedItem" @close="closeDialog" />
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import clients from "@/Api/Modules/client";
import { toast } from "@/ApiConstance/toast";
import Update from "@/views/Clients/Components/Update.vue";

export default {
  components: {
    Update,
  },

  data() {
    return {
      selectedItem: {},
      show: false,
      items: [],
      loading: false,
      search_phone: "",
      headers: [
        { title: "Name", key: "name" },
        { title: "Email", key: "email" },
        { title: "Phone", key: "phone" },
        { title: "Company", key: "company" },
        { title: "Address", key: "address" },
        { title: "Project Budget", key: "project_budget" },
        { title: "Service Charge", key: "service_charge" },
        { title: "Discount Value", key: "discount_value" },
        { title: "Final Project Value", key: "final_project_value" },
        { title: "Action", key: "action" },
      ],
    };
  },

  async created() {
    await this.getClients();
  },

  methods: {
    // get all clients
    async getClients() {
      this.loading = true;

      const res = await clients.getClients();
      this.items = res.data.data;

      this.loading = false;
    },

    // search clients by phone number
    async searchClients() {
      const res = await clients.searchByPhone(this.search_phone);
      this.items = res.data.data;
    },

    // delete client
    async deleteClient(id) {
      await clients
        .deleteClient(id)
        .then((res) => {
          toast("SuccessFully Deleted", "success");
          this.getClients();
        })
        .catch((res) => {});
    },

    // close dialog
    async closeDialog(value) {
      this.show = value;

      // get the updated values again
      await this.getClients();
    },
  },
};
</script>