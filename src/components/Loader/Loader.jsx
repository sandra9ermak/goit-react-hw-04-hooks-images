import LoaderSpinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
    <div className="loaderOverlay">
    <div className="loaderSpiner">
        <LoaderSpinner
        type="ThreeDots"
        color="#1229aa"
        height={120}
        width={150}
      timeout={4000} //4 secs
      />
      </div>
      </div>
  )
}

export default Loader;