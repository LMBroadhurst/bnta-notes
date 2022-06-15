import MemberList from "../components/MemberList";
import NewMember from "../components/NewMember";
import { useState } from "react";
import UpdateStatus from "../components/UpdateStatus";

const MemberContainer = () => {

    // State

    const [applicationsOpen, setApplicationsOpen] = useState(true);
    

    // Variables

    const [members, setMembers] = useState([
        {
            name: "Colin",
            email: "colin@brightnetwork.co.uk",
            employeeNumber: 123
        },
        {
            name: "Anna",
            email: "anna@brightnetwork.co.uk",
            employeeNumber: 234
        },
        {
            name: "Phil",
            email: "phil@brightnetwork.co.uk",
            employeeNumber: 345
        },
        {
            name: "Valeria",
            email: "valeria@brightnetwork.co.uk",
            employeeNumber: 456
        },
    ]);


    // Functions

    const addNewMember = () => {
        console.log("New member added baby.")
    }

    const updateApplicationsOpen = () => {
        setApplicationsOpen(!applicationsOpen);
    }

  return (
    <>
        <h1>People Directory</h1>
        <NewMember handleButtonClick={addNewMember} applicationsOpen={applicationsOpen}/>
        <UpdateStatus applicationsOpen={applicationsOpen} handleClick={updateApplicationsOpen} />
        <MemberList members={members} />
    </>
    
  )
}

export default MemberContainer