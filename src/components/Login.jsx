import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import '../css/Login.css'

function Login(){
    const navigate = useNavigate()
    const [formInfo, setFormInfo] = useState({
        name: "",
        age: 18,
        gender: "Male",
        interestedIn: "Men"})
    const [isNameError, setIsNameError] = useState(false)
    const [isAgeError, setIsAgeError] = useState(false)
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        console.log(formInfo.name, formInfo.age)
        if(formInfo.name === ""){
            setIsNameError(true)
        }if(formInfo.age < 18){
            setIsAgeError(true)
        }else{
            setIsAgeError(false)
            setIsNameError(false)
        }
    }, [formInfo])

    return(
        <div className="login-main-div">
            <div className="login-form-div">
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
            </div>
            <h2 style={{display: isNameError ? "block" : "none"}}>You must enter a name to login!</h2>
            <h2 style={{display: isAgeError ? "block" : "none"}}>You must be 18 or over to use this service!</h2>
            <button onClick={() => {
                if(!(isAgeError || isNameError)){
                    setUser(formInfo)
                    navigate("/find-love")
                }
            }}>Login</button>
        </div>
    )
}

export default Login