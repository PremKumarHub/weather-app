function Usergreeting(props){
    if(props.isLoggedin){
        return <h2>welcome to {props.username} </h2>
    }
    else{
        return <h2>Please Login</h2>
    }
}
export default Usergreeting