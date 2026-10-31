import moment from "moment";

export default {
  methods: {
    // field cannot be empty
    required(v) {
      return !!v || "Field is required";
    },

    // field must be a whole number
    interger(v) {
      if (/\D/.test(v)) {
        return "Feild must be integer";
      }
    },

    // field must have decimal values
    double(v) {
      if (/^\d+$/.test(v)) {
        return "Feild must have cents";
      }
    },

    // field must be a valid email
    email(v) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(v)) {
        return "Invalid e-mail.";
      }
    },

    //For time format
    momentFormat(value, arg) {
      return moment(value).format(arg);
    },
    //For time format ends
  },
};