import * as Yup from 'yup';

export default Yup.object().shape({
    phoneNumber: Yup.string().required("Phone number is required"),
    pin: Yup.string().required("Pin is required"),
})