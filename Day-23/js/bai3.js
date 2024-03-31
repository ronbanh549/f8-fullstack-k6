var users = [];

function createUser(name, password, email) {
  if (!name || !password || !email) {
    return null; // Return null if any field is missing
  }
  return { name, password, email, role: "user" };
}

function handleRegister(name, password, email) {
  const newUser = createUser(name, password, email);
  if (newUser) {
    users.push(newUser);
    return newUser;
  } else {
    console.error("Error: All fields are required for registration");
    return null; // Return null to indicate failure
  }
}

function handleLogin(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return user;
  } else {
    return "Thông tin đăng nhập không hợp lệ";
  }
}

handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(users);
console.log(dataLogin);
