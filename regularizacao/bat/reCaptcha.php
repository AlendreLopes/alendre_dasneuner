<?php
// Initiate the autoloader.
require_once 'ReCaptcha/autoload.php';

// Register You API keys at https://www.google.com/recaptcha/admin
// And write it here
// Local
$siteKey = '6LcMxdAUAAAAAMcwHAk6ccTGydsbRYPase__S3c8';
$secret  = '6LcMxdAUAAAAAL1oSf3Hrv79SIHU2UZF0AeWQBi-';
// Site
// $siteKey = '6LfM78YUAAAAANRnq4PMvB0U95TsDeFy-AAI5RE9';
// $secret  = '6LfM78YUAAAAABsT2p7p5t1ALXEy8zxR5N4otvp0';

// reCAPTCHA supported 40+ languages listed here: https://developers.google.com/recaptcha/docs/language
// $lang = 'en';
$lang = 'pt-BR';

// If No key
if ($siteKey === '' || $secret === ''):
  die('CPT001');
elseif (isset($_POST['g-recaptcha-response'])):

  // If the form submission includes the "g-captcha-response" field
  // Create an instance of the service using your secret
  $recaptcha = new \ReCaptcha\ReCaptcha($secret);

  // Make the call to verify the response and also pass the user's IP address
  $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

  if ($resp->isSuccess()):
    // If the response is a success, that's it!
    die('CPT000');
  else:
    // Something wrong
    die('CPT002');
  endif;

endif;
?>
