import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function FindLove() {
    const [ datingProfilesArr, setDatingProfilesArr ] = useState([])
    const [ visitbleDatingProfilesArr, setVisibleDatingProfilesArr ] = useState([])
    let genderPref = 'female';
    const profilesAPI = `https://randomuser.me/api/?results=50&gender=${genderPref}`;
    useEffect(() => {
        try{
        fetch(profilesAPI)
        .then((response) => response.json())
        .then((data) => {
            sliceProfilesArray(data.results)
        })
        } catch(err){
            console.error(err)
        }
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