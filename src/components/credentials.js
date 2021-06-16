const Creds = () => {
  //Creación de variables y funciones para modificarlas
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Muestra de entradas en ventana de alerta
  const handleSend = () => {
    alert(`User: ${username}, Password: ${password}`)
  };

  return username,password,setUsername,setPassword;
}