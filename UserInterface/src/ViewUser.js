buttonType = 'Save';
userId = 0;

displayUserData();

// Display the user data in HTML
function displayUserData() {
  var userDataDiv = document.getElementById('user-data');
  var html= ''; 
  html += '<h3> No Data Found</h3>';
  userDataDiv.innerHTML = html;
  var data;
  var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost/store_user.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            data = JSON.parse(xhr.responseText);

            html = '';
            if(data.length==0)
            html += '<h3> No Data Found</h3>';
            else{
            // Loop through the data and create HTML elements to display it
            data.forEach(function(user) {
              html += '<div class="user-details" id="user-data">';
              html += '<div class="d-flex justify-content-between align-items-center">';
              html += '<h2>' + user.title + ' ' + user.firstname + ' ' + user.surname + '</h2>';
              html += '<button type="button" class="btn-edit" onclick="openModal(\'Update\',\'' + encodeURIComponent(JSON.stringify(user)) + '\')">Edit</button>';
              html += '</div>';
                      
              html += '<div class="row">';
              html += '<div class="col-md-5">';
              html += '<div class="detail email">';
              html += '<span class="label">Email:</span>';
              html += '<span class="value">' + user.personal_email + '</span>';
              html += '</div>';
              html += '<div class="detail address">';
              html += '<span class="label">Address:</span>';
              html += '<span class="value">' + user.address + ', ' + user.town + ', ' + user.postcode + '</span>';
              html += '</div>';
              html += '<div class="detail">';
              html += '<span class="label">Emergency Contact Name:</span>';
              html += '<span class="value">' + user.emergency_contact + '</span>';
              html += '</div>';
              html += '</div>';
              html += '<div class="col-md-3">';
              html += '<div class="detail">';
              html += '<span class="label">Mobile Tel:</span>';
              html += '<span class="value">' + user.mobile_tel + '</span>';
              html += '</div>';
              html += '<div class="detail">';
              html += '<span class="label">Home Tel:</span>';
              html += '<span class="value">' + user.home_tel + '</span>';
              html += '</div>';
              html += '<div class="detail">';
              html += '<span class="label">Other Tel:</span>';
              html += '<span class="value">' + user.other_tel + '</span>';
              html += '</div>';
              html += '<div class="detail">';
              html += '<span class="label">NI Number:</span>';
              html += '<span class="value">' + user.ni_number + '</span>';
              html += '</div>';
              html += '</div>';
              html += '<div class="col-md-4">';
              html += '<div class="detail">';
              html += '<span class="label">Informal Name:</span>';
              html += '<span class="value">' + user.informal_name + '</span>';
              html += '</div>';
              html += '<div class="detail">';
              html += '<span class="label">Date Of Birth:</span>';
              html += '<span class="value">' + user.dob + '</span>';
              html += '</div>';
              html += '<div class="detail">';
              html += '<span class="label">Gender:</span>';
              html += '<span class="value">' + user.gender + '</span>';
              html += '</div>';
              html += '<div class="detail">';
              html += '<span class="label">Initials:</span>';
              html += '<span class="value">' + user.initials + '</span>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
            });
          }
            userDataDiv.innerHTML = html;
        } else {
            console.error('Error retrieving data: ' + xhr.status);
        }
    };
    xhr.send();
}

