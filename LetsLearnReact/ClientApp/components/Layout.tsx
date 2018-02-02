import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {

        return <div className="is-dark">
            <nav className='navbar is-warning' role='navigation' aria-label='main navigation'>
                       <div className='navbar-brand'>
                          
                       </div>
                       <NavMenu />
                      
                   </nav>
                    <div className='container is-fluid'>
                            {this.props.children}
                    </div>
        </div>;
    }
}
