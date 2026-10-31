<template>
  <div class="form_component">
    <!-- form card -->
    <div class="pt-2">
      <!-- form component -->
      <v-card elevation="0" title="Update Client">
        <div class="pt-3 pl-2 pr-2 pb-3">
          <v-form v-model="disable">
            <v-row>
              <!-- Phone -->
              <v-col lg="12" cols="12">
                <label>Phone</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Phone"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required, interger]"
                  v-model="form.phone"
                ></v-text-field>
              </v-col>

              <!-- Address -->
              <v-col lg="12" cols="12">
                <label>Address</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Address"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required]"
                  v-model="form.address"
                ></v-text-field>
              </v-col>

              <!-- Project Budget -->
              <v-col lg="12" cols="12">
                <label>Project Budget</label>
                <div class="pt-2"></div>

                <v-text-field
                  placeholder="Project Budget"
                  variant="outlined"
                  density="comfortable"
                  :rules="[required]"
                  v-model="form.project_budget"
                ></v-text-field>
              </v-col>

              <!-- Submit Button -->
              <v-col lg="6" cols="12">
                <v-btn
                  block
                  rounded="lg"
                  @click="submitForm()"
                  class="form_btn"
                  :disabled="!disable"
                  :loading="loading"
                  ><span class="btn_text">Submit Data</span></v-btn
                >
              </v-col>

              <!-- Cancel Button -->
              <v-col lg="6" cols="12">
                <v-btn
                  block
                  rounded="lg"
                  variant="outlined"
                  style="text-transform: capitalize"
                  @click="closeDialog()"
                  >Cancel</v-btn
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
  props: {
    item: Object,
  },

  data() {
    return {
      disable: false,
      // form variables
      loading: false,
      form: {},
    };
  },

  created() {
    this.initData();
  },

  methods: {
    // initiate data
    initData() {
      // copy the selected row so the table does not change while editing
      this.form = { ...this.item };
    },

    // submit button with two way data binding
    async submitForm() {
      this.loading = true;

      await clients
        .updateClient(this.form)
        .then((res) => {
          this.loading = false;
          toast("SuccessFully Updated", "success");
          this.$emit("close", false);
        })
        .catch((res) => {
          this.loading = false;
        });
    },

    // tell parent to close the dialog
    closeDialog() {
      this.$emit("close", false);
    },
  },
};
</script>