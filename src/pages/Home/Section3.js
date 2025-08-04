import React, { forwardRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];
  let remainingRating = rating;

  for (let i = 0; i < 5; i++) {
    if (remainingRating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      remainingRating--;
    } else if (remainingRating > 0 && remainingRating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      remainingRating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

const Section3 = forwardRef((props, ref) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [burgerPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchBurger, setSearchBurger] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProductData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [searchBurger]);

  const end = currentPage * burgerPerPage;
  const start = end - burgerPerPage;
  const totalPage = Math.ceil(productData.length / burgerPerPage);
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handlePageChange = (page) => setCurrentPage(page);

  const searchData = productData.filter((data) => {
    return data.title.toLowerCase().includes(searchBurger.toLowerCase());
  });

  return (
    <section className="menu_section" ref={ref} id="section3">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-3">
            <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
            <div className="position-relative">
              <input
                placeholder="Search your favourite burger!"
                className="form-control border-warning pr-5 py-2"
                style={{ boxShadow: "none" }}
                value={searchBurger}
                onChange={(e) => setSearchBurger(e.target.value)}
              />
              <button
                className="position-absolute bg-transparent border-0 px-2 py-2"
                style={{
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </Col>
        </Row>

        <Row>
          {searchData.slice(start, end).map((cardData) => (
            <Cards
              key={cardData._id}
              id={cardData._id}
              image={`http://localhost:5000${cardData.image}`}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-3">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Prev
                </button>
              </li>
              {pages.map((n) => (
                <li
                  key={n}
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(n)}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPage ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPage}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default Section3;
