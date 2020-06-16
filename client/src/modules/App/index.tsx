import React from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';
import routes from '../../routers/routes';
import PrivateRoute from '../../routers/PrivateRoute';
import PublicRoute from '../../routers/PublicRoute';

function App() {
  return (
	<div className="mainApp">
	<Switch>
		{
			routes.map((route, index) => {
				if(route.isPrivate) return <PrivateRoute { ...route } key={ index }/>
				return <PublicRoute { ...route } key={ index }/>
			})
		}
	</Switch>
	<ToastContainer limit={3} transition={Bounce} draggablePercent={60} autoClose={2000} />
	</div>
  );
}

export default App;
