import { useEffect } from "react";
import { Card } from "react-bootstrap";

function SuccessStory() {

    useEffect(() => {
        fetchFemaleProfile()

        fetchMaleProfile()
    }, [])

    const fetchFemaleProfile = async () => {
        const response = await fetch(`https://randomuser.me/api/?results=50&gender=female`);
        const data = await response.json();
        console.log(data);
    }

    const fetchMaleProfile = async () => {
        const response = await fetch(`https://randomuser.me/api/?results=50&gender=male`);
        const data = await response.json();
        console.log(data);
    }

    return(
        <div>
            <Card>
                <Card.Img src=""></Card.Img>
                <Card.Img src=""></Card.Img>
            </Card>
        </div>
    )
}

export default SuccessStory;