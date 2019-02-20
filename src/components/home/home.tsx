import * as React from 'react';

interface HomeProps {
    appName: string;
}

export class Home extends React.Component<HomeProps, {}> {  
    render() {
        return (
            <div className="rgs-home-container">
                <div className="rgs-home-text">
                    {this.props.appName}
                </div>
            </div>
            
        );
    }
}