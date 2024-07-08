import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import PageLayout from "./layouts/PageLayout/PageLayout"

function App() {
	return (
		<PageLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Auth />} />
			</Routes>
		</PageLayout>
	)
}

export default App
