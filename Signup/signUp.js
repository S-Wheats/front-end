function passwordChecker()
{
  var password = document.getElementById("ps").value;
  var confirmPassword = document.getElementById("ps2").value;
  if (password != confirmPassword)
    {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주십쇼.")
      return false;
    }

}