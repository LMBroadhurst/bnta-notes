import Member from "./Member"

const MemberList = ( {members} ) => {

    const memberComponents = members.map( (member, index) => {

        return <Member key={index} member={member} />

    });

  return (
    <>
        <p>This is from MemberList.</p>
        {memberComponents}
    </>
    
  )
}

export default MemberList