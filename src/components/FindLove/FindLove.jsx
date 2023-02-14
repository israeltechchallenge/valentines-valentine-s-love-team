import { useEffect, useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import UserContext from "../../contexts/UserContext";


function FindLove() {
    const [ datingProfilesArr, setDatingProfilesArr ] = useState([]);
    const [ genderPreference, setGenderPreference] = useState('');
    const [ sliceStart, setSliceStart ] = useState(0)
    const [ sliceEnd, setSliceEnd ] = useState(5)
    const {user} = useContext(UserContext)  
    const profilesAPI = `https://randomuser.me/api/?results=50&gender=${genderPreference}`;
    useEffect(() => {
        if (user.interestedIn === 'Men' || "men") {
            setGenderPreference('male')
        } else if (user.interestedIn === 'female' || 'Female') {
            setGenderPreference('female')
        }
        fetchDatingProfiles()
    }, [])

    const fetchDatingProfiles = async () => {
        const response = await fetch(profilesAPI);
        const data = await response.json();
        console.log(data)
        setDatingProfilesArr(data.results);
    }

    const showPrevFivePeople = () => {
        setSliceStart(sliceStart - 5)
        setSliceEnd(sliceEnd - 5)
    }

    const showNextFivePeople = () => {
        setSliceStart(sliceStart + 5)
        setSliceEnd(sliceEnd + 5)
    }

    return(
        <div>
            <Button onClick={showPrevFivePeople}>Prev</Button>
            {datingProfilesArr.slice(sliceStart,sliceEnd).map((profile)=> 
            <Card key={profile.dob.date}>
                <Card.Img variant="top" src={profile.picture.large}></Card.Img>
                <Card.Title>{profile.name.first} {profile.name.last}</Card.Title>
                <Card.Text >{profile.location.city}, {profile.location.country}</Card.Text>
            </Card>)}
            <Button onClick={showNextFivePeople}>Next</Button>
        </div>
    )
}

export default FindLove;