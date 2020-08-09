function display_info()
{
    var first_name = document.getElementById( "first_name" ).value;
    var last_name = document.getElementById( "last_name" ).value;
    var email_id = document.getElementById( "email_id" ).value;
    var phone_no = document.getElementById( "contact_num" ).value;
    var password = document.getElementById( "password" ).value;

    alert( "First Name : " + first_name + "\nLast Name : " + last_name + "\nEmail ID : " + email_id + "\nPhone No. : " + phone_no + "\nPassword : " + password );
}