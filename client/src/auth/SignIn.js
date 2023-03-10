import "./signin.css";
const SignIn = () => {
  return (
    <div class="container">
      <h1>Sign In</h1>
      <form action="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
