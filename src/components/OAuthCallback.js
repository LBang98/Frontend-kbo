import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const OauthCallback = ({ provider }) => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    if (provider === 'kakao') {
      handleKakaoCallback(code);
    } else if (provider === 'naver') {
      handleNaverCallback(code);
    }
  }, [location, provider]);

  const handleKakaoCallback = async (code) => {
    try {
      const response = await axios.post('http://localhost:8000/oauth2/callback/kakao', { code });
      console.log(response.data); // 토큰이나 사용자 정보를 처리
    } catch (error) {
      console.error('Kakao Login Error:', error);
    }
  };

  const handleNaverCallback = async (code) => {
    try {
      const response = await axios.post('http://localhost:8000/oauth2/callback/naver', { code });
      console.log(response.data); // 토큰이나 사용자 정보를 처리
    } catch (error) {
      console.error('Naver Login Error:', error);
    }
  };

  return <div>Logging in...</div>;
};

export default OauthCallback;
