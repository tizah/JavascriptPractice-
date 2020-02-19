function studentage(dateOfBirth) {
  let today1 = new Date();
  let birthDate = new Date(dateOfBirth);
  let age = today1.getFullYear() - birthDate.getFullYear();
  let m = today1.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today1.getDate() < birthDate.getDate())) {
    age--;
  }
  return studentage;
}

studentage("1992-07-01");
