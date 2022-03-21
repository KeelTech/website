import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable';
import { css, keyframes } from 'emotion'
//import Header from '@components/Header'
import { container } from './style.js';

const bounce = keyframes`
  from, 0%{
    left: 0%;
  }

  25% {
    left: 20%;
  }

  50% {
      left: 50%; 
  }

  75% {
    left: 70%;
  }

  100%{
      left: 100%;
  }
`
export const loader = css`{
	position: absolute;
	top: 0px;
	border: 2px solid blue;
    width: 700px;
    animation: ${bounce} 2s ease-out infinite;
    @media(max-width: 600px){
        width: 250px;
    }
}`;

const HomePage = loadable({
	loader: () => import('@pages/HomePage'),
	loading: ()=><p className={loader}></p>,
	modules: ['@pages/HomePage'],
  	webpack: () => [require.resolveWeak('@pages/HomePage')]
})

const RouteHandler = (props)=>{
	const { history, Route }= props;
	if(!Route.header){
		return <Route.component {...props}/>
	}
	return 	<React.Fragment>
				{/* <Header history={history} title={Route.title}/> */}
				<Route.component {...props} />
			</React.Fragment>
}
const routes = [
	{path: '/', component: HomePage, header: false, title: ''}
]

class ErrorBoundry extends React.Component{
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	
	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
	// You can also log the error to an error reporting service
	console.log(error, errorInfo);
	}

	render(){

		const { hasError } = this.state;

		if(hasError){
			return <p>Something Went Wrong</p>
		}
		return this.props.children;
	}
}

const Routes = ()=>{

	return(
	<div className={container}>
		<ErrorBoundry>
			<Switch>
				{
					routes.map((route, i)=>{
						return <Route key={i} exact path={route.path} render={(props)=><RouteHandler {...props} Route={route}/>} />
					})
				}
			</Switch>
		</ErrorBoundry>
	</div>
	)
}

export default Routes;