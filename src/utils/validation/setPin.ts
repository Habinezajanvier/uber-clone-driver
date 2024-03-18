import * as Yup from 'yup';

export default Yup.object().shape({
    pin: Yup.string().required("Pin is required"),
})