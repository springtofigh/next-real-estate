import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeDots
        visible={true}
        height="45"
        color="#304ffe"
        ariaLabel="three-dots-loading"
        wrapperStyle={{margin: 'auto'}}
    />
  )
}

export default Loader;