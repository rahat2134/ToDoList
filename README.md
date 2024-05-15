# React Sign Up Form

Welcome to the React Registration Form project! This simple React application allows users to input their information in a registration form. Upon submission, the entered data is displayed in the console as an array, and a welcome message is shown in an alert.

## How to Run the Project

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Arihant-Singh-Rana/sign_up_form_With_React
   ```

2. Navigate to the project directory:

   ```bash
   cd file_location
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the React Registration Form in action!

## Project Structure

### Form Component (Form.js)

```jsx
import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  // State to store form data
  const [data, setData] = useState({
    user: "",
    pass: "",
    num: "",
    mail: "",
  });

  // Function to handle form submission
  function handleOutput() {
    // Display form data in the console as an array
    console.log('Form Data:', data);

    // Create an array of form data values
    let arr = [];
    for (let i in data) {
      arr.push(data[i]);
    }
    
    // Display a welcome message in an alert
    alert("Welcome " + data.user);
  }

  return (
    <div className="Parent">
      <h1>Login/SignUp</h1>
      <form onSubmit={handleOutput}>
        {/* Input fields for username, password, phone number, and email */}
        {/* ... */}
        
        {/* Submit button */}
        <button>Login/SignUp</button>
      </form>
    </div>
  );
}
```

### App Component (App.js)

```jsx
import React from "react";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      {/* Render the Form component */}
      <Form />
    </div>
  );
}
```

### Styling (Form.css)

```css
/* Styling for the form container and its elements */
body {
  background-color: #222222;
}
.Parent {
  /* ... */
}

/* Styling for headings, labels, inputs, and buttons */
h1 {
  /* ... */
}
label {
  /* ... */
}
input {
  /* ... */
}
button {
  /* ... */
}
button:hover {
  /* ... */
}
#lmail {
  /* ... */
}
```

## Styling

The registration form is styled using CSS to create an appealing and user-friendly interface. Feel free to customize the styles in the `Form.css` file to match your preferences.

## How to Contribute

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request.

Thank you for your contribution!

Feel free to explore the code, experiment with the form, and enhance your React skills. If you have any questions or feedback, don't hesitate to reach out. Happy coding! 🚀