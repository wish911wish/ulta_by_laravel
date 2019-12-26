import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
  // check if user is authenticated and storing authentication data as states if true
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }
render() {
    return (
      <div>
        <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
        <span>Whatever normally goes into the home/index page; A Plea To Heal The World for instance</span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="contents text-center">
                <h1>ULTA!</h1>
                <p>“..ultimate frisbee combines</p>
                <p>speed, grace and powerful hurling</p>
                <p>with a grueling pace.”</p>
                <p class="mt-4">THE WALL STREET JOURNAL</p>
                <div class="text-center">
                  <a href="{{ url('/event') }}">
                    <div class="btn btn-success">
                      Do Ultimate!!
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      )
    }
  }
export default Home
