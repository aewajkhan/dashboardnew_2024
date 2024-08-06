import "./Dashboard.css";
import Layout from "../../components/layout/Layout";
import CardData from "../../data/CardData";
import Card from "../../components/card/Card";
import { Circle } from "rc-progress";
import Chart from "../../components/chart/Chart";
import { RiFocus3Line } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import OrdersTable from "../../components/orderTable/OrdersTable";
import FeedbackTable from "../../components/feedbackTable/FeedbackTable";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish, BiSolidUpArrow } from "react-icons/bi";

const Dashboard = () => {
  const ProfitCard = () => {
    return (
      <div className="profitContainer">
        <div className="profitLeft">
          <h5>Net Profit</h5>
          <h1>$6759.25</h1>
          <div
            style={{ color: "#03b480", marginTop: "10px" }}
            className="value"
          >
            <BiSolidUpArrow /> 3%
          </div>
        </div>
        <div className="profitRight">
          <div className="progressBar">
            <Circle
              percent={70}
              strokeWidth={10}
              strokeColor="#7394ff"
              trailColor="#283365"
              trailWidth="10px"
              style={{ width: "90px" }}
            />
            <div className="progressContent">
              <h3>70%</h3>
              <h5>Goal</h5>
              <p>Completed</p>
            </div>
          </div>

          <p>*The value here has been rounded off.</p>
        </div>
      </div>
    );
  };
  const GoalContainer = () => {
    return (
      <div className="goalContainer">
        {/* top  */}
        <div className="goal">
          <div className="goalLeft">
            <div className="gaolIcon1">
              <RiFocus3Line />
            </div>
            <h5>Goals</h5>
          </div>
          <div className="goalRight">
            <MdArrowForwardIos />
          </div>
        </div>
        {/* middle  */}
        <div className="goal">
          <div className="goalLeft">
            <div className="gaolIcon2">
              <LiaHamburgerSolid />
            </div>
            <h5>Popular Dishes</h5>
          </div>
          <div className="goalRight">
            <MdArrowForwardIos />
          </div>
        </div>
        {/* bottom */}
        <div className="goal">
          <div className="goalLeft">
            <div className="gaolIcon3">
              <BiDish />
            </div>
            <h5>Menus</h5>
          </div>
          <div className="goalRight">
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="dashboard">
        <h1>dashboard</h1>
        <div className="dashboardWrapper">
          {/* top container */}

          <div className="topContainer">
            {/* left container  */}
            <div className="DashLeftContainer">
              {CardData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  value={card.value}
                  change={card.change}
                  changeColor={card.changeColor}
                  Icon={card.icon}
                  backgroundColor={card.backgroundColor}
                  color={card.color}
                  Upicon={card.upicon}
                />
              ))}
            </div>
            {/* right container  */}
            <div className="DashRightContainer">
              <ProfitCard />
            </div>
          </div>

          {/* middle container  */}
          <div className="DashMiddleContainer">
            <div className="dashMiddleLeft">
              <Chart />
            </div>
            <div className="dashMiddleRight">
              <GoalContainer />
            </div>
          </div>
          {/* bottom container  */}
          <div className="DashBottomeContainer">
            <div className="dashBottomLeft">
              <OrdersTable title="Recent Orders" />
            </div>
            <div className="dashBottomRight">
              <FeedbackTable title="Customer's Feedback" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
