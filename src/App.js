import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import Alert from './components/layout/Alert'

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar />
						<main className='container mx-auto px-3 pb-12'>
							<Alert />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/error' element={<Error />} />
								<Route path='/*' element={<Error />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	)
}

export default App
