
import BlueButton from "../../constants/button/Button";
import useLogout from "./useLogOut";


function Logout() {
  
    const [ctaLogoutHandler] = useLogout();

  return (
    <>
      <h5 style={{ textAlign: "right", marginRight: 15 }}>
        Developed By: Nauman Hassan
      </h5>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 200,
        }}
      >
        <BlueButton txt="Logout" cta={ctaLogoutHandler} />
      </div>
    </>
  );
}
export default Logout;