function openModal(type,userData) {
  if(userData)
  var userDetail = JSON.parse(decodeURIComponent(userData));
  buttonType = type;
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent");
  
    // Load the external HTML file
    fetch("user.html")
      .then(response => response.text())
      .then(data => {
        
        modalContent.innerHTML = data;
        modal.style.display = "block";
      })
      .catch(error => {
        console.error("Error loading the HTML file:", error);
      });
      if(type=='Update'){
        loadContents(userDetail,type);
      }
  }

  function loadContents(userData,type) {
    fetch("user.html")
    .then(response => response.text())
    .then(data => {
      modalContent.innerHTML = data;
      // Access the desired element using its ID
      userId = userData.user_id;
      modalContent.querySelector('#title').value = userData.title;
      modalContent.querySelector('#firstname').value = userData.firstname;
      modalContent.querySelector('#surname').value = userData.surname;
      modalContent.querySelector('#informalname').value = userData.informal_name;
      modalContent.querySelector('#address').value = userData.address;
      modalContent.querySelector('#town').value = userData.town;
      modalContent.querySelector('#postcode').value = userData.postcode;
      modalContent.querySelector('#ninumber').value = userData.ni_number;
      modalContent.querySelector('#dob').value = userData.dob;
      modalContent.querySelector('#mobiletel').value = userData.mobile_tel;
      modalContent.querySelector('#hometel').value = userData.home_tel;
      modalContent.querySelector('#othertel').value = userData.other_tel;
      modalContent.querySelector('#personalemail').value = userData.personal_email;
      modalContent.querySelector('#gender').value = userData.gender;
      modalContent.querySelector('#initials').value = userData.initials;
      modalContent.querySelector('#emergencyname').value = userData.emergency_contact;
      modalContent.querySelector('#saveButton').value = type;
    })
    .catch(error => {
      console.error("Error loading the HTML file:", error);
    });
  }

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  function clearForm() {
    var form = document.getElementById("registrationForm");
   form.reset();
  }

  function clearForm() {
    document.getElementById("registrationForm").reset();
  }
  
  $(document).ready(function() {
    $(document).on("submit", "#registrationForm", function(e) {

        e.preventDefault();
        var id_title = $('#title');
        var id_firstname = $('#firstname');
        var id_surname = $('#surname');
        var id_informalname = $('#informalname');
        var id_address = $('#address');
        var id_town = $('#town');
        var id_postcode = $('#postcode');
        var id_ninumber = $('#ninumber');
        var id_dob = $('#dob');
        var id_mobiletel = $('#mobiletel');
        var id_hometel = $('#hometel');
        var id_othertel = $('#othertel');
        var id_personalemail = $('#personalemail');
        var id_gender = $('#gender');
        var id_initials = $('#initials');
        var id_emergencyname = $('#emergencyname');

        var title = $('#title').val();
        var firstname = $('#firstname').val();
        var surname = $('#surname').val();
        var informalname = $('#informalname').val();
        var address = $('#address').val();
        var town = $('#town').val();
        var postcode = $('#postcode').val();
        var ninumber = $('#ninumber').val();
        var dob = $('#dob').val();
        var mobiletel = $('#mobiletel').val();
        var hometel = $('#hometel').val();
        var othertel = $('#othertel').val();
        var personalemail = $('#personalemail').val();
        var gender = $('#gender').val();
        var initials = $('#initials').val();
        var emergencyname = $('#emergencyname').val();

        var dobValue = dob.trim();
        var dobDate = new Date(dobValue);

        //Form validation

        var postcodePattern = /^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]{0,1}\s?[0-9][A-Za-z]{2}$/;
        var niNumberPattern = /^[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D\s]$/i;
    
        // regular expression pattern for initials (two uppercase letters)
        var initialsPattern = /^[A-Z]{2}$/;
      
      // regular expression pattern for a valid email address
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // regular expression pattern for a valid mobile tel number
        var telPattern = /^[0-9]{10}$/;
      
        // regular expression pattern for a valid home tel number
        var telPattern = /^[0-9]{7,}$/;
        
        //regular expression pattern for the name (allows letters, spaces, and hyphens)
        var namePattern = /^[A-Za-z\s\-]+$/;
        if (title === "" || firstname.trim() === "" || surname.trim() === "" || address.trim() === "" || postcode.trim() === "" || gender === "") {
          alert("Please fill in all required fields.");
          return false; // Prevent form submission
        }
        if (!namePattern.test(firstname.trim())) {
          console.log("id_firstname[0]",id_firstname[0]);

          // Invalid name format
          alert("Please enter a valid firstname");
          id_firstname.focus();
          return false;
        }
        if (!namePattern.test(surname.trim())) {
          // Invalid name format
          alert("Please enter a valid surname");
          id_surname.focus();
          return false;
        }
        if (informalname.trim()!="" &&!namePattern.test(informalname.trim())) {
          // Invalid name format
          alert("Please enter a valid informalname");
          id_informalname.focus();
          return false;
        }
        if(address.trim().length < 5){
         // Address is too short
         alert("Address must be at least 5 characters long.");
         id_address.focus();
         return false;
        }
        if (town.trim()!="" &&!namePattern.test(town.trim())) {
          // Invalid name format
          alert("Please enter a valid town");
          id_town.focus();
          return false;
        }

        if (!postcodePattern.test(postcode.trim())) {
          // Postcode format is invalid
          alert("Please enter a valid postcode");
          id_postcode.focus();
          return false;
        }
        if (ninumber.trim()!="" && !niNumberPattern.test(ninumber.trim())) {
          // NI Number format is invalid
          alert("Please enter a valid NI Number");
          id_ninumber.focus();
          return false;
        }
        if (dob.trim()!='' && isNaN(dobDate)) {
          // Invalid Date of Birth format
          alert("Please enter a valid Date of Birth");
          id_dob.focus();
          return false;
        }
        if (mobiletel.trim()!='' && !telPattern.test(mobiletel.trim())) {
          // Invalid mobile tel number format
          alert("Please enter a valid  10-digit mobile tel number");
          id_mobiletel.focus();
          return false;
        }
        if (hometel.trim()!='' && !telPattern.test(hometel.trim())) {
          // Invalid home tel number format
          alert("Please enter a valid home tel number with at least 7 digits");
          id_hometel.focus();
          return false;
        }
        if (othertel.trim()!='' && !telPattern.test(othertel.trim())) {
          // Invalid other tel number format
          alert("Please enter a valid  other tel number with at least 7 digits");
          id_othertel.focus();
          return false;
        }
        if (personalemail.trim()!='' && !emailPattern.test(personalemail.trim())) {
          // Invalid personalemail format
          alert("Please enter a valid email address");
          id_personalemail.focus();
          return false;
        }
        if (initials.trim()!='' && !initialsPattern.test(initials.trim())) {
          // Invalid initials format
          alert("Please enter two uppercase letters as initials");
          id_initials.focus();
          return false;
        }
        if (emergencyname.trim()!='' && !namePattern.test(emergencyname.trim())) {
          // Invalid name format
          alert("Please enter a valid emergency contact name");
          id_emergencyname.focus();
          return false;
        }
      
        //Validation end

        if(buttonType == 'Save'){
          $.ajax({
            url: "http://localhost/store_user.php",
            type: "POST",
            data: {
                title: title, firstname: firstname, surname: surname, informalname: informalname, address: address, town: town, postcode: postcode, ninumber: ninumber, dob: dob, mobiletel: mobiletel, hometel: hometel, othertel: othertel, personalemail: personalemail, gender: gender, initials: initials, emergencyname: emergencyname           
            },
            success: function(response) {
                alert("Details saved successfully!");
                closeModal();
                displayUserData();
            },
            error: function(xhr, status, error) {
                // Handle the error
                alert("An error occurred while saving details: " + error);
            }
        });
        }
        else if(buttonType == 'Update'){
          var requestBody = {
            userId: userId,
            title: title,
            firstname: firstname,
            surname: surname,
            informalname: informalname,
            address: address,
            town: town,
            postcode: postcode,
            ninumber: ninumber,
            dob: dob,
            mobiletel: mobiletel,
            hometel: hometel,
            othertel: othertel,
            personalemail: personalemail,
            gender: gender,
            initials: initials,
            emergencyname: emergencyname
          };

          // Check if any variable is undefined or null
          var isInvalid = Object.values(requestBody).some(value => value === undefined || value === null);

          if (isInvalid) {
            alert("Invalid data. Please fill in all the required fields.");
          } else {
            $.ajax({
              url: "http://localhost/store_user.php",
              type: "PUT",
              contentType: "application/json",
              data: JSON.stringify(requestBody),
              success: function(response) {
                alert("Details updated successfully!");
                closeModal();
                displayUserData();
              },
              error: function(xhr, status, error) {
                alert("An error occurred while updating details: " + error);
              }
            });

          }
          
        }
     
    });
});