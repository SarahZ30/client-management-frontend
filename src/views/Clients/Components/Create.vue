<template>
  <div class="form_component">
    <!-- form card -->
    <div class="form_allignment">
      <!-- form component -->
      <v-card elevation="2" rounded="lg" class="form_card">
        <div class="pa-6">
          <!-- form heading -->
          <div class="form_heading">Add Client</div>
          <div class="form_subheading">
            Service charge, discount and final project value are calculated
            automatically once the client is saved
          </div>

          <v-form v-model="disable">
            <v-row>
              <!-- Name -->
              <v-col lg="6" md="6" cols="12">
                <label class="field_label">Name</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Name"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required]"
                  v-model="form.name"
                ></v-text-field>
              </v-col>

              <!-- Email -->
              <v-col lg="6" md="6" cols="12">
                <label class="field_label">Email</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Email"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required, email]"
                  v-model="form.email"
                ></v-text-field>
              </v-col>

              <!-- Phone -->
              <v-col lg="6" md="6" cols="12">
                <label class="field_label">Phone</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Phone"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required, interger]"
                  v-model="form.phone"
                ></v-text-field>
              </v-col>

              <!-- Company -->
              <v-col lg="6" md="6" cols="12">
                <label class="field_label">Company</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Company"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required]"
                  v-model="form.company"
                ></v-text-field>
              </v-col>

              <!-- Address -->
              <v-col lg="12" cols="12">
                <label class="field_label">Address</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Address"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required]"
                  v-model="form.address"
                ></v-text-field>
              </v-col>

              <!-- Number Of Employees -->
              <v-col lg="6" md="6" cols="12">
                <label class="field_label">Number Of Employees</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Number Of Employees"
                  variant="outlined"
                  density="comfortable"
                  :rules="[interger]"
                  v-model="form.no_of_employees"
                ></v-text-field>
              </v-col>

              <!-- Project Budget -->
              <v-col lg="6" md="6" cols="12">
                <label class="field_label">Project Budget</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Project Budget"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required, interger]"
                  v-model="form.project_budget"
                ></v-text-field>
              </v-col>

              <!-- Submit Button -->
              <v-col lg="12" cols="12">
                <v-btn
                  block
                  rounded="lg"
                  size="large"
                  @click="submitForm()"
                  class="form_btn"
                  :disabled="!disable"
                  :loading="loading"
                  ><span class="btn_text">Submit Data</span></v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import clients from "@/Api/Modules/client";
import { toast } from "@/ApiConstance/toast";

export default {
  data() {
    return {
      disable: false,
      // form variables
      loading: false,
      form: {},
    };
  },

  methods: {
    // submit button with two way data binding
    async submitForm() {
      this.loading = true;

      await clients
        .storeClient(this.form)
        .then((res) => {
          this.loading = false;
          toast("SuccessFully Created", "success");
          this.$router.push("/clients");
        })
        .catch((res) => {
          this.loading = false;
        });
    },
  },
};
</script>