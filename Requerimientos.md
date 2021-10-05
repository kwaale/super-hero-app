Formulario de Login

El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado,
conteniendo los campos:
● Email.
● Password.
● Botón de “Enviar”.
Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje
al usuario si lo estuviesen. Caso contrario, se deberá realizar una petición POST a la siguiente url, con
los campos email y password en el BODY.
Los datos válidos para obtener un token son:

{
	"email":"challenge@alkemy.org",
	"password":"react"
}

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
}