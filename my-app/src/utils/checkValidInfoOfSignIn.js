
export const checkValidOnBlur = (e,setvalidEmail, setvalidPswd) => {
  console.log(e);
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const pswdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,15}$/
  const value = e?.target?.value || false;
  const name = (e?.target?.name) || e;

  if (name === "email") setvalidEmail(emailRegex.test(value) ? e : null);
  if (name === "pswd" ) setvalidPswd(pswdRegex.test(value) ? e : null);
}
