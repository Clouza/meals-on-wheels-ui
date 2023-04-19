function OAuth2() {
  let url = new URL(window.location.href);
  let token = url.searchParams.get("token");
  sessionStorage.setItem("token", token);
  window.location.href = "/";
}

export default OAuth2;