//OTP GENERATION
<script> 

// Function to generate OTP 
function generateOTP() { 
		
	// Declare a digits variable 
	// which stores all digits 
	var digits = '0123456789'; 
	let OTP = ''; 
	for (let i = 0; i < 4; i++ ) { 
		OTP += digits[Math.floor(Math.random() * 10)]; 
	} 
	return OTP; 
} 

document.write("OTP of 4 digits: ") 
document.write( generateOTP() ); 
//Function for OTP Verificcation
function verifyOTP(ver){
        if(ver==generateOTP())
             {
                   document.write(“OTP VERIFIED”);
              }
      else
             {
                document.write(“OTP could not be verified”);
              }     
</script>				
<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>

<html>
<head>
<script>
function goForward() {
  
}
</script>
</head>
<body>
if(ver= verifyOTP(ver))
{
<input type="button" value="Forward" onclick="goForward()">
}
</body>
</html> 


