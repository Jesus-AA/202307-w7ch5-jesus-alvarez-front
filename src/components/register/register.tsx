export function Register() {
  return (
    <form>
      <div>
        <label htmlFor="">username</label>
        <input
          type="text"
          name="userName"
          placeholder="please enter your username"
          required
        />
        <label htmlFor="">password</label>
        <input
          type="text"
          name="password"
          placeholder="please enter your password"
          required
        />
        <label htmlFor="">First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="please enter your first name"
          required
        />
        <label htmlFor="">Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="please enter your last name"
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          placeholder="please enter your email"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
