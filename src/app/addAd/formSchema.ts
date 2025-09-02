import * as yup from "yup";

export type FormData = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  description: string;
  address:string;
  city:string;
  category:string;
};

const schema = yup.object().shape({
  category: yup.string().required("Please select a category"),
  fullName: yup.string().required("Full name is required"),
  address: yup.string().required("address is required"),
  city: yup.string().required("City is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  countryCode: yup.string().required("Country code is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{6,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  description: yup
    .string()
    .required("Description is required")
    .test("no-js", "JavaScript code is not allowed", (value) => {
      return !/<script[\s\S]*?>[\s\S]*?<\/script>|javascript:/i.test(
        value || ""
      );
    }),
});

export default schema;