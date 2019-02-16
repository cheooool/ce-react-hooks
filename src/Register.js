import React, { useState } from 'react';

const initialFormState = {
  username: '',
  email: '',
  password: ''
};

export default function Register() {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setUser(form);
    setForm(initialFormState);
  }

  return (
    <div
      style={{
        textAlign: 'center'
      }}>
      <h2>Register</h2>
      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
        {user && JSON.stringify(user)}
      </form>
    </div>
  );
}