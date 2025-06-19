
export const checkValidOnBlur = (e,setErrorEmail, setErrorPswd) => {
  const {name, value} = e.target;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const pswdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,15}$/


  if (name === "email") setErrorEmail(!emailRegex.test(value));
  else if (name === "pswd") setErrorPswd(!pswdRegex.test(value));
}
