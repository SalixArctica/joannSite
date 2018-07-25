import React, { Component } from 'react';
import { Grid, Row, Col, Button, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const titleStyle = {
  textAlign: 'center',
  marginBottom: '40px',
  borderBottom: '1px dotted #777'
}

const textStyle = {
  fontSize: '16px',
  margin: '0',
}

const featuredRecipeStyle = {
  display: 'block',
  margin: 'auto',
  width: '80%',
}

const featuredStyle = {
  textDecoration: 'none',
  color: 'black',
}

const featuredImageStyle = {
  width: '40%',
  float: 'left',
}

const imageStyle = {
  width: '20%',
  float: 'right',
  margin: '10px',
  marginTop: '0',
}

const buttonStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
}

class Home extends Component {
  constructor(){
    super();
    this.state = {
      isAdmin: false,
    }
  }

  adminChange = () => {
    this.setState({
      isAdmin: !this.state.isAdmin,
    }, () => this.props.passAdmin(this.state.isAdmin))
  }

  componentDidMount = () => {
    fetch('/api/featured')
      .then((res) => res.json())
      .then((featured) => this.setState({featured}))
  }

  renderIfAdmin = (thing) => {
    if(this.props.isAdmin) {
      return thing;
    }
    else {
      return null;
    }
  }

  renderAfterApiCall = () => {
    if(this.state.featured) {
      return(
        <div>
          <Row style={{marginTop: '50px'}}>
            <Col md={12} lg={6}>
              <h2 style={titleStyle}> Featured Product</h2>
              <div style={{overflow: 'auto'}}>
                <Image style={featuredImageStyle} src={'https://joannstorage.s3.us-east-2.amazonaws.com/images/' + this.state.featured.product.image}/>
                <div style={{paddingLeft: '10px'}}>
                  <h3>{this.state.featured.product.name}</h3>
                  <p>{this.state.featured.product.description}</p>
                  <Link to='#' style={featuredStyle}>
                    <Button bsStyle="info">Learn More</Button>
                    {this.renderIfAdmin(<Link to="/productform"><Button bsStyle="warning">Edit</Button></Link>)}
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <h2 style={titleStyle}> Featured Recipe</h2>
              <div style={{overflow: 'auto'}}>
              <Link to='#' style={featuredStyle}>
                <Image style={featuredImageStyle} rounded src={process.env.PUBLIC_URL + '/assets/tacos.jpg'}/>
                <h3>Tacos de Carne</h3>
              </Link>
            </div>
            </Col>
          </Row>
          <Row>
            <h2 style={titleStyle}>Latest Blog</h2>
          </Row>
          <Row>
            <Col md={6}>
              <h4>{this.state.featured.blog.title}</h4>
            </Col>
            <Col md={6}>
              <p>{this.state.featured.blog.date}</p>
            </Col>
            <Col lg={12}>
              <p>{this.state.featured.blog.content}</p>
            </Col>
          </Row>
        </div>
      );
    }
    else {
      return null;
    }
  }

  render() {
    return(
      <Grid>
        <Row show-grid>
          <Col xs={12}>
            <h1 style={titleStyle}>Welcome to Club HempWorx</h1>
            <p style={textStyle}>   Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas finibus elit nec dignissim accumsan. Mauris faucibus metus at commodo facilisis. Suspendisse scelerisque malesuada interdum. Quisque lobortis sit amet lacus ut rutrum. Nulla vestibulum fermentum velit, vel convallis ipsum sodales et. Vivamus et turpis sed erat feugiat posuere. Pellentesque ut sem vel massa congue molestie. Sed semper nisl id dignissim vestibulum. Cras mattis in massa vitae placerat. Cras tempus sit amet orci eget maximus. Donec a tempor dui, sit amet semper dui. Nunc lacinia metus at justo convallis faucibus. Donec condimentum dapibus ex, non lacinia lorem sagittis id. Maecenas et felis non leo condimentum laoreet. Curabitur a mauris efficitur, ultricies risus et, aliquet neque.
            Nulla condimentum tempus porttitor. </p>
            <Image rounded style={imageStyle} src={process.env.PUBLIC_URL + '/assets/joann.jpg'}/>
            <p style={textStyle}>Quisque viverra tristique leo nec pharetra. Phasellus imperdiet, felis id tincidunt feugiat, tortor purus volutpat est, ac hendrerit velit velit at turpis. Aliquam varius elit nisi, a fringilla dui tempus non. Sed dui sem, convallis sed felis ut, pharetra condimentum lacus.
            Aliquam sollicitudin neque erat. Donec at maximus ex. Pellentesque eu efficitur lacus, sed tincidunt massa. Donec malesuada pulvinar lacus, sit amet tempor augue malesuada nec. Morbi ullamcorper dolor eu dolor auctor vulputate. Maecenas magna tellus, molestie ac purus non, rutrum euismod ante. Vivamus malesuada malesuada posuere. Mauris euismod ultricies dui, at imperdiet velit pharetra id. Mauris elementum massa eu justo commodo, tempus ornare nisi fringilla. Curabitur libero est, tincidunt ac pretium nec, feugiat a libero. Phasellus nisl felis, ultricies vel interdum nec, ultrices et leo.</p>
            <Button type="checkbox" style={buttonStyle} id="adminChecker" onClick={this.adminChange}>Activate Admin Mode</Button>
          </Col>
        </Row>
        {this.renderAfterApiCall()}
      </Grid>
    )
  }
}

export default Home;
