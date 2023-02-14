import { useEffect, useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import UserContext from "../../contexts/UserContext";

function FindLove() {
    const [ datingProfilesArr, setDatingProfilesArr ] = useState([])
    const [ genderPreference, setGenderPreference] = useState('')
    const [ visitbleDatingProfilesArr, setVisibleDatingProfilesArr ] = useState([])

    const {user} = useContext(UserContext)  

    const profilesAPI = `https://randomuser.me/api/?results=50&gender=${genderPreference}`;
    useEffect(() => {
        // try{
        // fetch(profilesAPI)
        // .then((response) => response.json())
        // .then((data) => {
        //     sliceProfilesArray(data.results)
        // })
        // } catch(err){
        //     console.error(err)
        // }
        if (user.interestedIn === 'men') {
            setGenderPreference('male')
        } else if (user.interestedIn === 'female') {
            setGenderPreference('female')
        }

        fetchDatingProfiles()
    }, [])

    const fetchDatingProfiles = async () => {
        const response = await fetch(profilesAPI);
        const data = await response.json();
        console.log(data)
        setDatingProfilesArr(data.results);
        sliceProfilesArray();
    }

    const sliceProfilesArray = () => {
        setVisibleDatingProfilesArr(datingProfilesArr.slice(0,5))
    }

    return(
        <div>
            <Button>Prev</Button>
            {visitbleDatingProfilesArr.map((profile)=> 
            <Card key={profile.dob.date}>
                <Card.Img variant="top" src={profile.picture.large}></Card.Img>
                <Card.Title>{profile.name.first} {profile.name.last}</Card.Title>
                <Card.Text>{profile.location.city}, {profile.location.country}</Card.Text>
            </Card>)}
            <Button>Next</Button>
        </div>
    )
}

export default FindLove;