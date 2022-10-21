import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
      return {
          hasError: true,
          error
      };
  }
  render() {
      if (this.state.hasError) {
          return this.props.fallback;
      }

      return this.props.children;
  }
}

ErrorBoundary.propTypes = {
    fallback: PropTypes.any,
    children: PropTypes.any
};

export default ErrorBoundary;
