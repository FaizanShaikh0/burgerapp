import React, { forwardRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Image9 from "../../assets/menu/burger-18.jpg";
import Image10 from "../../assets/menu/burger-18.jpg";
import Image11 from "../../assets/menu/burger-18.jpg";
import Image12 from "../../assets/menu/burger-18.jpg";
import Image13 from "../../assets/menu/burger-18.jpg";
import Image14 from "../../assets/menu/burger-18.jpg";
import Image15 from "../../assets/menu/burger-18.jpg";
import Image16 from "../../assets/menu/burger-14.jpg";
import Image17 from "../../assets/menu/burger-14.jpg";
import Image18 from "../../assets/menu/burger-14.jpg";
import Image19 from "../../assets/menu/burger-14.jpg";
import Image20 from "../../assets/menu/burger-14.jpg";
import Image21 from "../../assets/menu/burger-14.jpg";
import Image22 from "../../assets/menu/burger-14.jpg";
import Image23 from "../../assets/menu/burger-14.jpg";
import Image24 from "../../assets/menu/burger-14.jpg";
import Image25 from "../../assets/menu/burger-14.jpg";

import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
  {
    id: "0009",
    image: Image9,
    title: "BBQ Chicken",
    paragraph: "Grilled chicken breast, BBQ sauce, lettuce, pickles, onion",
    rating: 4.2,
    price: 94.99,
  },
  {
    id: "0010",
    image: Image10,
    title: "Buffalo Wings",
    paragraph: "Chicken wings, buffalo sauce, celery, ranch dip",
    rating: 4.7,
    price: 39.99,
  },
  {
    id: "0021",
    image: Image21,
    title: "Chicken Tenders",
    paragraph: "Crispy chicken strips, honey mustard, fries",
    rating: 4.3,
    price: 56.95,
  },
  {
    id: "0022",
    image: Image22,
    title: "Cheeseburger Wrap",
    paragraph:
      "Beef patty, cheddar cheese, lettuce, pickles, wrapped in a tortilla",
    rating: 4.0,
    price: 79.99,
  },
  {
    id: "0023",
    image: Image23,
    title: "Falafel Pita",
    paragraph:
      "Falafel balls, hummus, mixed greens, tomatoes, cucumber in pita",
    rating: 4.1,
    price: 65.3,
  },
  {
    id: "0024",
    image: Image24,
    title: "Chicken Caesar Wrap",
    paragraph: "Grilled chicken, Caesar dressing, lettuce, parmesan cheese",
    rating: 4.6,
    price: 80.75,
  },
  {
    id: "0025",
    image: Image25,
    title: "Beef Burrito",
    paragraph:
      "Ground beef, rice, beans, cheese, sour cream, wrapped in a flour tortilla",
    rating: 4.4,
    price: 85.99,
  },
  {
    id: "0011",
    image: Image11,
    title: "Fish Tacos",
    paragraph: "Grilled fish, cabbage, salsa, avocado, lime",
    rating: 4.3,
    price: 79.99,
  },
  {
    id: "0012",
    image: Image12,
    title: "Cheese Fries",
    paragraph: "Crispy fries, melted cheddar cheese, bacon bits, ranch sauce",
    rating: 4.8,
    price: 45.99,
  },
  {
    id: "0013",
    image: Image13,
    title: "Sweet Potato Fries",
    paragraph: "Crispy sweet potato fries with dipping sauce",
    rating: 4.5,
    price: 39.5,
  },
  {
    id: "0014",
    image: Image14,
    title: "Spicy Veggie Burger",
    paragraph: "Spicy patty, avocado, lettuce, tomato, jalapenos",
    rating: 4.0,
    price: 79.95,
  },
  {
    id: "0015",
    image: Image15,
    title: "Mushroom Swiss Burger",
    paragraph: "House patty, Swiss cheese, mushrooms, lettuce, tomato",
    rating: 4.6,
    price: 92.75,
  },
  {
    id: "0016",
    image: Image16,
    title: "Mango Chicken Salad",
    paragraph: "Grilled chicken, mango, mixed greens, avocado, vinaigrette",
    rating: 4.2,
    price: 72.5,
  },
  {
    id: "0017",
    image: Image17,
    title: "Pulled Pork Sandwich",
    paragraph: "Pulled pork, BBQ sauce, coleslaw, pickles",
    rating: 4.5,
    price: 85.99,
  },
  {
    id: "0018",
    image: Image18,
    title: "Veggie Wrap",
    paragraph: "Grilled vegetables, hummus, mixed greens, tomato, cucumber",
    rating: 3.9,
    price: 68.25,
  },
  {
    id: "0019",
    image: Image19,
    title: "BBQ Ribs",
    paragraph: "Tender ribs, BBQ sauce, cornbread, coleslaw",
    rating: 4.8,
    price: 120.75,
  },
  {
    id: "0020",
    image: Image20,
    title: "Steak Sandwich",
    paragraph: "Grilled steak, garlic butter, lettuce, tomato, onions, mayo",
    rating: 4.7,
    price: 110.5,
  },
];

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
  const [burgerperPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchBurger, setSearchBurger] = useState("");

  const end = currentPage * burgerperPage;
  const start = end - burgerperPage;
  const totalPage = Math.ceil(mockData.length / burgerperPage);

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const searchData = mockData.filter((data) => {
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
          <Col lg={{ span: 4, offset: 4 }} md={{span: 6, offset: 3}}>
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
              key={cardData.id}
              id={cardData.id}
              image={cardData.image}
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
