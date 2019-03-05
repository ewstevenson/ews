#!/usr/bin/php -q

<?php

$TS=`date +%s`;

//print $TS;

$value = rand(0, 33);
$payload = '{"metric":"sys.cpu.nice","timestamp":'.$TS.',"value":'.$value.',"tags":{ "host": "ericstevenson.com" } }';


$tsdb = tcollect($payload);
print_r($tsdb);


function tcollect($payload) {
	$host = 'ericstevenson.com';
	$port = 8025;
	$post_url = 'http://ericstevenson.com:8025/api/put?details';
	$json_encode_payload = $payload; //json_encode($payload);
	print $json_encode_payload;	
	$ch = curl_init($post_url);
	curl_setopt($ch, CURLOPT_HEADER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER,
        array("Content-type: application/json"));
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $json_encode_payload);
	$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	$json_response = curl_exec($ch);
	print_r($json_response);

	curl_close($ch);
	return json_decode($json_response, true);



}

