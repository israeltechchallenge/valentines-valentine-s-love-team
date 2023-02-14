import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext"

function Login(){
    const [formInfo, setFormInfo] = useState({
        name: "",
        age: 1,
        gender: "Male",
        interestedIn: "Men"})
    // const {user, setUser} = useContext(UserContext)

    return(
        <div className="login-main-div">
            <input type="text" placeholder="What's your name?" value={formInfo.name} onChange={(e) => {setFormInfo({...formInfo, name: e.target.value})} }/>
            <input type="number" value={formInfo.age} onChange = {(e) => {setFormInfo({...formInfo, age: e.target.value})}}/>
            <select value={formInfo.gender} onChange = {(e) => {setFormInfo({...formInfo, gender: e.target.value})}} >
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <select value={formInfo.interestedIn} onChange = {(e) => {setFormInfo({...formInfo, interestedIn: e.target.value})}}>
                <option value="men">Men</option>
                <option value="women">Women</option>
            </select>
            <button>Login</button>
        </div>
    )
}

export default Login