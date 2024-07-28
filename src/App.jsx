import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import PageLayout from "./layouts/PageLayout/PageLayout"
import Profile from "./pages/Profile/Profile"
import useAuthStore from "./store/authStore"
import { auth } from "./firebase/firebase"

function App() {
	const authUser = useAuthStore(auth)

	return (
		<PageLayout>
			<Routes>
				<Route
					path="/"
					element={authUser ? <Home /> : <Navigate to="/auth" />}
				/>
				<Route
					path="/auth"
					element={!authUser ? <Auth /> : <Navigate to="/" />}
				/>
				<Route path="/:username" element={<Profile />} />
			</Routes>
		</PageLayout>
	)
}

export default App
