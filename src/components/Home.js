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
  marginRight: '10px',
}

const imageStyle = {
  width: '100%',
  margin: '10px',
  marginTop: '0',
}

const recipeImageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '10px',
  width: '60%'
}

const buttonStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAdmin: false,
      user: {},
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

  renderIfAdminUser = (thing) => {
    if(this.props.user) {
      if(this.props.user.id == '2241380282544816' || this.props.user.id == '212775956236949') {
        return thing;
      }
    }
    else {
      return null;
    }
  }

  renderAfterApiCall = () => {
    if(this.state.featured && this.state.featured.recipe && this.state.featured.blog && this.state.featured.product) {
      return(
        <div>
          <Row style={{marginTop: '50px'}}>
            <Col md={12} lg={6}>
              <h2 style={titleStyle}> Featured Product</h2>
              <div style={{overflow: 'auto'}}>
                <Image rounded style={featuredImageStyle} src={'https://joannstorage.s3.us-east-2.amazonaws.com/images/' + this.state.featured.product.image}/>
                <div style={{paddingLeft: '10px'}}>
                  <h3>{this.state.featured.product.name}</h3>
                  <p>{this.state.featured.product.description}</p>
                  <Link to='#' onClick={() => window.open('http://www.hempworx.com/JoAnnL', '_blank')} style={featuredStyle}>
                    <Button bsStyle="info">Learn More</Button>
                    {this.renderIfAdmin(<Link to="/productform"><Button bsStyle="warning">Edit</Button></Link>)}
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <h2 style={titleStyle}> Featured Recipe</h2>
              <div style={{overflow: 'auto'}}>
              <Link to={'/recipes/' + this.state.featured.recipe.id} style={featuredStyle}>
                <Image style={recipeImageStyle} rounded src={'https://joannstorage.s3.us-east-2.amazonaws.com/images/' + this.state.featured.recipe.image}/>
                <h3 style={{textAlign: 'center'}}>{this.state.featured.recipe.name}</h3>
              </Link>
            </div>
            </Col>
          </Row>
          <Row>
            <h2 style={titleStyle}>Latest Blog</h2>
          </Row>
          <Row>
              <Col md={6}>
                <Link to={'/blog/' + this.state.featured.blog.id}>
                  <h4>{this.state.featured.blog.title}</h4>
                </Link>
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
            <Col xs={8}>
              <p style={textStyle}>
                Welcome To Cub Hempworx! Great to have you here..
                We have 11 incredible Hemp-Derived CBD products in our HempWorx brand. These products consist of 6 Tinctures, 3 Topicals, and 2 Pet Products which all utilize NON-GMO, PESTICIDE FREE, CO2 Extracted Hemp Oil. Our products come from Industrial Hemp and contain less than .3% THC by dry weight.
                We are committed to providing the most potent, pure, and effective Hemp products in the marketplace.
                To learn more about our products, visit
                <a onClick={() => window.open('http://www.HempWorx.com/JoAnnL', '_blank')} href='#'> http://www.HempWorx.com/JoAnnL</a>
              </p>
            </Col>
            <Col xs={4}>
              <Image rounded style={imageStyle} src={process.env.PUBLIC_URL + '/assets/joann.jpg'}/>
            </Col>
          {this.renderIfAdminUser(<Button style={buttonStyle} onClick={this.adminChange}>Activate Admin Mode</Button>)}
          </Col>
        </Row>
        {this.renderAfterApiCall()}
        <div style={{marginBottom: "100px"}} />
      </Grid>

    )
  }
}

export default Home;
