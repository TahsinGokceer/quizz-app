import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Tests from './Pages/Tests';
import Contact from './Pages/Contact';
import Quiz from './Pages/Quiz';
import EditQuestion from './Pages/EditQuestion';

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tests' element={<Tests />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/quiz/:id' element={<Quiz />} />
				<Route path='/edit-question' element={<EditQuestion />} />

			</Routes>
		</Router>
	);
}

export default App;