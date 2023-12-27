 <?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT");
header("Access-Control-Allow-Headers: Content-Type");

    // Database connection details
    $hostname = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'userdb';
    // Create a new PDO instance
    try {
        $pdo = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo 'Error connecting to the database: ' . $e->getMessage();
        exit();
    }

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retrieve data from the database
    $stmt = $pdo->prepare('SELECT * FROM usertbl');
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Return the data as JSON
    echo json_encode($result);
}

// Retrieve the form data sent by JavaScript
 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //Retrieve data from POST request
    $title = $_POST['title'];
    $firstname = $_POST['firstname'];
    $surname = $_POST['surname'];
    $informalname = $_POST['informalname'];
    $address = $_POST['address'];
    $town = $_POST['town'];
    $postcode = $_POST['postcode'];
    $ninumber = $_POST['ninumber'];
    $dob = $_POST['dob'];
    $mobiletel = $_POST['mobiletel'];
    $hometel = $_POST['hometel'];
    $othertel = $_POST['othertel'];
    $personalemail = $_POST['personalemail'];
    $gender = $_POST['gender'];
    $initials = $_POST['initials'];
    $emergencyname = $_POST['emergencyname'];

    // Prepare the SQL statement
    $stmt = $pdo->prepare('INSERT INTO usertbl (title, firstname, surname, informal_name, address, town, postcode, ni_number, dob, mobile_tel, home_tel, other_tel, personal_email, gender, initials, emergency_contact) VALUES (:title, :firstname, :surname, :informalname, :address, :town, :postcode, :ninumber, :dob, :mobiletel, :hometel, :othertel, :personalemail, :gender, :initials, :emergencycontact)');
    // Bind the parameters
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':firstname', $firstname);
    $stmt->bindParam(':surname', $surname);
    $stmt->bindParam(':informalname', $informalname);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':town', $town);
    $stmt->bindParam(':postcode', $postcode);
    $stmt->bindParam(':ninumber', $ninumber);
    $stmt->bindParam(':dob', $dob);
    $stmt->bindParam(':mobiletel', $mobiletel);
    $stmt->bindParam(':hometel', $hometel);
    $stmt->bindParam(':othertel', $othertel);
    $stmt->bindParam(':personalemail', $personalemail);
    $stmt->bindParam(':gender', $gender);
    $stmt->bindParam(':initials', $initials);
    $stmt->bindParam(':emergencycontact', $emergencyname);

    // Execute the statement
    try {
        $stmt->execute();
        }
        catch (PDOException $e) {
            echo 'Error saving user data: ' . $e->getMessage() . $stmt;
        }
    } 
 
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Handle the update operation
    $data = json_decode(file_get_contents('php://input'), true);
    $userId = $data['userId'];
    $title = $data['title'];
    $firstname = $data['firstname'];
    $surname = $data['surname'];
    $informalname = $data['informalname'];
    $address = $data['address'];
    $town = $data['town'];
    $postcode = $data['postcode'];
    $ninumber = $data['ninumber'];
    $dob = $data['dob'];
    $mobiletel = $data['mobiletel'];
    $hometel = $data['hometel'];
    $othertel = $data['othertel'];
    $personalemail = $data['personalemail'];
    $gender = $data['gender'];
    $initials = $data['initials'];
    $emergencyname = $data['emergencyname'];
    // ... retrieve other fields
    
    // Prepare and execute the SQL statement to update data
    $stmt = $pdo->prepare('UPDATE usertbl SET title = :title, firstname = :firstname, surname = :surname, informal_name = :informalname, address = :address, town = :town, postcode = :postcode, ni_number = :ninumber, dob = :dob, mobile_tel = :mobiletel, home_tel = :hometel, other_tel = :othertel, personal_email = :personalemail, gender = :gender, initials = :initials, emergency_contact = :emergencycontact WHERE user_id = :userId');
    $stmt->bindParam(':userId', $userId);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':firstname', $firstname);
    $stmt->bindParam(':surname', $surname);
    $stmt->bindParam(':informalname', $informalname);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':town', $town);
    $stmt->bindParam(':postcode', $postcode);
    $stmt->bindParam(':ninumber', $ninumber);
    $stmt->bindParam(':dob', $dob);
    $stmt->bindParam(':mobiletel', $mobiletel);
    $stmt->bindParam(':hometel', $hometel);
    $stmt->bindParam(':othertel', $othertel);
    $stmt->bindParam(':personalemail', $personalemail);
    $stmt->bindParam(':gender', $gender);
    $stmt->bindParam(':initials', $initials);
    $stmt->bindParam(':emergencycontact', $emergencyname);
    // ... bind other parameters
    
    try {
        $stmt->execute();
    } catch (PDOException $e) {
        echo 'Error updating user: ' . $e->getMessage();
    }
}else {
    // echo 'Invalid request!';
}
 ?>




