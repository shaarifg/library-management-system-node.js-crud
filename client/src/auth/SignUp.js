import "./signin.css";

const SignUp = () => {
  return (
    <div class="container">
      <h1>Sign In</h1>
      <form action="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
