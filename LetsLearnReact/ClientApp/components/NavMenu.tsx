import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='navbar-menu'>                 
                    <NavLink to={ '/' } exact activeClassName='active' className='navbar-item'>
                        Home
                    </NavLink>
                  
                    <NavLink to={'/counter'} activeClassName='active' className='navbar-item'>
                            Counter
                    </NavLink>
                       
                    <NavLink to={'/fetchdata'} activeClassName='active' className='navbar-item'>
                        Fetch data
                    </NavLink>                
                </div>;
    }
}
