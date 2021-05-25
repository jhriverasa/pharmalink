function Inputbarlogin(props) {

    if(props.picurl == "/usuario_login.jpeg"){
        var estilo = "h-7 m-3";
    }else{
        var estilo = "h-7 m-2.5";
    };

    return(
        <div className="flex flex-row border-2 h-14 text-center border-gray-300 bg-gray-100 rounded-2xl m">
        <img src={props.picurl} alt={props.alt} className={estilo}></img>
        <input type="text" name="user" className="text-center bg-gray-100 rounded-2xl" />
        </div>
    );
}

export default Inputbarlogin
