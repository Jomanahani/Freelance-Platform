import React from 'react'
import { CopyRight, FooterUl, Icon, Icons, MainFooter } from './style';
import { ImFacebook } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaApple } from 'react-icons/fa';
import { BsAndroid2 } from 'react-icons/bs'

export default function Footer() {
    return (
        <MainFooter>
          <FooterUl>

              <ul>
                <li>About Us</li>
                <li>Feedback</li>
                <li>Community</li>
              </ul>
              <ul>
                <li>Trust, Safety & Security</li>
                <li>Help & Support</li>
                <li>Freelance Foundation</li>
              </ul>
    
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>CA Notice at Collection</li>
                <li>Cookie Settings</li>
              </ul>
              <ul>
                <li>Accessibility</li>
                <li>Desktop App</li>
                <li>Cookie Policy</li>
                <li>Enterprise Solutions</li>
              </ul>
          </FooterUl>
          <Icons>
            <div>
              Follow Us{"  "}
              <Icon><ImFacebook /></Icon>
              <Icon><FaLinkedinIn /></Icon>
              <Icon><BsTwitter /></Icon>
              <Icon><AiFillYoutube /></Icon>
              <Icon><AiFillInstagram /></Icon>
            </div>
            <div>
              Mobile App
              <Icon><FaApple /></Icon>
              <Icon><BsAndroid2 /></Icon>
            </div>
          </Icons>
          <CopyRight>&copy; 2015 - 2023 Freelance Platform® Global Inc.</CopyRight>
        </MainFooter>
      );
}
