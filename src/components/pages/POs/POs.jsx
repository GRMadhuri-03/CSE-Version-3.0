import React from 'react';
import './POs.css';
import { Link } from 'react-router-dom';
export default function POs() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/9fpN7VnW/IMG-2585.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">About</div>

            </div>
          </div>
        </div>
      <div className="main-box">
        <div className="side-box">
          <div className="side-container">
            <div className="side-top-box">
              <p>About US</p>
            </div>

            <ul className="side-link">
              <li>
                <div className="side-border-left" />
                <Link to="/About">History</Link>
              </li>
              <li>
                <div className="side-border-left" />
                <Link to="/VisionAndMission">Vision And Mission</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/POs">POs,PEOs,PSOs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="drops">
          <h3>POs</h3>
          <p>
            {' '}
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed
            porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus
            blandit sodales. Nulla ultrices velit a diam placerat congue.
            Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend
            ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id
            venenatis quam.'
          </p>
        </div>
      </div>
      {/* <h1 className="consulting">Publications</h1> */}
      {/* <Footer /> */}
      </div>
    </>
  );
}
