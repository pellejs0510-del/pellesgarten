<?php

$to = "pellesgarten@gmail.com";
$subject = "Neue Anfrage von Website";

$message = "
Name: " . $_POST['name'] . "
Adresse: " . $_POST['adresse'] . "
Email: " . $_POST['email'] . "
Telefon: " . $_POST['telefon'] . "

--- Leistungen ---
Rasen (m²): " . $_POST['rasen_m2'] . "
Hecke Art: " . $_POST['hecke_art'] . "
Hecke (lfm): " . $_POST['hecke_lfm'] . "
Mulch Lieferung (m³): " . $_POST['mulch_lieferung'] . "
Mulch Verteilen (m³): " . $_POST['mulch_verteilen'] . "

Nachricht:
" . $_POST['nachricht'];

$headers = "From: noreply@pellesgarten.de";

mail($to, $subject, $message, $headers);

echo "Anfrage gesendet!";
?>
