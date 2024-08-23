import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';
import Particle from "../Particle"; // 외부 CSS 파일을 가져오기
import { Container, Row, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'; // React Bootstrap import

const teams = [
    "기아타이거즈", "삼성라이온즈", "LG트윈스", "두산베어스",
    "KT위즈", "NC다이노스", "SSG랜더스", "키움히어로즈",
    "한화이글스", "롯데자이언츠"
];

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState("두산베어스"); // 초기 검색어를 두산베어스로 설정

    const fetchNews = (searchQuery) => {
        setLoading(true);
        setError(null);

        axios.get(`/media/news?searchText=${searchQuery}`)
            .then(response => {
                if (response.data && response.data.items) {
                    setNews(response.data.items); // 뉴스 API에서 반환된 데이터의 'items'를 사용
                } else {
                    setError('No news items found.');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError('Failed to fetch news. Please try again later.');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchNews(searchText); // 초기 검색어로 뉴스를 불러옴
    }, [searchText]);

    const handleButtonClick = (team) => {
        setSearchText(team); // 버튼 클릭 시 검색어 변경
    };

    return (
        <Container fluid className="project-section">
            <Particle />  {/* Particle 컴포넌트를 렌더링 */}
            <ToggleButtonGroup type="radio" name="teams" defaultValue={searchText}>
                {teams.map((team, index) => (
                    <ToggleButton
                        key={index}
                        id={`team-${index}`}
                        variant={searchText === team ? "primary" : "outline-primary"}
                        value={team}
                        onClick={() => handleButtonClick(team)}
                    >
                        {team}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <div className="news-container">
                        <h1 className="news-title">[News] {searchText}</h1>
                        <ul className="news-list">
                            {news.map((item, index) => (
                                <li key={index} className="news-item">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
                                        <h2 className="news-item-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                                    </a>
                                    <p className="news-item-description" dangerouslySetInnerHTML={{ __html: item.description }} />
                                    <p className="news-item-date">{new Date(item.pubDate).toLocaleString()}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Row>
            </Container>
        </Container>
    );
};

export default News;
