import PropPlaygroundChild from "./PropPlaygroundChild";

const PropPlayground = () => {

    const number = 5;

  return (
    <>
        <PropPlaygroundChild numberPlug={number} />
    </>
  )
}

export default PropPlayground