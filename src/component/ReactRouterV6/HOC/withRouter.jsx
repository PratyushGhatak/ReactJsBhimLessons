import React from 'react'
import { useParams } from 'react-router-dom';

const withRouter = WrappedComponent => 
{
    const EnhancedComponent=props => {
        const params = useParams();
        // etc... other react-router-dom v6 hooks  
        return (
            <WrappedComponent
            params={params}
            {...props}
            // etc...
          />
        );
      };
    return EnhancedComponent
}

export default withRouter