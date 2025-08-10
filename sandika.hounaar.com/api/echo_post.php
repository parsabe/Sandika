<?php
header('Content-Type: application/json; charset=utf-8');
echo json_encode([
  'method' => $_SERVER['REQUEST_METHOD'] ?? null,
  'uri'    => $_SERVER['REQUEST_URI'] ?? null,
  'post'   => $_POST,
], JSON_PRETTY_PRINT);
