function inputbarlogin(props) {
    return(
        <div className="flex flex-row border-2 h-14 text-center border-gray-300 bg-gray-100 rounded-2xl">
        <img src={props.picurl} alt={props.alt} className="h-7 m-3"></img>
        <input type="text" name="user" className="text-center bg-gray-100 rounded-2xl" />
        </div>
    );
}

export default inputbarlogin
