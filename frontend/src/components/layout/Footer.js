import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export default function Footer() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">        
              <h4>R<i className="fas fa-code"></i>H Dev Your Dream</h4><br/>
              <Row >
                <Col><a href="https://github.com/MDRezaulHasan"><i class="fab fa-github"></i></a></Col>
                <Col><a href="https://www.facebook.com/RevengerRezaulHasan/"><i class="fab fa-facebook-f"></i></a></Col>
                <Col><a href="linkedin.com/in/rezaul-hasan-437baa190 "> <i class="fab fa-linkedin-in"></i></a></Col>
                <Col><a href="https://www.instagram.com/rezaulhasan0168/"><i class="fab fa-instagram-square"></i></a></Col>
                <Col><a href="https://twitter.com/Rezaul0168"><i class="fab fa-twitter"></i></a></Col>
              </Row>
              
            </Col>
              <Col className="text-center py-3">        
              <h4>Md Rezaul Hasan</h4>
              <h6>rezaulhasan0168@gmail.com</h6>
              <h6>(+46)727850896</h6>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}
