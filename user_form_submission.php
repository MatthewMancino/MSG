<?php


  $username = $email = $password = $vpass = "";
  $uerr = $eerr = $perr = $verr = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["username"])) {
      $uerr = "Username is required";
    } else {
      $username = test_input($_POST["username"]);
    }


    if (empty($_POST["email"])) {
      $eerr = "Email is required";
    } else {
      $email = test_input($_POST["email"]);
    }

    if (empty($_POST["password"])) {
      $perr = "Password is required";
    } else {
      $password = test_input($_POST["password"]);
    }

    if (empty($_POST["vpassword"])) {
      $verr = "Verify your password";
    } else {
      $vpass = test_input($_POST["vpassword"]);
    }
  }

  function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>
<!doctype html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="./css/headerfooter.css">
</head>
  <body>

    <div class="panel panel-default" style="padding: 20px;">
      <h2>Create MSG account</h2>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <div class="form-group">
          <label for="name">Username</label>  <span class="error"><?php echo $perr; ?></span>
          <input type="uname" class="form-control" id="uname" placeholder="Enter username" name="username">
        </div>
        <div class="form-group">
          <label for="email"> E-mail: </label>  <span class="error"><?php echo $perr; ?></span>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
        </div>
        <div class="form-group">
          <label for="pwd">Password</label>   <span class="error"><?php echo $perr; ?></span>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
        </div>
        <div class="form-group">
          <label for="pwd">Verify Password</label> <span class="error"> </span>  <span class="error"><?php echo $perr; ?></span>
          <input type="password" class="form-control" id="vpwd" placeholder="Verify password" name="verifypwd">
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  </body>
</html>
