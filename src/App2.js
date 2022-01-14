import React from "react";
import styled from "styled-components";
import banner from "./banner.png";
import logo from "./logo.svg";
import search from "./search.svg";
import lock from "./lock.svg";
function App() {
  return (
    <StyledApp>
      <nav className="navigation">
        <a href="/" className="logo-wrapper">
          <img src={logo} className="logo" />
        </a>
        <div className="nav-wrapper">
          <ul className="nav-list">
            <li className="nav bold">Browse</li>
            <li className="nav">
              Collection
              <div className="dropdown">
                <div className="dropdown-btn">+</div>
                <div className="dropdown-items"></div>
              </div>
            </li>
            <li className="nav">About</li>
            <li className="nav">Dictionary</li>
          </ul>
        </div>
        <div className="login-signup">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </nav>
      <main>
        <section className="hero">
          <h1 className={"h1 bold"}>Discover best-in-class apps</h1>
          <h4 className={"h4"}>
            Save hours of UI/UX research with our library of <br /> 50,000+
            fully searchable mobile app screenshots
          </h4>
          <button className="call-to-action">Log In or sign up</button>
          <ul className="dots-wrapper">
            <li className="dots"></li>
            <li className="dots selected"></li>
            <li className="dots"></li>
          </ul>
          {/* <div className="background">
            <img className="company-logo" src=""></img>
            <img className="company-logo" src=""></img>
            <img className="company-logo" src=""></img>
            <img className="company-logo" src=""></img>
          </div>
          <div className="background right">
            <img className="company-logo" src=""></img>
            <img className="company-logo" src=""></img>
            <img className="company-logo" src=""></img>
            <img className="company-logo" src=""></img>
          </div> */}
        </section>
        <section className="search-apps">
          <div className="search-apps-headings">
            <h2 className={"h2 bold"}>iOS</h2>
            <h2 className={"h2 grey"}>Android</h2>
          </div>
          <div className="search-types">
            <div className="search-type  bold">Apps</div>
            <div className="search-type white bold">Screens</div>
          </div>
          <div className="search-bar-wrapper">
            <div className="search-bar-misc">
              <img className="search-icon" src={search} />
              <div className="shortcut-wrapper">
                <div className="shortcut">ctrl</div>
                <div className="shortcut">K</div>
              </div>
            </div>
            <input
              className="search-bar"
              placeholder="Search Apps (try Airbnb)"
            ></input>
          </div>
          <div className="filter">
            <img className="lock-icon" src={lock} />
            <p className="grey">Filter by App Categories</p>
          </div>
        </section>
      </main>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  --text-grey: #808080d4;
  --text-black: hsl(0, 0%, 0%);
  --white: #fff;
  .bold {
    font-weight: bold;
    color: var(--text-black);
  }

  .grey {
    color: var(--text-grey);
  }
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--text-grey);

    .logo-wrapper {
      width: 100px;
      padding-left: 10px;
      .logo {
        width: 100%;
        height: 60px;
        background-size: cover;
        aspect-ratio: 1;
      }
    }

    .nav-wrapper {
      .nav-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;

        .nav {
          color: var(--text-grey);
          margin: 0 10px;
          display: flex;
          &.selected {
            color: var(--text-black);
          }
        }
      }
    }

    .login-signup {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 150px;

      .login {
        color: var(--text-black);
        background-color: var(--white);
        border: none;
        padding: 5px 10px;
        border-radius: 20px;
      }

      .signup {
        background-color: var(--text-black);
        color: var(--white);
        border: none;
        padding: 5px 10px;
        border-radius: 20px;
      }
    }
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background: url(${banner}) no-repeat;
    background-size: contain;
    background-position: center;
    h1 {
      font-size: 5vw;
    }
    h4 {
      font-size: 2vw;
      font-weight: normal;
    }
    h1,
    h4 {
      margin: 10px 0;
    }

    .call-to-action {
      margin: 20px 0;
      background-color: var(--text-black);
      color: var(--white);
      padding: 10px 30px;
      border-radius: 20px;
      border: none;
    }

    .dots-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      width: 100px;
      padding: 0;
      margin: 30px 0;
      .dots {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        /* margin: 0 20px; */
        background-color: var(--text-grey);

        &.selected {
          background-color: var(--text-black);
        }
      }
    }

    .background {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;

      &.right {
        transform: rotateY(-180deg);
      }

      .company-logo {
        width: 10vw;
        height: 10vw;
        background: no-repeat;
        background-size: contain;
        position: absolute;

        &:nth-child(1) {
          top: 5%;
          left: 0;
        }

        &:nth-child(2) {
          top: 35%;
          left: 15%;
        }

        &:nth-child(3) {
          top: 65%;
          left: 0%;
        }

        &:nth-child(4) {
          top: 80%;
          left: 30%;
        }
      }
    }
  }

  .search-apps {
    padding: 10px;
    .search-apps-headings {
      display: flex;
      align-items: center;
      margin: 15px 0;
      width: 150px;
      justify-content: space-between;
    }

    .search-types {
      display: flex;
      align-items: center;
      margin: 15px 0;

      .search-type {
        color: var(--white);
        background-color: var(--text-black);
        padding: 5px 15px;
        border-radius: 20px;
        margin-right: 10px;

        &.white {
          background-color: var(--white);
          color: var(--black);
        }
      }
    }

    .search-bar-wrapper {
      position: relative;
      width: 90%;
      margin: 15px 0;
      .search-bar {
        width: 100%;
        padding: 10px 10px 10px 60px;
        border: 1px solid var(--text-grey);
        border-radius: 20px;
        color: var(--text-black);

        &::placeholder {
          color: var(--text-grey);
        }
      }
      .search-bar-misc {
        position: absolute;
        top: 50%;
        left: 3%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transform: translateY(-50%);

        .search-icon {
          width: 24px;
          height: 24px;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .shortcut-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .shortcut {
            background: var(--text-grey);
            margin: 0 5px;
            padding: 2px 4px;
            border-radius: 5px;
            min-width: 20px;
            text-align: center;
          }
        }
      }
    }
    .filter {
      margin: 15px 0;
      border: 1px solid var(--text-grey);
      padding: 5px 5px 5px 25px;
      display: flex;
      align-items: center;
      max-width: 200px;
      border-radius: 20px;
      p {
        font-size: 14px;
        margin: 0;
      }
      .lock-icon {
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: contain;
        margin-right: 10px;
      }
    }
  }
`;
