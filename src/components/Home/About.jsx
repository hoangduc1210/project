import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                HÃY CHO TÔI GIỚI THIỆU BẢN THÂN MÌNH
                </h1>
                <p className="home-about-body">
                Xin chào, tên tôi là Hoàng Xuân Đức
                 và tôi đến từ Thanh Hóa.
                <br />
                <br />
                Gần đây tôi đã tốt nghiệp với bằng Cử nhân Khoa học và Kỹ thuật Máy tính vào năm 2021.
                <br />
                <br />
                Như một
                   Lập trình viên full stack,  
                  Tôi thích giải quyết những thử thách mới và không ngừng mở rộng kỹ năng của mình.
                  <br />
                  <br />Tôi thành thạo
                    Javascript,
                    cũng như có kiến ​​thức về các ngôn ngữ lập trình như C, Java, Python,
                  GraphQL và Độ vững chắc.
                  <br />
                  <br />
                  Tôi có niềm đam mê làm việc
                  với Node.js, MongoDB và
                 
                      thư viện và khung Javascript hiện đại
                 giống
                  React.js
                  <br />
                  <br />
                  Tôi cũng quan tâm đến việc xây dựng mới
                  <i>
                  Công nghệ và Sản phẩm Web,
                    cũng như khám phá các lĩnh vực liên quan đến
                     Trí tuệ nhân tạo.
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>TÌM TÔI TRÊN</h1>
                <p>
                Xin đừng ngần ngại liên hệ với tôi và kết nối.
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About