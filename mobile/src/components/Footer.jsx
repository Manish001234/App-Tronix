import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
});

const Left = styled.div({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});

const Logo = styled.h1({});

const Desc = styled.p({
  margin: "20px 0px",
});

const SocialContainer = styled.div({
  display: "flex",
});

const SocialIcon = styled.div({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  alignIteams: "center",
  justifyContent: "center",
  marginRight: "20px",
});

const Center = styled.div({
  flex: "1",
  padding: "20px",
});

const Title = styled.h3({
  marginBottom: "30px",
});

const List = styled.ul({
  margin: "0",
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
});

const ListItem = styled.li({
  width: "50%",
  marginBottom: "10px",
});

const Right = styled.div({
  flex: "1",
  padding: "20px",
});

const ContactItem = styled.div({
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
});

const Payment = styled.img({
  width: "50%",
});

const Footer = () => {
  return (
    <div className="foter">
      <Container>
        <Left>
          <Logo>APPLE</Logo>
          <Desc>
            Aptronix is India’s Largest Apple Premium Reseller. Started in 2011
            at the Begumpet store in Hyderabad with just 5 employees, Aptronix
            is now Apple's biggest partner with 48 stores, 14 service centres
            and 400+ employees, across 14 cities in India.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>SHOP</Title>
          <List>
            <ListItem>Iphone</ListItem>
            <ListItem>Mac</ListItem>
            <ListItem>I-Pad</ListItem>
            <ListItem>Watch</ListItem>
            <ListItem>Tv</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            Hyderabad, Kompally, Telangana-501401
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +91 9542378392
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            Applestore80@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </div>
  );
};

export default Footer;
