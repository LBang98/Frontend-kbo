import React from 'react';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;

const Kakao_REDIRECT_URI = 'http://localhost:8000/login/oauth2/code/kakao';
const Naver_REDIRECT_URI = 'http://localhost:8000/login/oauth2/code/naver';

const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${Kakao_REDIRECT_URI}&response_type=code`;
};

const handleNaverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${Naver_REDIRECT_URI}&response_type=code&state=random_state_string`;
};

export default function Navbar() {
    return (
       <div>
                    <button onClick={handleKakaoLogin}>Kakao Login</button>
                    <button onClick={handleNaverLogin}>Naver Login</button>
       </div>
    );
}
