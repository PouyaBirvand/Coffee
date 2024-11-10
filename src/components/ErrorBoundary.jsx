// import { Component } from 'react';
// import PropTypes from 'prop-types';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="flex flex-col items-center justify-center min-h-[400px]">
//           <h2 className="text-xl font-bold mb-4">مشکلی پیش آمده</h2>
//           <button 
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-[#835a36] text-white rounded-lg"
//           >
//             تلاش مجدد 
//           </button>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// ErrorBoundary.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default ErrorBoundary;
