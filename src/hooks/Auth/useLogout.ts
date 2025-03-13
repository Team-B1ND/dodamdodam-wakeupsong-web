import token from "../../libs/Token/token";

const useLogout = () => {
  const handleClickLogout = () => {
    token.clearToken();
    window.location.href = "https://dodam.b1nd.com/sign";
  };

  return {
    handleClickLogout,
  };
};

export default useLogout;
