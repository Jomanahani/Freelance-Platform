import { Avatar } from "@mui/material";
import React from "react";
import Logo from "../../Assets/Logo.jpg";
import { HomeHeader, NavIcons, NavItem, NavOptions, SearchInput } from "./style";
import { green } from "@mui/material/colors";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSearch } from 'react-icons/bs'
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export default function Header() {
  return (
    <HomeHeader>
      <div>
        <img src={Logo} alt="logo" />
        <NavOptions>
          <NavItem>
            <li>
              Find Work
              <RiArrowDropDownLine />
            </li>
            <ul>
              <li>Saved Jobs</li>
              <li>Proposals</li>
              <li>Profile</li>
            </ul>
          </NavItem>
          <NavItem>
            <li>
              My Jobs
              <RiArrowDropDownLine />
            </li>
            <ul>
              <li>My Jobs</li>
              <li>All Contracts</li>
              <li>Work Dairy</li>
            </ul>
          </NavItem>
          <NavItem>
            <li>
              Reports
              <RiArrowDropDownLine />
            </li>

            <ul>
              <li>Overview</li>
              <li>My Reports</li>
              <li>Transaction History</li>
            </ul>
          </NavItem>
          <NavItem>
          <li>Messages</li>
          </NavItem>
        </NavOptions>
      </div>
      <div>
        <SearchInput placeholder="Search" />
        <BsSearch style={{position: "absolute" , marginLeft:"8px"}} />
        <NavIcons>
          <QuestionMarkOutlinedIcon sx={{ margin: " 0  10px" }} />
          <SendOutlinedIcon sx={{ margin: " 0  10px" }} />
          <NotificationsNoneOutlinedIcon sx={{ margin: " 0 10px" }} />
        </NavIcons>
        <Avatar sx={{ bgcolor: green[500] }}>OP</Avatar>
      </div>
    </HomeHeader>
  );
}