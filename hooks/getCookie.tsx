// 쿠키에서 토큰을 가져오는 함수
const getCookie = (name: string) => {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : null;
};

export default getCookie;
