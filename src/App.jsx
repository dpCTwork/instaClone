import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import PageLayout from "./layouts/PageLayout/PageLayout"
import Profile from "./pages/Profile/Profile"

function App() {
	return (
		<PageLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/:username" element={<Profile />} />
			</Routes>
		</PageLayout>
	)
}

export default App
