import React from "react";

 class ProjectErrorBoundary extends React.Component {
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
            <div className="w-screen h-[500px] flex justify-center items-center">
                <h1 className="text-6xl bolder text-red-500">Could Not Load Data</h1>
            </div>
            )
      }
  
      return this.props.children; 
    }
  }

  export default ProjectErrorBoundary;