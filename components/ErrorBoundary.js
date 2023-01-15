import React from "react";

 class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
    
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return( 
            <div className="w-scren h-screen flex justify-center items-center">
                <h1 className="text-6xl bold">Something went wrong.</h1>
            </div>
            )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;