import { Component } from 'react';
import './ErrorBoundary.css';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    if (this.state.hasError) {
      return (
        <div className="error-canvas">
        {/* Animated Background Gradients */}
        <div className="gradient-orbs">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="orb"></div>
          ))}
        </div>

        {/* Main Coffee Experience */}
        <div className="coffee-experience">
          {/* Liquid Wave Effect */}
          <div className="liquid-wave">
            <svg viewBox="0 0 100 20">
              <path d="M0,10 Q25,5 50,10 T100,10 V20 H0 Z"></path>
            </svg>
          </div>

          {/* Interactive Coffee Stream */}
          <div className="coffee-stream">
            <div className="stream-body"></div>
            <div className="droplets">
              {[...Array(15)].map((_, i) => (
                <span key={i} className="droplet"></span>
              ))}
            </div>
          </div>

          {/* Morphing Coffee Elements */}
          <div className="coffee-elements">
            <div className="aroma-rings">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="ring"></div>
              ))}
            </div>
            <div className="coffee-swirl"></div>
          </div>

          {/* Glass Morphism Card */}
          <div className="glass-card">
            <div className="card-content">
              <h1>Creative Break</h1>
              <p>Brewing something extraordinary...</p>
              <button onClick={() => window.location.reload()}>
                <span className="button-liquid"></span>
                <span className="button-text">Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      );
    }

    return children;
  }
}

// Add these styles to your global CSS file


export default ErrorBoundary;