import useForm from '../hooks/useFormik';

const App = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
      errors.firstName = 'First name must contain only letters';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
      errors.lastName = 'Last name must contain only letters';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    onSubmit,
    validate
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
      </div>

      <div>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;