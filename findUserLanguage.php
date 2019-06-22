<?php
function getIP()
{
	if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER))
	{
        if ($tmp = $_SERVER['HTTP_X_FORWARDED_FOR'])
		{
			$tmpip = explode(",", $tmp);
			return trim($tmpip[0]);
		}
    }
	else return $_SERVER['REMOTE_ADDR'];
}

// set IP address and API access key 
$ip = getIP();
/*$ip = '119.39.238.69';*/
$access_key = '17227ea018eab0c53480326da4831c89';

// Initialize CURL:
$ch = curl_init('http://api.ipstack.com/'.$ip.'?access_key='.$access_key.'');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Store the data:
$json = curl_exec($ch);
curl_close($ch);

// Decode JSON response:
$api_result = json_decode($json, true);

// Output the "capital" object inside "location"
echo $api_result['location']['languages'][0]['code'];

?>