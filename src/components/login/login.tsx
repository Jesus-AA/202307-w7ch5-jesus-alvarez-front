export function Login() {
  return (
    <div>
      <h2>Welcome back, please log in!</h2>
      <label htmlFor="">User Name</label>
      <input type="text" required />
      <label htmlFor="">Password</label>
      <input type="password" required />
      <button type="submit">Login</button>
    </div>
  );
}
