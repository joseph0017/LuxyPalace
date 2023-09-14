import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
  if (!user) {
    alert('You must be logged in to view our products');
    return <Navigate to='/login' replace />;
  }
  return children;
};

function mapStateToProps (state) {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps)(PrivateRoute);
