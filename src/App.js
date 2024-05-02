import { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import { Route, Routes, Navigate, useLocation, useNavigate, useParams, } from 'react-router-dom';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import { connect } from 'react-redux';
import { autoLogin } from './store/actions/auth';
import Logout from './components/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.autoLogin()
  }
  render() {
    let routes = (
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/" element={<QuizList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
    if (this.props.isAuthenticated) {
      console.log('htyhtdyj', this.props.isAuthenticated)
      routes = (
        <Routes>
          <Route path="/quiz-creator" element={<QuizCreator />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<QuizList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )
    }
    return (
      <Layout>
        { routes }
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
