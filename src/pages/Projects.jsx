import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Tác phẩm hàng đầu gần đây
        </h1>
        <p style={{ color: "white" }}>
        Dưới đây là một số dự án tôi đã thực hiện gần đây.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Lift-Buddy"
              description="Nền tảng chia sẻ chuyến đi trực tuyến này tự hào có thiết kế giao diện người dùng đáp ứng, hoàn chỉnh với bảng quản trị được xây dựng bằng React và Material-UI. Với việc tích hợp API Google Maps, người dùng có thể dễ dàng truy cập chỉ đường trên bản đồ. Nền tảng này cho phép cung cấp đầy đủ chức năng CURD trên hồ sơ và bài đăng, đồng thời người dùng có thể xác nhận hoặc hủy chuyến đi từ một bài đăng và nhắn tin cho nhau sau khi xác nhận. Ngoài ra, người dùng có thể dễ dàng đặt lại mật khẩu của mình. Back-end được cung cấp bởi máy chủ Node Express và sử dụng MongoDB để quản lý cơ sở dữ liệu."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="Nền tảng này có giao diện đáp ứng được xây dựng bằng Reactjs và CSS, cho phép người dùng dễ dàng quản lý hồ sơ và bài đăng của họ thông qua các hoạt động CRUD. Tùy chọn theo dõi những người dùng khác và tương tác với bài đăng của họ (thích hoặc không thích) cũng có sẵn, kèm theo các đề xuất để người dùng mới theo dõi. Người dùng chỉ có thể xem bài đăng từ những người dùng mà họ theo dõi và chỉ có thể tham gia trò chuyện với những người họ theo dõi. Phần phụ trợ được cung cấp bởi máy chủ Nodejs và Expressjs, trong khi MongoDB được sử dụng làm cơ sở dữ liệu."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="Trang web thương mại điện tử này sử dụng API REST được xây dựng bằng Nodejs và Expressjs, cho phép thực hiện các thao tác CRUD dễ dàng trên hồ sơ người dùng, sản phẩm và bảng quản trị. Giao diện người dùng được thiết kế để quản lý sản phẩm hiệu quả và bao gồm quy trình mua hàng hoàn chỉnh. Bảng quản trị, có thể truy cập CRUD trên người dùng và sản phẩm, bao gồm biểu đồ để hiển thị số liệu thống kê. API Stripe được tích hợp để xử lý các khoản thanh toán của khách hàng. Trang web sử dụng MongoDB và Firebase làm cơ sở dữ liệu."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="Ứng dụng viết blog này có máy chủ API RESTful được xây dựng bằng Nodejs và Expressjs. Dữ liệu được lấy từ máy chủ API và hiển thị trên giao diện thân thiện với người dùng được thiết kế bằng React, Redux và các thành phần theo kiểu để có trải nghiệm liền mạch."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto là một dự án Web 3 sử dụng hợp đồng thông minh Ethereum được tạo bằng Solidity. Nó cho phép người dùng tương tác với ví Metamask của họ và gửi Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart là một dự án Web 3 sử dụng hợp đồng thông minh Ethereum được tạo bằng Solidity. Nó bao gồm tất cả các chức năng của nền tảng khởi động, cho phép người dùng tương tác với ví Metamask của họ, chuyển Ethereum và tham gia vào các chiến dịch khởi động."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects