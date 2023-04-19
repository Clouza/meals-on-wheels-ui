import Footer from "../components/footer/Footer";
import NavbarMember from "../components/navbar/NavbarMember";

const NotFound = () => {
  let url = new URL(window.location.href);
  let token = url.searchParams.get("token");
  if (token != null) {
    sessionStorage.setItem("token", token);
    window.location.href = "/";
  }

  return (
    <div className="border h-[100vh] flex justify-center items-start flex-col">
      <h1 className="text-3xl text-bold text-center">404</h1>
      <p className="text-2xl text-center">Not Found</p>
      <a href="/" className="text-sm underline text-center">back to Home</a>
    </div>
  )
}
export default NotFound;